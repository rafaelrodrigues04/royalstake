const PaymentGatewaysSection = () => {
    
   const paymentImages = [
        '/images/logos/mastercard.svg',
        '/images/logos/visa.svg',
        '/images/logos/amex.svg',
        '/images/logos/paypal.svg',
        '/images/logos/skrill.svg',
        '/images/logos/paysafecard.svg',
        '/images/logos/klarna.svg',
        '/images/logos/webmoney.svg',
        '/images/logos/blik.svg',
        '/images/logos/boleto.svg',
        '/images/logos/qiwi.svg',
        '/images/logos/trustly.svg',
        '/images/logos/bitcoin.svg',
        '/images/logos/ethereum.svg',
        '/images/logos/dogecoin.svg',
    ];
    
    return (
        <>
            {/* Payment Gateways Wrapper */}
            <div className="flex justify-center w-full px-4">
                {/* Payment Gateways Container */}
                <div className="container max-w-screen-xl flex flex-col bg-slate-900 p-6 rounded-xl md:flex-row items-center md:items-start md:justify-between gap-16">
                    {/* Left side - Image grid */}
                    <div className="grid grid-cols-5 gap-4 flex-shrink-0">
                        {paymentImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={src}
                            className="h-16 w-16 object-contain transition-transform duration-300 hover:translate-y-[-5px]"
                        />
                        ))}
                    </div>

                    {/* Right side - Text content */}
                    <div className="flex flex-col w-full gap-4">
                        <h2 className="text-yellow-500 font-bold text-4xl xsm:text-5xl">Multiple Payment Methods</h2>
                        <p className="text-white text-base">
                        Enjoy seamless transactions with a variety of payment options. From credit cards to cryptocurrencies, we support all major payment methods worldwide, ensuring a secure and convenient experience.
                        </p>
                        {/* CTA Button */}
                        <a href="#" className="flex justify-center items-center bg-yellow-500 h-10 md:w-fit w-full px-4 rounded-md text-white shadow-md hover:bg-amber-500 transition duration-300 ease-in-out">Deposit Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentGatewaysSection;