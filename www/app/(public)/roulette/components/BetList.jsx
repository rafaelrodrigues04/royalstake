import Image from "next/image"

const bets = [
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
]

const BetList = () => {
    return (
        <>
            <div className="container flex md:flex-row flex-col justify-center max-w-screen-xl md:gap-8 md:gap-4 gap-2 py-4 px-4">
                <div className="flex flex-col flex-[1]">
                    <div className="flex justify-between items-center w-full px-2">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/roulette/ct-circle.png"
                                width={24}
                                height={24}
                                quality={100}
                                alt="CT"
                                className="md:hidden flex"
                            />
                            <span className="text-sm text-gray-300 font-bold">18 Bets Total</span>
                        </div>
                        <span className="text-gray-300">&euro;375.24</span>
                    </div>
                    <div className="flex flex-col bg-slate-900 rounded-md mt-2 divide-y divide-slate-950 [mask-image:_linear-gradient(to_top,transparent_10%,_black_30%)]">
                        {bets.map((data, index) => (
                            <div className="flex justify-between items-center p-2" key={index}>
                                <div className="flex items-center">
                                    <Image
                                        src="/images/default-user-profile-picture.png"
                                        width={24}
                                        height={24}
                                        quality={100}
                                        alt="Profile Picture"
                                    />
                                    <span className="text-sm text-gray-300 ml-2">User</span>
                                </div>
                                <span className="text-sm text-gray-300">{data}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col flex-[1]">
                    <div className="flex justify-between items-center w-full px-2">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/roulette/crown-circle.png"
                                width={24}
                                height={24}
                                quality={100}
                                alt="Crown"
                                className="md:hidden flex"
                            />
                            <span className="text-sm text-gray-300 font-bold">18 Bets Total</span>
                        </div>
                        <span className="text-gray-300">&euro;375.24</span>
                    </div>
                    <div className="flex flex-col bg-slate-900 rounded-md mt-2 divide-y divide-slate-950 [mask-image:_linear-gradient(to_top,transparent_10%,_black_30%)]">
                        {bets.map((data, index) => (
                            <div className="flex justify-between items-center p-2" key={index}>
                                <div className="flex items-center">
                                    <Image
                                        src="/images/default-user-profile-picture.png"
                                        width={24}
                                        height={24}
                                        quality={100}
                                        alt="Profile Picture"
                                    />
                                    <span className="text-sm text-gray-300 ml-2">User</span>
                                </div>
                                <span className="text-sm text-gray-300">{data}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col flex-[1]">
                    <div className="flex justify-between items-center w-full px-2">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/roulette/t-circle.png"
                                width={24}
                                height={24}
                                quality={100}
                                alt="T"
                                className="md:hidden flex"
                            />
                            <span className="text-sm text-gray-300 font-bold">18 Bets Total</span>
                        </div>
                        <span className="text-gray-300">&euro;375.24</span>
                    </div>
                    <div className="flex flex-col bg-slate-900 rounded-md mt-2 divide-y divide-slate-950 [mask-image:_linear-gradient(to_top,transparent_10%,_black_30%)]">
                        {bets.map((data, index) => (
                            <div className="flex justify-between items-center p-2" key={index}>
                                <div className="flex items-center">
                                    <Image
                                        src="/images/default-user-profile-picture.png"
                                        width={24}
                                        height={24}
                                        quality={100}
                                        alt="Profile Picture"
                                    />
                                    <span className="text-sm text-gray-300 ml-2">User</span>
                                </div>
                                <span className="text-sm text-gray-300">{data}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BetList