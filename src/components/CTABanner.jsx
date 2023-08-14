import ctaImg from "../assets/Illustration.png";

function CTABanner() {
    return (
        <div className="flex flex-col md:flex-row bg-softgray lg:h-[340px] mx-5 md:mx-0 lg:max-w-[1200px] rounded-[45px] ">

            <div className="font-space flex flex-col justify-center md:w-[50%] px-[50px] lg:py-0 py-10 ">

                <h4 className=" text-[32px] lg:text-[40px] mb-5 md:font-normal font-bold">Let’s make things happen</h4>
                <p className=" text-[16px] lg:text-[18px] mb-6 max-w-[450px]">
                    Contact us today to learn more about how our digital
                    marketing services can help your business grow and succeed
                    online.
                </p>
                <a href="#" className="flex justify-center py-[18px] max-w-[250px] bg-black text-white text-[18px] rounded-[16px]">Get your free proposal</a>

            </div>

            <div className="hidden md:flex justify-center items-center md:w-[50%]">
                <img src={ctaImg} alt="Call to action image" />
            </div>

        </div>
    );
}

export default CTABanner;
