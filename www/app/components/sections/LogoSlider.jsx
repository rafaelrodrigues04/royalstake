import InfiniteLogoSlider from '../InfiniteLogoSlider';

const LogoSliderSection = () => {
    return (
        <>
            {/* Logo Slider Wrapper */}
            <div className="flex justify-center bg-slate-900 w-full">
                {/* Logo Slider Container */}
                <div className="container flex items-center max-w-screen-xl px-4 py-8">
                    {/* Logo Slider */}
                    <InfiniteLogoSlider />
                </div>
            </div>
        </>
    )
}

export default LogoSliderSection;