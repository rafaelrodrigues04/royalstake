'use client'

import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/Hero";
import LogoSliderSection from "./components/sections/LogoSlider";
import NewsSliderSection from "./components/sections/NewsSlider";
import PaymentMethodsSection from "./components/sections/PaymentMethods";
import Image from "next/image"
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function HomePage() {

  return (
    <div>
      {/* Main Wrapper */}
      <div className="flex flex-col items-center w-full">
        <Navbar />
        {/* Content Wrapper */}
        <div className="flex flex-col items-center gap-16 w-full">
          <HeroSection />
          <LogoSliderSection />
          <NewsSliderSection />
          <PaymentMethodsSection />
          {/* Partners Wrapper */}
          <div className="flex justify-center w-full px-4">
            {/* Partners Container */}
            <div className="container max-w-screen-xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-16">
              {/* First Card with Background Image */}
              <div className="relative flex flex-1 bg-slate-900 p-6 rounded-xl w-full flex-col lg:flex-row items-center justify-between min-h-[300px] xsm:min-h-[375px] sm:min-h-[450px] lg:min-h-[250px]">
                {/* First Card Content Wrapper */}
                <div className="text-center lg:text-left w-full lg:w-2/5">
                  {/* First Card Title */}
                  <h2 className="text-xl lg:text-2xl font-semibold text-white w-full">
                    Trusted by major gaming brands.
                  </h2>
                  {/* First Card Images */}
                  <div className="flex flex-row lg:flex-col gap-2 justify-center items-center lg:items-start lg:justify-start mt-2 lg:mt-4">
                    <img 
                      src="/images/logos/esl.png" 
                      width="96" 
                      alt="ESL Logo" 
                    />
                    <img 
                      src="/images/logos/blast.png" 
                      width="96" 
                      alt="BLAST Logo" 
                    />
                  </div>
                </div>

                {/* Background Image */}
                <div className="absolute bottom-0 lg:right-0 w-2/3 sm:w-3/5 md:w-1/2 lg:w-3/5">
                  <img 
                    src="/images/major-tournaments-sponsor.png" 
                    alt="Major Tournaments Sponsor" 
                    className="transform translate-x-0 translate-y-0"
                  />
                </div>
              </div>

              {/* Second Card with Background Image */}
              <div className="relative flex flex-1 bg-slate-900 p-6 rounded-xl w-full flex-col lg:flex-row items-center justify-between min-h-[450px] xsm:min-h-[525px] sm:min-h-[600px] md:min-h-[550px] lg:min-h-[250px]">
                {/* Second Card Content Wrapper */}
                <div className="text-center lg:text-left w-2/5">
                  <h2 className="text-xl lg:text-2xl font-semibold text-white w-full">
                    Partnered with the best team.
                  </h2>
                  {/* Images */}
                  <div className="flex justify-center lg:justify-start mt-2 lg:mt-4">
                    <Image
                      src="/images/logos/vitality.png" 
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: '32' }}
                      alt="Vitality Team Logo" 
                    />
                  </div>
                </div>

                {/* Background Image */}
                <div className="absolute bottom-0 right-0 w-full xsm:w-4/5 md:w-3/5">
                  <img 
                    src="/images/vitality-partner.png" 
                    alt="Vitality Partner" 
                    className="rounded-br-xl transform translate-x-0 translate-y-0"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Statistics Wrapper */}
          <div className="flex justify-center w-full px-4">
            {/* Statistics Container */}
            <div className="container max-w-screen-xl flex flex-col bg-slate-900 p-6 rounded-xl lg:flex-row items-center md:items-start md:justify-between gap-16">
              {/* Left side - Image grid */}
              <div className="flex justify-center items-center lg:items-start flex-1 flex-col gap-4 w-full h-full">
                <h2 className="text-white font-bold text-3xl xsm:text-5xl">Our Numbers</h2>
                <h2 
                  className="text-slate-900 font-bold text-4xl xsm:text-6xl"
                  style={{
                    textShadow: '1px 1px 0px #fbbf24, -1px -1px 0px #fbbf24, 1px -1px 0px #fbbf24, -1px 1px 0px #fbbf24'
                  }}
                >
                Don't Lie!
                </h2>
              </div>

              {/* Right side - Text content */}
              <div className="flex flex-[2] w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                  <div className="flex flex-col bg-slate-950 rounded-xl p-4 relative">
                    <h4 className="text-3xl text-yellow-500">2,737,139</h4>
                    <p className="text-lg text-white">Registered Users</p>
                    <Image
                      src="/images/icons/users.svg"
                      alt="Users"
                      width={96}
                      height={0}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 w-0 xsm:w-16 md:w-24"
                    />
                  </div>
                  <div className="flex flex-col bg-slate-950 rounded-xl p-4 relative">
                    <h4 className="text-3xl text-yellow-500">8,282,864</h4>
                    <p className="text-lg text-white">Withdrawals</p>
                    <Image
                      src="/images/icons/withdrawal.svg"
                      alt="Withdrawal"
                      width={96}
                      height={0}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 w-0 xsm:w-16 md:w-24 scale-[65%]"
                    />
                  </div>
                  <div className="flex flex-col bg-slate-950 rounded-xl p-4 relative">
                    <h4 className="text-3xl text-yellow-500">24/7/365</h4>
                    <p className="text-lg text-white">Customer Support</p>
                    <Image
                      src="/images/icons/message.svg"
                      alt="Message"
                      width={96}
                      height={0}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 w-0 xsm:w-16 md:w-24 scale-[80%]"
                    />
                  </div>
                  <div className="flex flex-col bg-slate-950 rounded-xl p-4 relative">
                    <h4 className="text-3xl text-yellow-500">139,836,258</h4>
                    <p className="text-lg text-white">Bets Placed</p>
                    <Image
                      src="/images/icons/coin.svg"
                      alt="Coin"
                      width={96}
                      height={0}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 w-0 xsm:w-0 xsm:w-16 md:w-24 scale-[90%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-slate-900 px-4 w-full">
            <div className="container max-w-screen-xl flex flex-col md:flex-row gap-16 py-8">
              <div className="flex flex-1 flex-col justify-start">
                <Image
                  src="/images/logos/logo-extended.png"
                  width={160}
                  height={0}
                  alt="Logo Extended"
                  className="py-4"
                />
                <div className="flex flex-col gap-4">
                  <p className="text-white text-sm">
                    RoyalStake is operated by Moonrail Limited B.V., Korporaalweg 10, Curaçao (Company Registration No. 148182). A company licensed and regulated by the laws of Curaçao under license number 8048/JAZ.
                  </p>
                  <p className="text-white text-sm">
                    Payments may be handled on behalf of Moonrail Limited B.V. by JHOLT LTD, Voukourestiou, 25, NEPTUNE HOUSE, 1st floor, Flat/Office 11, 3045, Limassol, Cyprus (Company Registration No. HE393291) as per the agreement between the two companies.
                  </p>
                </div>
              </div>
              <div className="flex flex-[2] flex-col md:flex-row flex-wrap justify-between gap-8">
                  <div className="flex flex-col">
                    <h3 className="text-yellow-500 text-xl pb-2">Casino</h3>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Roulette</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Blackjack</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Match Betting</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Slots</a>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-yellow-500 text-xl pb-2">About Us</h3>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">About</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Affiliate</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Careers</a>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-yellow-500 text-xl pb-2">Payments</h3>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Deposit</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Withdraw</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Crypto Guide</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Supported Crypto</a>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-yellow-500 text-xl pb-2">Support</h3>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Help</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Fairness</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Terms of Service</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Privacy Policy</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Cookie Policy</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">AML Policy</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
