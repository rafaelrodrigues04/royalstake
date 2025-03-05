import InfiniteLogoSlider from "../InfiniteLogoSlider";

const logos = [
    { src: "/images/logos/counter-strike-2-logo.svg", alt: "Counter-Strike 2" },
    { src: "/images/logos/league-of-legends-logo.svg", alt: "League of Legends" },
    { src: "/images/logos/dota-2-logo.svg", alt: "Dota 2" },
    { src: "/images/logos/valorant-logo.svg", alt: "Valorant" },
    { src: "/images/logos/fifa-logo.svg", alt: "FIFA" },
    { src: "/images/logos/nba-logo.svg", alt: "NBA" },
    { src: "/images/logos/mlb-logo.svg", alt: "MLB" },
    { src: "/images/logos/ufc-logo.svg", alt: "UFC" },
  ];

const LogoSliderSection = () => {
    return (
        <>
            {/* Logo Slider Wrapper */}
            <div className="flex justify-center bg-slate-900 w-full px-4">
                {/* Logo Slider Container */}
                <div className="container flex items-center max-w-screen-xl py-8">
                    {/* Logo Slider */}
                    <InfiniteLogoSlider
                        images={logos}
                    />
                </div>
            </div>
        </>
    )
}

export default LogoSliderSection;