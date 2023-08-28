import company from "../assets/companiesImg/Company-logo.png";
import company1 from "../assets/companiesImg/Company-logo-1.png";
import company2 from "../assets/companiesImg/Company-logo-2.png";
import company3 from "../assets/companiesImg/Company-logo-3.png";
import company4 from "../assets/companiesImg/Company-logo-4.png";
import company5 from "../assets/companiesImg/Company-logo-5.png";

function Companies() {
    return (
        <div className="flex justify-between flex-wrap gap-5 md:gap-0 lg:[&>img]:w-[130px] [&>img]:w-[100px]  md:[&>img]:h-[50px] [&>img]:h-[40px] px-5 lg:px-0 lg:my-[60px] my-[70px] w-full lg:max-w-[1200px] ">
            <img
                className="filter grayscale hover:filter-none transition-all duration-300"
                src={company}
                alt="company logo"
            />
            <img
                className="filter grayscale hover:filter-none transition-all duration-300"
                src={company1}
                alt="company logo"
            />
            <img
                className="filter grayscale hover:filter-none transition-all duration-300"
                src={company2}
                alt="company logo"
            />
            <img
                className="filter grayscale hover:filter-none transition-all duration-300"
                src={company3}
                alt="company logo"
            />
            <img
                className="filter grayscale hover:filter-none transition-all duration-300"
                src={company4}
                alt="company logo"
            />
            <img
                className="filter grayscale hover:filter-none transition-all duration-300"
                src={company5}
                alt="company logo"
            />
        </div>
    );
}

export default Companies;
