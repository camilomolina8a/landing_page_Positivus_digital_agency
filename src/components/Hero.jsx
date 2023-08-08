import img_hero from "../assets/trumpet.png";

function Hero() {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-[25px] lg:max-w-[1200px] lg:h-[480px] px-5 lg:px-0 ">
            <div className="flex-col justify-between flex lg:max-w-[45%] lg:h-[440px]">
                <h1 className="text-[48px] md:text-[64px] leading-[1.2] text-shadow font-space font-normal lg:font-bold">
                    Navigating the digital landscape for success
                </h1>
                <div className="flex lg:hidden mt-6">
                    <img
                        className="h-full"
                        src={img_hero}
                        alt="Imagen de un megáfono"
                    />
                </div>
                <p className="font-space text-[16px] md:text-xl mt-6 leading-[1.5]">
                    Our digital marketing agency helps businesses grow and
                    succeed online through a range of services including SEO,
                    PPC, social media marketing, and content creation.
                </p>
                <a
                    className="py-4 px-8 mt-6  lg:max-w-[260px] text-center inline-block text-[16px] lg:text-xl font-space text-white bg-black rounded-[14px]"
                    href="#"
                >
                    Book a consultation
                </a>
            </div>

            <div className=" hidden lg:flex">
                <img
                    className="h-full"
                    src={img_hero}
                    alt="Imagen de un megáfono"
                />
            </div>
        </div>
    );
}

export default Hero;
