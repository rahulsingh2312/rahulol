import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
export const Tooltip = ({ children, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute bottom-full mb-8 ml-36 px-2 py-1 text-sm text-white  rounded">
       <div className="flex justify-center items-center">   {content}   <ArrowUpRight className="w-4 h-4 ml-0.5" /> </div>
        </div>
      )}
    </div>
  );
};