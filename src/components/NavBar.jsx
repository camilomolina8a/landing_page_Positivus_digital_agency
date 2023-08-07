import Logo from "../assets/Logo_Icon.png";

export default function NavBar() {
    return (
        <>
            <nav className="flex justify-between lg:w-[100vw] lg:max-w-[1200px] py-5 border">
                <div className=" flex justify-center items-center">
                    <img src={Logo} alt="Logo de la empresa" />
                    <p className=" ml-2 leading-10 font-bold font-space text-[35px] text-shadow ">
                        Positivus
                    </p>
                </div>
                <div className="flex ">
                    <ul className="flex items-center font-space text-[18px]  ">
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
                    <a className="flex items-center border border-[#191A23] font-space text-[18px]" href="#">
                        Request a quote
                    </a>
                </div>
            </nav>
        </>
    );
}
