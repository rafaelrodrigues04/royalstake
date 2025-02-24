import EmblaCarousel from "../EmblaCarousel";

const carouselImages = [
    '/images/carousel/cs2-pgl-cluj-napoca.jpg',
    '/images/carousel/league-of-legends-tournaments.jpg',
    '/images/carousel/dota-2-dreamleague.jpg',
    '/images/carousel/valorant-masters-bangkok.jpg',
    '/images/carousel/uefa-champions-league.jpg',
    '/images/carousel/ufc-fight-night.jpg',
];

const NewsSliderSection = () => {
    return (
        <>
            {/* News Slider Wrapper */}
            <div className="flex justify-center w-full">
                {/* News Slider Container */}
                <div className="container flex items-center max-w-screen-xl">
                    {/* News Slider */}
                    <EmblaCarousel
                        images={carouselImages}
                    />
                </div>
            </div>
        </>
    )
}

export default NewsSliderSection;