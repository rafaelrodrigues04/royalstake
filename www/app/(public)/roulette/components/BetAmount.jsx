import Image from "next/image"

const amounts = [
    '+0.01',
    '+0.1',
    '+1',
    '+10',
    '+100',
    '1/2',
    'x2',
    'Max',
]

const BetAmount = () => {
    return (
        <>
            <div className="container flex justify-center max-w-screen-xl gap-8 px-4 pt-8">
                <div className="flex md:flex-row flex-col md:w-auto w-full bg-slate-900 rounded-md gap-2 p-2">
                    {/* Input and Clear button wrapper */}
                    <div className="flex xsm:flex-row flex-col w-full md:w-auto items-center gap-2">
                        <input 
                            type="text" 
                            placeholder="Enter Bet Amount" 
                            className="bg-slate-900 focus:outline-none py-2 xsm:w-auto w-full flex-1"
                        />
                        <button className="text-xs text-gray-300 font-bold uppercase md:bg-transparent bg-slate-800 md:rounded-none rounded-md md:py-0 py-2 md:px-0 xsm:px-2 xsm:w-auto w-full hover:text-yellow-500 transition duration-300 ease-in-out whitespace-nowrap">
                            CLEAR
                        </button>
                    </div>

                    {/* Amount buttons */}
                    <div className={`grid sm:grid-cols-8 xsm:grid-cols-4 grid-cols-2 gap-2 w-full`}>
                        {amounts.map((data, index) => (
                            <button
                                key={index}
                                className="text-xs text-gray-300 font-bold uppercase bg-slate-800 rounded-md hover:text-yellow-500 transition duration-300 ease-in-out p-2 text-center">
                                {data}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BetAmount