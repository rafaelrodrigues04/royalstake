'use client'

import NavbarSection from "../components/sections/Navbar"
import Roulette from "./components/Roulette";
import BetAmount from "./components/BetAmount";
import BetButtons from "./components/BetButtons";
import BetList from "./components/BetList";
import FooterSection from "../components/sections/Footer"

export default function RoulettePage() {

  return (
    <>
      {/* Content Wrapper */}
      <div className="flex flex-col min-h-screen">
        <NavbarSection />
        <main className="flex-grow flex flex-col items-center justify-center w-full">
            <Roulette />
            <BetAmount />
            <BetButtons />
            <BetList />
        </main>
        <FooterSection />
      </div>
    </>
  );
}