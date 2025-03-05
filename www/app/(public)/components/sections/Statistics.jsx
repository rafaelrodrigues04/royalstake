import Image from "next/image"

const StatisticsSection = () => {
    return (
        <>
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
        </>
    )
}

export default StatisticsSection;