import logoIcon from "../assets/Logo_Icon_white.png";
import linkedIn from "../assets/socials/linkedin.png";
import facebook from "../assets/socials/facebook.png";
import twitter from "../assets/socials/twitter.png";

function Footer() {
    return (
        <footer className="mt-[80px] w-full max-w-[1200px] px-5 py-[40px] md:px-[50px] md:py-[50px] bg-black font-space rounded-[0px] lg:rounded-t-[40px]">
            <div className=" flex flex-col lg:flex-row  justify-between">
                <a
                    href="#"
                    className="flex justify-center lg:justify-normal items-center mb-[40px] lg:mb-0"
                >
                    <img src={logoIcon} alt="logo icon" className="h-[30px] " />
                    <p className="text-[30px] text-white ml-[10px]">
                        Positivus
                    </p>
                </a>

                <div className=" text-white flex items-center justify-center lg:justify-normal mb-[40px] lg:mb-0">
                    <ul className="flex flex-col lg:flex-row hover:[&>li]:border-b [&>li]:flex lg:[&>li]:ml-[40px] [&>li>a]:px-[2px] [&>li>a]:leading-[1.4] items-center font-space text-[16px] ">
                        <li className="mb-4 lg:mb-0">
                            <a href="#">About us</a>
                        </li>
                        <li className="mb-4 lg:mb-0">
                            <a href="#">Services</a>
                        </li>
                        <li className="mb-4 lg:mb-0">
                            <a href="#">Use Cases</a>
                        </li>
                        <li className="mb-4 lg:mb-0">
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center justify-center lg:justify-normal">
                    <a href="#" className="mr-5">
                        <img src={linkedIn} alt="Linkedin Logo" />
                    </a>
                    <a href="#" className="mr-5">
                        <img src={facebook} alt="Facebook Logo" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="Twitter" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:py-[50px] lg:border-b border-white lg:mb-[50px] w-full">
                <div className=" flex justify-center lg:justify-normal flex-col w-full lg:w-[40%] mb-[40px] lg:mb-0">
                    <p className="bg-green w-[110px] flex justify-center rounded-[7px] font-bold mb-[25px] mx-auto lg:mx-0">
                        Contact Us:
                    </p>

                    <a
                        href="mailto:info@positivus.com"
                        className="text-white mb-[15px] lg:mb-[25px] flex justify-center lg:justify-start"
                    >
                        <span>Email: info@positivus.com</span>
                    </a>

                    <a
                        href="https://"
                        className="text-white mb-[15px] lg:mb-[25px] flex justify-center lg:justify-start"
                    >
                        <span>Phone: 555-567-8901</span>
                    </a>

                    <a
                        href=""
                        className="text-white flex justify-center lg:justify-start text-center lg:text-start mb-0"
                    >
                        <span>
                            Address: 1234 Main St <br /> Moonstone City,
                            Stardust State 12345
                        </span>
                    </a>
                </div>

                <div className=" lg:w-[60%] flex items-center justify-center">
                    <form className="flex flex-col lg:flex-row  p-[30px]  w-full lg:w-auto lg:py-[60px] lg:px-[50px] bg-[#292A32] rounded-[14px]">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="h-[50px] rounded-[10px] px-[20px]  bg-[#0000] mr-5 text-white w-full lg:w-auto mb-5 lg:mb-0 border border-white"
                        />

                        <button
                            type="submit"
                            className="h-[50px] rounded-[10px] bg-green px-8 flex justify-center items-center"
                        >
                            Subscribe to news
                        </button>
                    </form>
                </div>

                <div className="border-b border-white lg:hidden flex items-center justify-center lg:justify-normal my-10 pb-10">
                    <a href="#" className="mr-5">
                        <img src={linkedIn} alt="Linkedin Logo" />
                    </a>
                    <a href="#" className="mr-5">
                        <img src={facebook} alt="Facebook Logo" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="Twitter" />
                    </a>
                </div>
            </div>

            <div className="text-white flex flex-col lg:flex-row">
                <p className=" flex justify-center  lg:justify-normal mb-5 lg:m-0">
                    © 2023 Positivus. All Rights Reserved.
                </p>
                <a
                    href="#"
                    className="ml-0 lg:ml-10 flex justify-center  lg:justify-normal"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
}

export default Footer;
