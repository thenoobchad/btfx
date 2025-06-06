import Copy from "@/components/Copy";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { Navbar } from "@/components/navbar";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
    <main className="flex flex-col -z-1">
    <section id="hero" className="w-full bg-black text-white">
      <div className="container mx-auto">
        <div className="flex h-full min-h-screen flex-col-reverse items-center p-2 md:flex-row">
          <div className="mb-20">
            <Copy delay={0.5} animateOnScroll={true}>
              <div>
                <p className="text-5xl font-extrabold tracking-tight uppercase md:text-7xl">
                  trade, copy & learn <br />
                  with experts on
                  <br />
                  copybullct
                </p>
              </div>
            </Copy>
            <p className="font my-4 font-semibold">
              Join the most innovative trading app worldwide
            </p>
            <button className="rounded-sm bg-orange-500 px-5 py-3 text-sm font-semibold tracking-wide text-white uppercase">
              start trading now
            </button>
          </div>
          <div>
            {/* <img src="#" alt="image" /> */}

            {/* <ThreeDotsLoader /> */}
          </div>
        </div>
      </div>
    </section>

    <section id="about-us" className="bg-muted w-full py-8 pt-8">
      <div className="container mx-auto">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <Copy delay={0.5} animateOnScroll={true}>
            <div>
              <h4 className="my-4 text-center text-xl font-bold">
                <span className="tracking-tight uppercase">BTFX</span>{" "}
                is one of the most reliable <br />
                platform you will ever trade with.
              </h4>
            </div>
          </Copy>
          <div className="w-full mb-4 text-black grid grid-cols-1 gap-4 grid-rows-3 md:grid-cols-3 md:grid-rows-1 container p-2">
            <div className="flex flex-col rounded-sm border bg-white p-6">
              <h4 className="my-4 text-2xl font-bold">Expert Traders</h4>
              <ul className="mt-2 flex flex-col gap-4">
                <li>4x more trades per user</li>
                <li>Highly engaging</li>
                <li>Worldwide community</li>
              </ul>
            </div>

            <div className="flex flex-col rounded-sm border bg-white p-6">
              <h4 className="my-4 text-2xl font-bold">Copy Trading</h4>
              <ul className="mt-2 flex flex-col gap-4">
                <li>Copy top traders</li>
                <li>Save time</li>
                <li>
                  Real time leaderboard with statistics
                </li>
              </ul>
            </div>

            <div className="flex flex-col rounded-sm border bg-white p-6">
              <h4 className="my-4 text-2xl font-bold">
                Multi-Asset
                Management
              </h4>
              <ul className="mt-2 flex flex-col gap-4">
                <li>
                  CFD's on FX, Indices,
                  Metals Commodities
                </li>
                <li>Short & Long Trading</li>
                <li>Low and transparent fees</li>
              </ul>
            </div>
          </div>
          <div className="mb-10 flex flex-col">
            <p className="my-6 text-sm">
              Register for free($0.00) with minutes
            </p>
            <button className="rounded-sm bg-orange-500 px-5 py-3 text-sm font-semibold tracking-wide text-white uppercase">
              create an account
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="what-to-do" className="w-full bg-black  pt-8 text-white">
      <div className="container mx-auto ">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <Copy delay={0.5} animateOnScroll={true}>
            <div>
              <h4 className="my-4 text-center text-xl font-bold">
                Trade on the most sophisticated trading technology (CBTRADES)
                BTFX
              </h4>
            </div>
          </Copy>
          <p className="text-md my-6 font-medium w-[700px]px-2 flex flex-col">
            CopyBullCT offers the fastest order execution capabilities with
            the ease and convenience of copy trading.
            <br />
            CopyBullCT Web has tight spreads, Level II Pricing, and one-click
            trading along with features such as a personalized trader
            dashboard to allow monitoring of your position in real time.
          </p>
          <button className="rounded-sm bg-orange-500 px-5 py-2 text-sm font-semibold tracking-wide text-white uppercase">
            create an account
          </button>
        </div>
      </div>
    </section>

    <section id="steps" className="min-h-screen w-full px-2 pt-8">
      <div className="mx-auto container">
        <div className="flex flex-col items-center justify-center">
          <h4 className="my-4 text-center text-xl font-bold">
            Start Trading in 4 Steps
          </h4>

          <div className="mb-8 grid grid-cols-1 grid-rows-4 w-full items-start justify-center gap-8 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
            <div className="flex  flex-col rounded-sm border bg-black p-6 text-white">
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white text-black">
                <span className="text-2xl font-bold">1</span>
              </div>

              <h4 className="my-2 mt-20 font-semibold">Register</h4>
              <p>
                Sign up for a free CopyBullCT account and get access to a
                copytrade dashboard and start making profit
              </p>
            </div>

            <div className="flex  flex-col rounded-sm border bg-black p-6 text-white">
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white text-black">
                <span className="text-2xl font-bold">2</span>
              </div>

              <h4 className="my-2 mt-20 font-semibold">Verify</h4>
              <p>
                Fill in the questionnaire about your trading preference
                copytrade dashboard and start making profit
              </p>
            </div>

            <div className="flex flex-col rounded-sm border bg-black p-6 text-white">
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white text-black">
                <span className="text-2xl font-bold">3</span>
              </div>

              <h4 className="my-2 mt-20 font-semibold">Fund</h4>
              <p>
                Make a deposite via any funding method you prefer to start
                trading with real money on CopyBullCT.
              </p>
            </div>

            <div className="flex flex-col rounded-sm border bg-black p-6 text-white">
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white text-black">
                <span className="text-2xl font-bold">4</span>
              </div>

              <h4 className="my-2 mt-20 font-semibold">Trade</h4>
              <p className="flex-wrap">
                Trades are opened and closed by top traders. Relax & Earn
                while they do the rest.
              </p>
            </div>
          </div>

          <div className="mb-10 flex flex-col">
            <p className="my-6 text-sm">
              Register for free($0.00) with minutes
            </p>
            <button className="rounded-sm bg-orange-500 px-5 py-3 text-sm font-semibold tracking-wide text-white uppercase">
              create an account
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="details" className="w-full px-2 pt-8">
      <div className="mx-auto">
        <div className="min-h-screen">
          <div className="grid-col-12 grid w-full grid-rows-2 gap-4 py-20">
            {/* CARDS BEGIN HERE */}

            <div className="bg-gray-300 flex w-full flex-col items-start rounded-sm border p-6 text-black md:col-span-4 md:row-span-1">
              <h4 className="my-2 text-2xl font-semibold">
                Spread from 0.0 pips
              </h4>
              <ul className="flex flex-col gap-2">
                <li>Raw spread means from 0.0 pips*</li>
                <li>
                  Our diverse and proprietary liquidity mix keeps spreads
                  tight 24/5
                </li>
              </ul>

              <button className="mt-6 rounded-sm bg-orange-500 px-5 py-3 text-sm font-semibold tracking-wide text-white uppercase">
                Pricing Overview
              </button>
            </div>

            <div className="bg-gray-300 flex w-full flex-col items-start rounded-sm border p-6 text-black md:col-span-2 md:row-span-1">
              <h4 className="my-2 text-2xl font-semibold">
                Fast Order Execution
              </h4>
              <ul className="flex flex-col gap-2">
                <li>Average execution speed of 40ms**</li>
                <li>Low latency Fibre Optic and Equinix NY4 server</li>
                <li>Free low latency collocated VPS available</li>
              </ul>

              <button className="mt-6 rounded-sm bg-orange-500 px-5 py-3 text-sm font-semibold tracking-wide text-white uppercase">
                Get your free VPS
              </button>
            </div>

            <div className="bg-gray-300 flex w-full flex-col items-start rounded-sm border p-6 text-black md:col-span-2 md:row-span-1">
              <h4 className="my-2 text-2xl font-semibold">
                Institutional Grade Trading
              </h4>
              <ul className="flex flex-col gap-2">
                <li>Real, deeo and diverse liquidity you can trade on.</li>
                <li>Over 29 billion USD in FX trades processed daily.</li>
              </ul>

              <button className="mt-6 rounded-sm bg-orange-500 px-5 py-3 text-sm font-semibold tracking-wide text-white uppercase">
                Raw Pricing Benefits
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="difference"
      className="min-h-screen w-full bg-black px-2 py-4 text-white"
    >
      <div className="mx-auto h-full container">
        <div className="flex h-full items-center justify-center">
          <div className="my-20 w-full grid grid-col-1 grid-rows-4 gap-4 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2">
            <div className="flex min-h-[400px] flex-col justify-between rounded-sm border-1 p-4 ">
              <img src="#" alt="image" />
              <div className="">
                <h4 className="text-2xl font-bold">
                  Regulation and Security
                </h4>
                <p>
                  CopyBullCT has group entities authorized and regulated
                  locally.
                </p>
              </div>
            </div>

            <div className="flex min-h-[400px] flex-col justify-between rounded-sm border-1 p-4 ">
              <img src="#" alt="image" />
              <div>
                <h4 className="text-2xl font-bold">
                  Multiple Deposit and Security of Funds
                </h4>
                <p>
                  Commodities, Stocks, Futures, Forex pairs, Indicies & more
                  CFDs.
                </p>
              </div>
            </div>

            <div className="flex min-h-[400px] flex-col justify-between rounded-sm border-1 p-4 ">
              <img src="#" alt="image" />
              <div>
                <h4 className="text-2xl font-bold">
                  EXperience trading with Members of CopyBullCT
                </h4>
                <p>Publicly listed on Frankfurt Stock EXchange.</p>
              </div>
            </div>

            <div className="flex min-h-[400px] flex-col justify-between rounded-sm border-1 p-4 ">
              <img src="#" alt="image" />

              <div>
                <h4 className="text-2xl font-bold">
                  Multi-Currency Accounts
                </h4>
                <p>
                  Open multiple trading accounts with one of many supported
                  base currency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section id="details" className="w-full px-2 pt-8">
      <div className="mx-auto">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-4">
           
              <HorizontalScroll>
                
              <div className="bg-muted flex w-[300px] flex-col rounded-sm border p-6 text-black">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-sm bg-gray-200 text-black">
                  <span className="text-2xl font-bold"></span>
                </div>

                <h4 className="my-2 mt-20 text-xl font-bold">
                  1000+ Instrument and
                  <br /> Assets
                </h4>
                <p className="flex flex-wrap text-sm text-gray-400">
                  Trade Derivatives and Invest in Stocks.
                </p>
              </div>

              <div className="bg-muted flex w-[300px] flex-col rounded-sm border p-6 text-black">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-sm bg-gray-200 text-black">
                  <span className="text-2xl font-bold"></span>
                </div>

                <h4 className="my-2 mt-20 text-xl font-bold">
                  Real-Time Order Execution
                </h4>
                <p className="flex w-full flex-wrap text-sm text-gray-400">
                  Stay on top of the market with <br /> our high speed order
                  processing.
                </p>
              </div>

              <div className="bg-muted flex w-[300px] flex-col rounded-sm border p-6 text-black">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-sm bg-gray-200 text-black">
                  <span className="text-2xl font-bold"></span>
                </div>

                <h4 className="my-2 mt-20 text-xl font-bold">
                  Easy Dashboard Interface
                </h4>
                <p className="text-sm text-gray-400">
                  Monitor your trade on the go with <br /> CopyBullCT
                  dashboard.
                </p>
              </div>

              <div className="bg-muted flex w-[300px] flex-col rounded-sm border p-6 text-black">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-sm bg-gray-200 text-black">
                  <span className="text-2xl font-bold"></span>
                </div>

                <h4 className="my-2 mt-20 text-xl font-bold">
                  Discover Copy-Trading
                </h4>
                <p className="text-sm text-gray-400">
                  Trade Derivatives and Invest in Stocks.
                </p>
              </div>

              <div className="bg-muted flex w-[300px] flex-col rounded-sm border p-6 text-black">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-sm bg-gray-200 text-black">
                  <span className="text-2xl font-bold"></span>
                </div>

                <h4 className="my-2 mt-20 text-xl font-bold">
                  Free Daily News and <br />
                  Trading Signal
                </h4>
                <p className="flex flex-wrap text-sm text-gray-400">
                  Get the latest market updates in your <br />
                  CopyBullCT feed and copy trading signals <br />
                  from the selected provides.
                </p>
              </div>

              <div className="bg-muted flex w-[300px] flex-col rounded-sm border p-6 text-black">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-sm bg-gray-200 text-black">
                  <span className="text-2xl font-bold"></span>
                </div>

                <h4 className="my-2 mt-20 text-xl font-bold">
                  1000+ Instrument and <br />
                  Assets
                </h4>
                <p className="text-sm text-gray-400">
                  Trade Derivatives and Invest in Stocks.
                </p>
              </div>
            </HorizontalScroll>
          </div>
          <div className="my-10">
            <button className="rounded-sm bg-orange-500 px-5 py-3 text-sm font-semibold tracking-wide text-white uppercase">
              create an account
            </button>
          </div>

          {/* </div> */}
        {/* </div>
      </div>
    </section> */} 

    <section id="details" className="w-full px-2 pt-8 ">
      <div className="mx-auto container flex flex-col justify-center items-center">
        <div className="my-10">
          <div className="w-full grid grid-col-1 grid-rows-4 gap-4 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2">
            {/* INVESTMENT PLANS */}
            <div className="flex w-[350px] h-[550px] flex-col gap-4 rounded-2xl border-2 bg-blue-500 text-white p-10 py-10">
              <h4 className="flex w-full justify-center text-4xl font-bold tracking-tight uppercase pt-4">
                standard
              </h4>
             
              <h2 className="flex justify-center pt-8">
                <span className="text-2xl font-bold">$</span>
                <span className="text-6xl font-semibold tracking-tighter">
                  1000
                </span>
                <span className="items-end"></span>
              </h2>
              <ul className="flex flex-col gap-2 w-full">
                <li className=" py-2 flex gap-2 font-semibold"><Check className="h-5 w-5 bg-white text-blue-500 rounded-full"/>
                  Minimum <span>$1,000.00</span>
                </li>
                  <li className="py-2 flex gap-2 font-semibold">
                  <Check className="h-5 w-5 bg-white text-blue-500 rounded-full"/>
                  Maximum <span>$5,000.00</span>
                </li>
                  <li className=" py-2 flex gap-2 font-semibold"><Check className="h-5 w-5 bg-white text-blue-500 rounded-full"/>
                    
                    10% Trade Commission</li>
                  <li className=" py-2 flex gap-2 font-semibold">
                  <Check className="h-5 w-5 bg-white text-blue-500 rounded-full"/>
                    24/7 Active Support</li>
                </ul>
                <div className="w-full flex justify-center mt-4">
              <a
                href="#"
                className="flex h-15 items-center justify-center rounded-sm bg-white px-6 py-2  w-fit text-blue-500 font-bold uppercase"
              >
                Get Started
                  </a>
                  </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
      </main>
      </>
  );
}
