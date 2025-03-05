import Image from "next/image"

const BetButtons = () => {
    return (
        <>
            <div className="container flex justify-center max-w-screen-xl md:gap-8 md:gap-4 gap-2 pt-8 px-4">
                <button className="flex w-1/3 justify-between items-center bg-slate-900 text-gray-300 rounded-md border border-transparent shadow-[0px_-3px_inset_#1d293d,0px_-2px_inset_#1d293d] px-4 py-3 transition-all hover:shadow-[0px_-3px_inset_#1d293d,0px_-2px_inset_#1d293d] active:shadow-none active:translate-y-[2px]">
                    <div className="flex md:flex-row flex-col justify-between items-center w-full md:gap-0 gap-2">
                        <div className="flex md:flex-row flex-col items-center gap-4">
                            <Image
                                src="/images/roulette/ct-circle.png"
                                width={40}
                                height={40}
                                alt="CT"
                                quality={100}
                            />
                            <span className="text-gray-300 font-bold uppercase">Place Bet</span>
                        </div>
                        <span className="text-gray-300 font-bold uppercase">Win 2x</span>
                    </div>
                </button>
                <button className="flex w-1/3 justify-between items-center bg-slate-900 text-gray-300 rounded-md border border-transparent shadow-[0px_-3px_inset_#1d293d,0px_-2px_inset_#1d293d] px-4 py-3 transition-all hover:shadow-[0px_-3px_inset_#1d293d,0px_-2px_inset_#1d293d] active:shadow-none active:translate-y-[2px]">
                    <div className="flex md:flex-row flex-col justify-between items-center w-full md:gap-0 gap-2">
                        <div className="flex md:flex-row flex-col items-center gap-4">
                            <Image
                                src="/images/roulette/crown-circle.png"
                                width={40}
                                height={40}
                                alt="Crown"
                                quality={100}
                            />
                            <span className="text-gray-300 font-bold uppercase">Place Bet</span>
                        </div>
                        <span className="text-gray-300 font-bold uppercase">Win 14x</span>
                    </div>
                </button>
                <button className="flex w-1/3 justify-between items-center bg-slate-900 text-gray-300 rounded-md border border-transparent shadow-[0px_-3px_inset_#1d293d,0px_-2px_inset_#1d293d] px-4 py-3 transition-all hover:shadow-[0px_-3px_inset_#1d293d,0px_-2px_inset_#1d293d] active:shadow-none active:translate-y-[2px]">
                    <div className="flex md:flex-row flex-col justify-between items-center w-full md:gap-0 gap-2">
                        <div className="flex md:flex-row flex-col items-center gap-4">
                            <Image
                                src="/images/roulette/t-circle.png"
                                width={40}
                                height={40}
                                alt="T"
                                quality={100}
                            />
                            <span className="text-gray-300 font-bold uppercase">Place Bet</span>
                        </div>
                        <span className="text-gray-300 font-bold uppercase">Win 2x</span>
                    </div>
                </button>
            </div>
        </>
    )
}

export default BetButtons