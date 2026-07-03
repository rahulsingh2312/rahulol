import { ArrowUpRight, Linkedin } from "lucide-react";
import WeatherWidget from "./components/weather-widget";
import { Tooltip } from "./components/tooltip.js"; // Assuming you have a Tooltip component
import { Github , Twitter , Instagram ,Mail } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-inter">
      
      <main className="max-w-[90%] mx-auto md:px-8 px-1 py-6 md:py-12">
        

        <div className="md:flex  justify-between font-inter text-gray-400 text-base leading-7 items-start gap-16 mb-16">
        <div className="flex-1 md:w-1/2">
        <header className="flex justify-between items-start md:mb-12">
          <a href="https://x.com/rahu1o1" target="_blank" className="group" rel="noreferrer">
            <h1 className="md:text-3xl text-2xl my-2 text-gray-500 font-semibold hover:text-gray-600 transition-colors">
              r4hu1
            </h1>
            <WeatherWidget city="Mumbai" country="IN" />
          </a>
        </header>
        <p className="text-gray-600 text-xs md:text-sm my-5 md:mb-16">
             Hi i'm rahul, a quant & fullstack dev trading crypto markets and building internet companies for .fun. This is where i document my journey.
            </p>

            <section className="mb-16">
              <h2 className="md:text-sm text-xs  text-gray-400 mb-3">Summary</h2>
              <ul className="space-y-4 md:text-sm text-xs text-gray-600">
                <li><span className="font-medium text-gray-900">21</span> year old <em>developer & quant</em> for internet based assets. </li>
                <li>
                Was <span className="font-medium text-gray-900">#1</span> on   <a className="underline" href="https://gmgn.ai/" target="_blank" rel="noreferrer">
              GMGN.ai
               </a> <span className="font-medium text-gray-900">PnL Leaderboard</span>.

               </li>
                <li>
                <em>Quant & FullStack Dev</em> at <a className="underline" href="https://x.com/insidersdotbot" target="_blank" rel="noreferrer">Insiders.bot</a>, built a real-time Polymarket trading system <span className="font-medium text-gray-900">10-20s faster</span> than Polymarket itself, driving <span className="font-medium text-gray-900">$1.3M+</span> in volume.
                </li>
                <li>Computer science engineer & <em>tortured artist</em> </li>
                <li>
                Worked at multiple onchain Startups like <a className="underline" href="https://www.catoff.xyz/" target="_blank" rel="noreferrer"> Catoff gaming as <em>React Native Dev</em>, </a> <a className="underline" href="https://www.chainlaunch.xyz/" target="_blank" rel="noreferrer"> Chain Launch as <em>Solana Dev</em></a> & Web 2 startups like <a className="underline" href="https://vighnotech.com/" target="_blank" rel="noreferrer"> Vighnotech as <em>FullStack Dev</em></a>, <span className="font-medium text-gray-900">4x Hackathon Winner</span>.
                </li>
               <li>
                <a className="underline" href="https://superteam.fun/" target="_blank" rel="noreferrer">
               SuperteamIN Member.
               </a>
               </li>
                <li>Previously Co-Founded <a className="underline" href="https://www.instagram.com/nutrisnap.ai/" target="_blank" rel="noreferrer">nutrisnap</a> <span className="font-medium text-gray-900">25k+ users, 3mil+ views</span> on <a className="underline" href="https://www.instagram.com/nutrisnap.ai/" target="_blank" rel="noreferrer">socials</a> </li>
                {/* <li>Currently trying to transition from selling time to starting my own companies</li> */}
                <li>Currently trying to make impact with my code</li>
                <li>
                  I write about my life on {" "}
                  <a href="https://x.com/rahu1o1" target="_blank" rel="noreferrer" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                    Twitter || X
                    <ArrowUpRight className="w-4 h-4 ml-0.5" />
                  </a>
                </li>
              </ul>
            </section>
            <section className="mb-5 md:block hidden md:mb-16">
  <h2 className="md:text-sm text-xs text-gray-400 mb-3">Projects</h2>
  <ul className="space-y-4 md:text-sm text-xs text-gray-600">
    {[
      { name: "GasFeesBot", desc: "Send any token you hold, get native gas on any chain instantly, no sign-up, no KYC", link: "https://t.me/getgasfeesbot", date: "2026" },
      { name: "Viral City", desc: "AI UGC engine for viral, monetizable short-form video content", link: "https://viral-city.cityprotocol.co", date: "2025" },
      { name: "Totem", desc: "AI to 3D asset generation: mint, sell & print your own figurines", link: "https://totem.cityprotocol.co", date: "2025" },
      { name: "Mytakes.fun", desc: "Live on Solana Dapp store, pumpfun x polymarket two way markets", link: "https://x.com/takes_mobile/status/1958976229425782935", date: "2025" },
      { name: "Cookchat.fun", desc: "Token Gated Chat for all meme tokens, only accessible if u hold 0.1 sol worth of it.", link: "https://cookchat.fun", date: "2025" },
      { name: "Lottos.wtf", desc: "Launchpad but for lotteries live on mainnet", link: "https://lottos.wtf", date: "2025" },
      // { name: "Wealthify", desc: "App to Analyze assets, reduce liabilities, and find tailored investment opportunities", link: "https://www.thewealthify.me/", date: "2024" },
      { name: "REWINDAI", desc: "AI agent that roasts you based on your onchain data", link: "https://solanarewind.fun/", date: "2024" },
      { name: "S.I.C.K.", desc: "Users can create token crates, earn referral cash", link: "https://sickfreak.club/", date: "2024" },
      { name: "Nutrisnap", desc: "Know about your food from just a snap", link: "https://nutrisnapai2.vercel.app", date: "2023–24" },
      { name: "yen.fyi", desc: "Site for a token 💹, ai eyes, nfts, swaps, charts", link: "https://yen.fyi", date: "2024" },
      { name: "Purebet", desc: "Onchain sports betting app", link: "https://purebetv2.vercel.app/", date: "2024" },
      { name: "Emoji Buy", desc: "Buy your fav emoji which are actually tokens", link: "https://emojibuy.fun", date: "2024" },
      { name: "DBAS Coin", desc: "A token where every week the token supply is randomly reduced, sparking demand and driving prices upward", link: "https://dbascoin.vercel.app/", date: "2023" },
      ].map((project) => (
      <li key={project.name}>
        <a
          target="_blank" rel="noreferrer"
          href={project.link}
          className="text-gray-900 underline inline-flex items-center hover:text-gray-600"
        >
          {project.name}
        
          <ArrowUpRight className="w-4 h-4 ml-0.5" />
        </a>
        <span className="text-gray-400 ml-1 ">· {project.date} · </span>
        <span className="ml-1">{project.desc}</span>
      </li>
    ))}
  </ul>
</section>

      

          </div>
{/* Right Section */}
<div className="w-[90%] mx-auto md:w-1/2 shrink-0 order-first md:order-last flex flex-col items-center">
    <img
      src="/gmgn-degen-everyday.png"
      alt="GMGN Degen Everyday"
      width={360}
      height={360}
      className="mb-6 md:mb-0"
    />
    <a href="https://solscan.io/account/rAhULHBrf2yGuANDuAGLuUTKuLCW17t86T8T6vGcuok" target="_blank" rel="noreferrer">
    <Tooltip content="Track Rahul onchain">
      <p className="md:text-sm text-xs mt- md:mt-6 text-gray-400 hover:text-gray-500 transition-colors cursor-pointer text-center">
        rAhULHBrf2yGuANDuAGLuUTKuLCW17t86T8T6vGcuok
      </p>
    </Tooltip>
    </a>
    <div className="md:mt-12 text-right  md:ml-0 mt-6 md:w-2/3 md:text-left ">
    <section>
      <h2 className="md:text-sm text-xs  text-gray-400 mb-3">Talks</h2>
      <ul className="space-y-3">
          {[
            { date: "07/04/25", title: "Solana, Magic Internet Money" , link :"https://x.com/rrahulol/status/1912528508380668030" },
            // { date: "29/08/24", title: "Infra Providers Fu*king you over", link:"https://medium.com/@rahulsinghhh2312/stop-using-nextjs-before-its-too-late-13c35f5b076f" },
            // { date: "23.9.23", title: "Catching Up With The Boys" },
            // { date: "27.6.23", title: "The Problem with AI Apps" },
            // { date: "8.12.22", title: "Why Siri Sucks" },
            // { date: "22.5.22", title: "Solving the Web3 UX Problem" },
          ].map((post) => (
            <li className="md:text-sm text-xs" key={post.title}>
              <span className="text-gray-500">{post.date}</span>{" "}{" "}
              <a target="_blank" rel="noreferrer" href={post.link} className="text-gray-900 underline hover:text-gray-600">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
      <h2 className="md:text-sm text-xs  mt-5 text-gray-400 mb-3">Writings</h2>
      <ul className="space-y-3">
          {[
            { date: "16/04/25", title: "Spam to Scams"  , link :"https://medium.com/@rahulsinghhh2312/spam-to-scams-dirty-dev-tricks-with-dusting-address-poisoning-on-solana-27a1c30a8325"},
            { date: "15/01/25", title: "UBI Using Crypto Powered Ai agents" , link :"https://medium.com/@rahulsinghhh2312/enabling-universal-basic-income-through-crypto-powered-ai-agents-ed65f1eb377d" },
            { date: "29/08/24", title: "Infra Providers Fu*king you over", link:"https://medium.com/@rahulsinghhh2312/stop-using-nextjs-before-its-too-late-13c35f5b076f" },
            // { date: "23.9.23", title: "Catching Up With The Boys" },
            // { date: "27.6.23", title: "The Problem with AI Apps" },
            // { date: "8.12.22", title: "Why Siri Sucks" },
            // { date: "22.5.22", title: "Solving the Web3 UX Problem" },
          ].map((post) => (
            <li className="md:text-sm text-xs" key={post.title}>
              <span className="text-gray-500">{post.date}</span>{" "}{" "}
              <a target="_blank" rel="noreferrer" href={post.link} className="text-gray-900 underline hover:text-gray-600">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-5 md:mt-14 hidden md:block md:mb-16">
        <h2 className="md:text-sm text-xs  text-gray-400 mb-3">Connect</h2>
        <ul className="space-y-3 md:text-sm text-xs text-gray-600">
            <li>
              <a
               target="_blank" rel="noreferrer"
                href="https://twitter.com/rahu1o1"
                className="text-gray-900 underline inline-flex items-center hover:text-gray-600"
              >
                Twitter <Twitter className="w-4 h-4 ml-0.5" />
                <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@rahu1o1) & "}
              <a
               target="_blank" rel="noreferrer"
                href="https://instagram.com/r4hu1ok"
                className="text-gray-900 underline inline-flex items-center hover:text-gray-600"
              >
                Instagram
                <Instagram  className="w-4 h-4 ml-0.5"/>
                <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@r4hu1ok)"}
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://t.me/r4hu1k" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                Telegram <FaTelegramPlane className="w-4 h-4 ml-0.5" />    <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@r4hu1k)"}
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/rahulsingh2312" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                Github <Github className="w-4 h-4 ml-0.5" />    <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@rahulsingh2312)"}
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rahulsinghhh2312/" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                Linked <Linkedin className="w-4 h-4 ml-0.5" />    <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@rahulsinghhh2312)"}
            </li>
            <li>
              <a href="mailto:rahulsinghhh2312@gmail.com" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                Email <Mail  className="w-4 h-4 ml-0.5" />    <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (rahulsinghhh2312@gmail.com)"}
            </li>
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
            { name: "GasFeesBot", desc: "Send any token you hold, get native gas on any chain instantly, no sign-up, no KYC", link: "https://t.me/getgasfeesbot", date: "2026" },
            { name: "Viral City", desc: "AI UGC engine for viral, monetizable short-form video content", link: "https://viral-city.cityprotocol.co", date: "2025" },
            { name: "Totem", desc: "AI to 3D asset generation: mint, sell & print your own figurines", link: "https://totem.cityprotocol.co", date: "2025" },
      { name: "Mytakes.fun", desc: "Live on Solana Dapp store, pumpfun x polymarket two way markets", link: "https://x.com/takes_mobile/status/1958976229425782935", date: "2025" },
            { name: "Cookchat.fun", desc: "Token Gated Chat for all meme tokens, only accessible if u hold 0.1 sol worth of it.", link: "https://cookchat.fun", date: "2025" },
            { name: "Lottos.wtf", desc: "Launchpad but for lotteries live on mainnet", link: "https://lottos.wtf", date: "2025" },
            // { name: "Wealthify", desc: "App to Analyze assets, reduce liabilities, and find tailored investment opportunities", link: "https://www.thewealthify.me/", date: "2024" },

            { name: "REWINDAI", desc: "AI agent that roasts you based on your onchain data", link: "https://solanarewind.fun/", date: "2024" },
            { name: "S.I.C.K.", desc: "Users can create token crates, earn referral cash", link: "https://sickfreak.club/", date: "2024" },
            { name: "Nutrisnap", desc: "Know about your food from just a snap", link: "https://nutrisnapai2.vercel.app", date: "2023–24" },
            { name: "yen.fyi", desc: "Site for a token 💹, ai eyes, nfts, swaps, charts", link: "https://yen.fyi", date: "2024" },
            { name: "Purebet", desc: "Onchain sports betting app", link: "https://purebetv2.vercel.app/", date: "2024" },
            { name: "Emoji Buy", desc: "Buy your fav emoji which are actually tokens", link: "https://emojibuy.fun", date: "2024" },
            { name: "DBAS Coin", desc: "A token where every week the token supply is randomly reduced, sparking demand and driving prices upward", link: "https://dbascoin.vercel.app/", date: "2023" },
              ].map((project) => (
              <li key={project.name}>
                <a target="_blank" rel="noreferrer" href={project.link} className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                {project.name}
                  <ArrowUpRight className="w-4 h-4 ml-0.5" />
                </a>
                <span className="text-gray-400 ml-1">· {project.date} · </span>
                <span className="ml-1">{project.desc}</span>
              </li>
            ))}
          </ul>
        </section>
      

        <section className="mb-5 md:hidden md:mt-0 mt-14 md:mb-16">
        <h2 className="md:text-sm text-xs  text-gray-400 mb-3">Connect</h2>
        <ul className="space-y-3 md:text-sm text-xs text-gray-600">
            <li>
              <a
               target="_blank" rel="noreferrer"
                href="https://twitter.com/rahu1o1"
                className="text-gray-900 underline inline-flex items-center hover:text-gray-600"
              >
                Twitter <Twitter className="w-4 h-4 ml-0.5" />
                <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@rahu1o1) & "}
              <a
               target="_blank" rel="noreferrer"
                href="https://instagram.com/r4hu1ok"
                className="text-gray-900 underline inline-flex items-center hover:text-gray-600"
              >
                Instagram
                <Instagram  className="w-4 h-4 ml-0.5"/>
                <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@r4hu1ok)"}
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://t.me/r4hu1k" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                Telegram <FaTelegramPlane className="w-4 h-4 ml-0.5" />    <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@r4hu1k)"}
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/rahulsingh2312" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                Github <Github className="w-4 h-4 ml-0.5" />    <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@rahulsingh2312)"}
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rahulsinghhh2312/" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                Linked <Linkedin className="w-4 h-4 ml-0.5" />    <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (@rahulsinghhh2312)"}
            </li>
            <li>
              <a href="mailto:rahulsinghhh2312@gmail.com" className="text-gray-900 underline inline-flex items-center hover:text-gray-600">
                Email <Mail  className="w-4 h-4 ml-0.5" />    <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </a>
              {" (rahulsinghhh2312@gmail.com)"}
            </li>
          </ul>
        </section>
        <section className="md:mt-0 mt-10 flex md:text-sm text-xs text-gray-400 justify-center items-center">
          made with 🤍 by rahul
        </section>
        
      </main>
    
    </div>
  );
}
