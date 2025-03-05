import Image from "next/image"

const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="container max-w-screen-xl flex flex-col-reverse md:flex-row items-center md:justify-between px-4">
                {/* Hero Text and Button Wrapper */}
                <div className="flex flex-col justify-center md:items-start items-center gap-4">
                    {/* Single-line version for small screens */}
                    <h1 className="text-center text-white font-extrabold text-4xl leading-[3rem] md:hidden">
                        Bet smarter. Win bigger. Only at RoyalStake!
                    </h1>
                    {/* Multi-line version for md+ screens */}
                    <h1 className="hidden md:block text-white font-extrabold text-5xl leading-[4rem]">
                        Bet smarter.<br />
                        Win bigger.<br />
                        Only at RoyalStake!
                    </h1>
                    {/* CTA Button */}
                    <a href="#" className="flex justify-center items-center bg-yellow-500 h-10 md:w-fit w-1/2 px-4 rounded-md text-white shadow-md hover:bg-amber-500 transition duration-300 ease-in-out">Bet Now</a>
                </div>
                {/* Hero Images Wrapper */}
                <div className="flex gap-4">
                    {/* Hero Image 1 Gradient Effect */}
                    <div className="relative p-1 rounded-2xl before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-yellow-500 before:via-yellow-700/40 before:to-yellow-300 before:p-1 before:z-[-1]">
                        {/* Hero Image 1 */}
                        <Image
                        src="/images/hero/hero-image-1.jpg"
                        width={320}
                        height={0}
                        alt="Hero Image 1"
                        className="rounded-xl"
                        />
                    </div>
                    {/* Hero Image 2 Gradient Effect */}
                    <div className="relative p-1 rounded-2xl before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-yellow-500 before:via-yellow-700/40 before:to-yellow-300 before:p-1 before:z-[-1]">
                        {/* Hero Image 2 */}
                        <Image
                        src="/images/hero/hero-image-2.jpg"
                        width={320}
                        height={0}
                        alt="Hero Image 2"
                        className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;