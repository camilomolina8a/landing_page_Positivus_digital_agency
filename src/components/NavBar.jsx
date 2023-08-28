import { useState } from "react";
import Logo from "../assets/Logo_Icon.png";
import menu from "../assets/burger_menu.png";
import close from "../assets/close.png";

export default function NavBar() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <nav className="flex justify-between w-[100vw] lg:max-w-[1200px] py-4">
                <div className="hidden md:flex w-[100vw] px-5 md:px-0 md:w-auto justify-between  md:justify-center items-center">
                    <a className="lg:flex hidden" href="#">
                        <img src={Logo} alt="Logo de la empresa" />
                        <p className=" ml-2 leading-10 font-bold font-space text-[35px] text-shadow prevent-select">
                            Positivus
                        </p>
                    </a>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex hover:[&>li]:bg-green [&>li]:flex [&>li]:ml-[10px] [&>li]:rounded-xl [&>li>a]:px-[20px] [&>li>a]:py-[12px]  items-center font-space text-[20px] ">
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Use Cases</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                    <a
                        className="flex items-center border border-[#191A23] px-[20px] py-[10px] ml-[20px] rounded-xl font-space text-[20px] hover:bg-green hover:border-green"
                        href="#"
                    >
                        Request a quote
                    </a>
                </div>

                {/*-------------- MOBILE ---------------- */}

                <div className="flex lg:hidden w-[100vw] mx-5">
                    <div className="flex justify-between items-center w-full ">
                        <div className="flex items-center">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-[30px] mr-2"
                            />
                            <p className="text-[32px] font-space font-bold">
                                Positivus
                            </p>
                        </div>
                        {toggle ? (
                            <img
                                src={menu}
                                alt="menu"
                                className="h-[25px]"
                                onClick={() => setToggle((prev) => !prev)}
                            />
                        ) : (
                            <img
                                src={close}
                                alt="close"
                                className="h-[25px] z-[999]"
                                onClick={() => setToggle((prev) => !prev)}
                            />
                        )}
                    </div>

                    <div
                        className={`fixed left-0 right-0 w-[100vw] h-full mt-[60px] bg-green z-[99] ${
                            toggle
                                ? "-translate-x-full menu-transition "
                                : "  translate-x-0 menu-transition"
                        }`}
                    >
                        <ul className="flex flex-col items-center justify-evenly h-[85%] [&>li>a]:text-[2.5rem] [&>li>a]:font-bold [&>li]:w-[100vw] [&>li]:flex [&>li]:justify-center [&>li>a]:px-10 [&>li>a]:py-5 font-space">
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Use Cases</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
