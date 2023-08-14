import { services } from "../constants";

import ServiceCard from "./ServiceCard";

function Services() {
    return (
        <section className="mt-[120px] mb-[120px]">
            <div className="flex flex-col lg:flex-row items-center font-space mb-[80px]">
                <h2 className="md:text-[38px] bg-green px-4 rounded-md lg:mr-10">
                    Services
                </h2>
                <p className="md:text-[18px] md:max-w-[550px] text-center lg:text-left px-5 lg:px-0 mt-4 lg:mt-0">
                    At our digital marketing agency, we offer a range of
                    services to help businesses grow and succeed online. These
                    services include:
                </p>
            </div>

            <div className="grid md:flex md:flex-col md:items-center lg:grid lg:grid-cols-2 gap-10 px-5 lg:px-0 mt-[-45px] lg:mt-0">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        name={service.name}
                        arrow={service.arrow}
                        serviceImg={service.serviceImg}
                        bgTitle={service.bgTitle}
                        bgColor={service.bgColor}
                        textColor={service.textColor}
                    />
                ))}
            </div>
        </section>
    );
}

export default Services;
