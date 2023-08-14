import arrow from "../assets/arrowDiagonal.svg";

function CaseStudies() {
    return (
        <section className=" mt-[120px] mb-[120px] max-w-[1200px]">
            <div className="flex flex-col lg:flex-row items-center font-space mb-[80px]">
                <h2 className="md:text-[38px] bg-green px-4 rounded-md lg:mr-10">
                    Case Studies
                </h2>
                <p className="md:text-[18px] md:max-w-[550px] text-center lg:text-left px-5 lg:px-0 mt-4 lg:mt-0">
                    Explore Real-Life Examples of Our Proven Digital Marketing
                    Success through Our Case Studies
                </p>
            </div>

            {/* ------------------ Desktop version ------------------ */}

            <div className="border border-white hidden md:flex font-space bg-black py-[70px] px-5 rounded-[45px] text-[16px] mx-5">
                <div className="flex flex-col justify-center border-r border-white px-[45px] md:px-[25px]">
                    <p className="text-white ">
                        For a local restaurant, we implemented a targeted PPC
                        campaign that resulted in a 50% increase in website
                        traffic and a 25% increase in sales.
                    </p>

                    <div className="flex ">
                        <a href="#" className="flex mt-5">
                            <span className="text-green mr-3">Learn more</span>
                            <img src={arrow} alt="Una flecha diagonal" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-center border-r border-white px-[45px] md:px-[25px]">
                    <p className="text-white">
                        For a B2B software company, we developed an SEO strategy
                        that resulted in a first page ranking for key keywords
                        and a 200% increase in organic traffic.
                    </p>

                    <div className="flex">
                        <a href="#" className="flex mt-5">
                            <span className="text-green mr-3">Learn more</span>
                            <img src={arrow} alt="Una flecha diagonal" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-center px-[45px] md:px-[25px]">
                    <p className="text-white ">
                        For a national retail chain, we created a social media
                        marketing campaign that increased followers by 25% and
                        generated a 20% increase in online sales.
                    </p>

                    <div className="flex">
                        <a href="#" className="flex mt-5">
                            <span className="text-green mr-3">Learn more</span>
                            <img src={arrow} alt="Una flecha diagonal" />
                        </a>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------ */}
        </section>
    );
}

export default CaseStudies;
