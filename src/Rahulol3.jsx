import { ArrowUpRight } from "lucide-react";
import WeatherWidget from "./components/weather-widget";
import { Tooltip } from "./components/tooltip.js"; // Assuming you have a Tooltip component

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-inter">
      
      <main className="max-w-[90%] mx-auto md:px-8 px-1 py-6 md:py-12">
        

        <div className="md:flex  justify-between font-inter text-gray-400 text-base leading-7 items-start gap-16 mb-16">
        <div className="flex-1 md:w-1/2">
        <header className="flex justify-between items-start md:mb-12">
          <a href="https://x.com/rrahulol" target="_blank" className="group" rel="noreferrer">
            <h1 className="md:text-3xl text-2xl my-2 text-gray-500 font-semibold hover:text-gray-600 transition-colors">
              rrahulol
            </h1>
            <WeatherWidget city="Hawaii" country="US" />
          </a>
        </header>
        <p className="text-gray-600 text-xs md:text-sm my-5 md:mb-16">
              I'm Rahul i build internet companies for fun. This is where i document my journey.
            </p>

            <section className="mb-16">
              <h2 className="md:text-sm text-xs  text-gray-400 mb-3">Summary</h2>
              <ul className="space-y-4 md:text-sm text-xs text-gray-600">
                <li>20 year old developer & day trader ( i trade memecoins ) </li>
                <li>Self-taught, skipped college education</li>
                <li>
                  Worked on 112+ projects for clients like Bill and Melinda Gates Foundation CoinTelegraph, Solana, The
                  Network State and many more
                </li>
                <li>Previously used to run a meme page network. 10M+ followers.</li>
                <li>Currently trying to transition from selling time to starting my own companies</li>
                <li>
                  Writing a weekly newsletter called{" "}
                  <a href="#" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                    Product Hacks
                    <ArrowUpRight className="w-4 h-4 ml-0.5" />
                  </a>
                </li>
              </ul>
            </section>
            <section className="mb-5 md:block hidden md:mb-16">
        <h2 className="md:text-sm text-xs  text-gray-400 mb-3">
        Projects</h2>
          <ul className="space-y-4 md:text-sm text-xs text-gray-600">
            {[
              { name: "Darzi", desc: "An AI fashion stylist in your pocket" },
              { name: "Airdropr", desc: "Mailchimp for web3" },
              { name: "Alpha", desc: "Crypto news in your new tab." },
              { name: "Thumbnail Market", desc: "Online marketplace to buy thumbnails" },
              { name: "UX Market", desc: "Bytesized UX redesign service" },
            ].map((project) => (
              <li key={project.name}>
                <a href="#" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                  {project.name}
                  <ArrowUpRight className="w-4 h-4 ml-0.5" />
                </a>
                <span className="ml-1">{project.desc}</span>
              </li>
            ))}
          </ul>
        </section>
      

          </div>
{/* Right Section */}
<div className="w-[90%] mx-auto md:w-1/2 shrink-0 order-first md:order-last flex flex-col items-center">
    <img
      src="https://pbs.twimg.com/profile_images/1869389471743123456/Kc9p1qy2_400x400.jpg"
      alt="Profile photo at a gathering"
      width={360}
      height={360}
      className="mb-6 md:mb-0"
    />
    <a href="https://solscan.io/account/rAhULHBrf2yGuANDuAGLuUTKuLCW17t86T8T6vGcuok" target="_blank">
    <Tooltip content="Track Rahul onchain">
      <p className="md:text-sm text-xs mt- md:mt-6 text-gray-400 hover:text-gray-500 transition-colors cursor-pointer text-center">
        rAhULHBrf2yGuANDuAGLuUTKuLCW17t86T8T6vGcuok
      </p>
    </Tooltip>
    </a>
    <div className="md:mt-12 -ml-28 md:ml-0 mt-6 md:w-2/3 text-left ">
      <section>
      <h2 className="md:text-sm text-xs  text-gray-400 mb-3">Writings</h2>
      <ul className="space-y-3">
          {[
            { date: "16.11.23", title: "Thinking is Executing" },
            { date: "23.9.23", title: "Catching Up With The Boys" },
            { date: "27.6.23", title: "The Problem with AI Apps" },
            { date: "8.12.22", title: "Why Siri Sucks" },
            { date: "22.5.22", title: "Solving the Web3 UX Problem" },
          ].map((post) => (
            <li className="md:text-sm text-xs" key={post.title}>
              <span className="text-gray-500">{post.date}</span>{" "}
              <a href="#" className="text-gray-900 underline hover:text-gray-600">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
</div>
  <section className="mb-5 md:hidden md:mb-16">
        <h2 className="md:text-sm text-xs  text-gray-400 mb-3">
        Projects</h2>
          <ul className="space-y-4 md:text-sm text-xs text-gray-600">
            {[
              { name: "Darzi", desc: "An AI fashion stylist in your pocket" },
              { name: "Airdropr", desc: "Mailchimp for web3" },
              { name: "Alpha", desc: "Crypto news in your new tab." },
              { name: "Thumbnail Market", desc: "Online marketplace to buy thumbnails" },
              { name: "UX Market", desc: "Bytesized UX redesign service" },
            ].map((project) => (
              <li key={project.name}>
                <a href="#" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                  {project.name}
                  <ArrowUpRight className="w-4 h-4 ml-0.5" />
                </a>
                <span className="ml-1">{project.desc}</span>
              </li>
            ))}
          </ul>
        </section>
      

        <section className="mb-5 md:mt-0 mt-14 md:mb-16">
        <h2 className="md:text-sm text-xs  text-gray-400 mb-3">Connect</h2>
        <ul className="space-y-3 md:text-sm text-xs text-gray-600">
            <li>
              <a
                href="https://twitter.com/rrahulol"
                className="text-gray-900 underline inline-flex items-center hover:text-gray-600"
              >
                Twitter
                <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" & "}
              <a
                href="https://instagram.com/rrahulol"
                className="text-gray-900 underline inline-flex items-center hover:text-gray-600"
              >
                Instagram
                <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@rrahulol)"}
            </li>
            <li>
              <a href="mailto:rahulsinghhh2312@gmail.com" className="text-gray-900 underline hover:text-gray-600">
                Email
              </a>
              {" (rahulsinghhh2312@gmail.com)"}
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}