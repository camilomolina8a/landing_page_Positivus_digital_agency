import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    const flickityOptions = {
        // Configura las opciones de Flickity aquí
        draggable: true,
        freeScroll: true,
        wrapAround: true,
        initialIndex: 1,
    };

    return (
        <section className="mt-[120px] mb-[120px] max-w-[1200px] border px-5 lg:px-0">
            <div className="flex flex-col lg:flex-row items-center font-space mb-5 md:mb-[80px]">
                <h2 className="text-[28px] font-[600] md:font-normal md:text-[38px] bg-green px-4 rounded-md lg:mr-10">
                    Testimonials
                </h2>
                <p className="md:text-[18px] md:max-w-[550px] text-center lg:text-left px-5 lg:px-0 mt-4 lg:mt-0">
                    Hear from Our Satisfied Clients: Read Our Testimonials to
                    Learn More about Our Digital Marketing Services
                </p>
            </div>

            <div className="border py-[60px] bg-black text-white">
                <Flickity options={flickityOptions} className="carousel">

                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />

                </Flickity>
            </div>
        </section>
    );
}

export default Testimonials;
