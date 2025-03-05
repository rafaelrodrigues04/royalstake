import EmblaCarousel from "../EmblaCarousel";

const images = [
    '/images/carousel/cs2-pgl-cluj-napoca.jpg',
    '/images/carousel/league-of-legends-tournaments.jpg',
    '/images/carousel/dota-2-dreamleague.jpg',
    '/images/carousel/valorant-masters-bangkok.jpg',
    '/images/carousel/uefa-champions-league.jpg',
    '/images/carousel/ufc-fight-night.jpg',
];

const NewsCarouselSection = () => {
    return (
        <>
            {/* News Carousel Wrapper */}
            <div className="flex justify-center w-full px-4">
                {/* News Carousel Container */}
                <div className="container flex items-center max-w-screen-xl">
                    {/* News Carousel */}
                    <EmblaCarousel
                        images={images}
                    />
                </div>
            </div>
        </>
    )
}

export default NewsCarouselSection;