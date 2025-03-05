import Image from "next/image";

const FooterSection = () => {
    return (
        <>
            <div className="flex justify-center bg-slate-900 w-full px-4">
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
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Roulette</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Blackjack</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Casino</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Match Betting</a>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-yellow-500 text-xl pb-2">About Us</h3>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">About</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Affiliate</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Careers</a>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-yellow-500 text-xl pb-2">Payments</h3>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Deposit</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Withdraw</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Crypto Guide</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Supported Crypto</a>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-yellow-500 text-xl pb-2">Support</h3>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Help</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Fairness</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Terms of Service</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Privacy Policy</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">Cookie Policy</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out">AML Policy</a>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default FooterSection;