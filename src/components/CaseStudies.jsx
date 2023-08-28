import Flickity from "react-flickity-component";

import arrow from "../assets/arrowDiagonal.svg";

const flickityOptions = {
    // cellAlign: "left",
    draggable: true,
    pageDots: false,
    freeScroll: true,
    contain: true,
    // wrapAround: true,
    // autoPlay: true
};

function CaseStudies() {
    return (
        <section className=" mt-[120px] mb-[50px] max-w-[1200px] ">
            <div className="flex flex-col lg:flex-row items-center font-space mb-[80px]">
                <h2 className="text-[28px] font-[600] md:font-normal md:text-[38px] bg-green px-4 rounded-md lg:mr-10">
                    Case Studies
                </h2>
                <p className="md:text-[18px] md:max-w-[550px] text-center lg:text-left px-5 lg:px-0 mt-4 lg:mt-0">
                    Explore Real-Life Examples of Our Proven Digital Marketing
                    Success through Our Case Studies
                </p>
            </div>

            {/* ------------------------------------- DESKTOP VERSION -------------------------------------- */}

            <div className="border border-white hidden md:flex font-space bg-black py-[70px] px-5 rounded-[45px] text-[16px] mx-5 lg:mx-0">
                <div className="flex flex-col justify-center border-r border-white px-[45px] md:px-[20px] lg:px-[40px]">
                    <p className="text-white">
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

                <div className="flex flex-col justify-center border-r border-white px-[55px] md:px-[20px] lg:px-[40px]">
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

                <div className="flex flex-col justify-center px-[45px] md:px-[20px] lg:px-[40px]">
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

            {/* ---------------------------END DESKTOP VERSION--------------------------- */}

            {/* ----------------------- MOBILE VERSION ----------------------- */}

            {/* Recuerda que los Slides (div), deben ir dentro de un array de un objeto { [div1, div2,...etc ] } */}

            <section className="flex md:hidden h-[300px] overflow-hidden">
                <Flickity
                    className="carousel w-full pl-[10px]"
                    elementType={"div"}
                    options={flickityOptions}
                    reloadOnUpdate
                >
                    {[
                        <div
                            className=" w-[90%] h-[260px] px-[10px] py-2"
                            key={0}
                        >
                            <div className="h-full bg-black px-[45px] py-[40px] rounded-[45px]">
                                <p className="text-white">
                                    For a local restaurant, we implemented a
                                    targeted PPC campaign that resulted in a 50%
                                    increase in website traffic and a 25%
                                    increase in sales.
                                </p>

                                <div className="flex ">
                                    <a href="#" className="flex mt-5">
                                        <span className="text-green mr-3">
                                            Learn more
                                        </span>
                                        <img
                                            src={arrow}
                                            alt="Una flecha diagonal"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>,

                        <div
                            className=" w-[90%] h-[260px] px-[10px] py-2"
                            key={1}
                        >
                            <div className="h-full bg-black px-[45px] py-[40px] rounded-[45px]">
                                <p className="text-white">
                                    For a B2B software company, we developed an
                                    SEO strategy that resulted in a first page
                                    ranking for key keywords and a 200% increase
                                    in organic traffic.
                                </p>

                                <div className="flex ">
                                    <a href="#" className="flex mt-5">
                                        <span className="text-green mr-3">
                                            Learn more
                                        </span>
                                        <img
                                            src={arrow}
                                            alt="Una flecha diagonal"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>,

                        <div
                            className=" w-[90%] h-[260px] px-[10px] py-2 left-5"
                            key={2}
                        >
                            <div className="h-full bg-black pl-[40px] pr-[40px] py-[40px] rounded-[45px]">
                                <p className="text-white">
                                    For a national retail chain, we created a
                                    social media marketing campaign that
                                    increased followers by 25% and generated a
                                    20% increase in online sales.
                                </p>

                                <div className="flex ">
                                    <a href="#" className="flex mt-5">
                                        <span className="text-green mr-3">
                                            Learn more
                                        </span>
                                        <img
                                            src={arrow}
                                            alt="Una flecha diagonal"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>,
                    ]}
                </Flickity>
            </section>

            {/* -----------------------------END MOBILE VERSION--------------------------------- */}
        </section>
    );
}

export default CaseStudies;
