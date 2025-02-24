import Image from "next/image"
import Dropdown from "../Dropdown";

const Navbar = () => {
    return (
        <>
            {/* Navbar Wrapper */}
            <div className="flex justify-center bg-slate-900 min-h-16 w-full">
                {/* Navbar Container */}
                <div className="container max-w-screen-xl flex flex-col lg:flex-row items-center sm:justify-between px-0 lg:px-4 divide-y divide-gray-300 lg:divide-y-0">
                    <div className="flex lg:flex-[4] flex-col lg:flex-row items-center w-full lg:gap-8 divide-y divide-gray-300 lg:divide-y-0">
                        {/* Logo Image */}
                        <Image
                        src="/images/logos/logo-extended.png"
                        width={160}
                        height={0}
                        alt="Logo Extended"
                        className="py-4"
                        />
                        <div className="flex justify-center py-2 lg:py-0 lg:justify-start gap-4 w-full">
                        <Dropdown
                            iconBeforeTitle="fa-gamepad"
                            title="Games"
                            items={[
                            { icon: 'fa-circle-xmark', label: 'Roulette', href: '/roulette' },
                            { icon: 'fa-chart-line', label: 'Crash', href: '/crash' },
                            { icon: 'fa-ring', label: 'Coinflip', href: '/coinflip' },
                            ]}
                            alignment="left"
                        />
                        <div className="flex justify-center items-center bg-transparent w-fit py-2 px-4 rounded-md text-gray-300 focus:outline-none hover:text-yellow-500 transition duration-300 ease-in-out">
                            <i className="mr-1 fas fa-diamond" />
                            <a href="/casino">Casino</a>
                        </div>
                        <div className="flex justify-center items-center bg-transparent w-fit py-2 px-4 rounded-md text-gray-300 focus:outline-none hover:text-yellow-500 transition duration-300 ease-in-out">
                            <i className="mr-1 fas fa-football" />
                            <a href="/match-betting">Match Betting</a>
                        </div>
                        </div>
                    </div>
                    {/* Login & Register Buttons */}
                    <div className="flex lg:flex-[1] justify-center lg:justify-end items-center gap-4 py-4 w-full">
                        <a href="#" className="flex justify-center items-center bg-transparent w-fit py-2 px-4 rounded-md text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Log In</a>
                        <a href="#" className="flex justify-center items-center bg-yellow-500 w-fit py-2 px-4 rounded-md text-white shadow-md hover:bg-amber-500 transition duration-300 ease-in-out">Register</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;