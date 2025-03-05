import Image from "next/image";

const PartnersSection = () => {
    return (
        <>
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
                                <Image
                                    src="/images/logos/esl.png"
                                    width={96}
                                    height={0}
                                    alt="ESL Logo"
                                />
                                <Image
                                    src="/images/logos/blast.png"
                                    width={96}
                                    height={0}
                                    alt="Blast Logo"
                                />
                            </div>
                        </div>

                        {/* Background Image */}
                        <div className="absolute bottom-0 lg:right-0 w-2/3 sm:w-3/5 md:w-1/2 lg:w-3/5">
                            <Image
                                src="/images/major-tournaments-sponsor.png"
                                width={578}
                                height={466}
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
                                    width={167}
                                    height={44}
                                    alt="Vitality Team Logo"
                                />
                            </div>
                        </div>

                        {/* Background Image */}
                        <div className="absolute bottom-0 right-0 w-full xsm:w-4/5 md:w-3/5">
                            <Image
                                src="/images/vitality-partner.png"
                                width={578}
                                height={466}
                                alt="Vitality Partner"
                                className="rounded-br-xl transform translate-x-0 translate-y-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnersSection;