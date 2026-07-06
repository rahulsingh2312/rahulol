import { useEffect, useRef, useState } from "react";

const COLORS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["", "M", "", "W", "", "F", ""];
const CELL = 11;
const GAP = 3;
const LABEL_WIDTH = CELL + GAP + 4;

function dayOfWeek(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

function monthOf(day) {
  if (!day) return null;
  const m = Number(day.date.split("-")[1]);
  return m - 1;
}

function toColumns(days) {
  const columns = [];
  let col = [];
  days.forEach((day, i) => {
    const dow = dayOfWeek(day.date);
    if (i === 0) {
      for (let p = 0; p < dow; p++) col.push(null);
    }
    col.push(day);
    if (dow === 6) {
      columns.push(col);
      col = [];
    }
  });
  while (col.length && col.length < 7) col.push(null);
  if (col.length) columns.push(col);
  return columns;
}

function Calendar({ columns }) {
  let lastMonth = null;
  let lastLabelCol = -Infinity;
  const MIN_LABEL_GAP = 3;

  return (
    <div style={{ display: "inline-block", maxWidth: "100%" }}>
      <div style={{ display: "flex", gap: GAP, marginBottom: 4, marginLeft: LABEL_WIDTH }}>
        {columns.map((col, ci) => {
          const m = monthOf(col.find(Boolean));
          const isNewMonth = m !== null && m !== lastMonth;
          if (m !== null) lastMonth = m;
          const show = isNewMonth && ci - lastLabelCol >= MIN_LABEL_GAP;
          if (show) lastLabelCol = ci;
          return (
            <div
              key={ci}
              style={{ width: CELL, fontSize: 11, color: "#9ca3af", whiteSpace: "nowrap", overflow: "visible" }}
            >
              {show ? MONTHS[m] : ""}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: GAP, marginRight: 4, width: CELL }}>
          {WEEKDAYS.map((label, i) => (
            <div
              key={i}
              style={{
                width: CELL,
                height: CELL,
                fontSize: 11,
                color: "#9ca3af",
                display: "flex",
                alignItems: "center",
              }}
            >
              {label}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: GAP }}>
          {columns.map((col, ci) => (
            <div key={ci} style={{ display: "flex", flexDirection: "column", gap: GAP }}>
              {col.map((day, ri) => (
                <div
                  key={ri}
                  title={day ? day.count + " contributions on " + day.date : undefined}
                  style={{
                    width: CELL,
                    height: CELL,
                    borderRadius: 2,
                    backgroundColor: day ? COLORS[day.level] : COLORS[0],
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GithubCalendar({ username }) {
  const [days, setDays] = useState(null);
  const [maxCols, setMaxCols] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/" + username + "?y=last")
      .then(function(res) { return res.json(); })
      .then(function(data) { setDays(data.contributions || []); })
      .catch(function() { setDays([]); });
  }, [username]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const perCol = CELL + GAP;

    function measure() {
      const w = el.getBoundingClientRect().width;
      if (w === 0) return; // not laid out yet, wait for ResizeObserver
      const usable = w - LABEL_WIDTH;
      const cols = Math.max(1, Math.floor(usable / perCol));
      setMaxCols(cols);
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return function() { ro.disconnect(); };
  }, []);

  const ready = days && days.length > 0 && maxCols !== null;
  const visibleColumns = ready ? toColumns(days).slice(-maxCols) : [];

  return (
    <div
      ref={wrapperRef}
      className="mt-5 md:mt-8 mb-10 md:mb-0 w-full overflow-hidden"
    >
      {ready && (
        <a
          href={"https://github.com/" + username}
          target="_blank"
          rel="noreferrer"
          style={{ display: "block" }}
        >
          <Calendar columns={visibleColumns} />
        </a>
      )}
    </div>
  );
}
