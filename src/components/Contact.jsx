import { useState } from "react";
import stars from '../assets/stars.png'

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        alert(
            "Thank you for contact me, I will get back to you as soon as possible."
        );
    };

    return (
        <section className="mb-[40px] w-full max-w-[1200px] px-5 lg:px-0">
            
            <div className="flex flex-col lg:flex-row items-center font-space mb-5 md:mb-[80px]">
                <h2 className="text-[28px] font-[600] md:font-normal md:text-[38px] bg-green px-4 rounded-md lg:mr-10">
                    Contact Us
                </h2>
                <p className="md:text-[18px] md:max-w-[550px] text-center lg:text-left px-5 lg:px-0 mt-4 lg:mt-0">
                    Connect with Us: Let&apos;s Discuss Your <br /> Digital
                    Marketing Needs
                </p>
            </div>

            <div className="flex py-[50px] bg-softgray rounded-[40px]">
                <div className="w-full md:w-[55%] h-full">
                    <div className="flex justify-center md:justify-end">
                        <form
                            autoComplete="off"
                            onSubmit={(e) => handleSubmit(e)}
                            className="flex flex-col  font-space w-[85%]"
                        >
                            <label htmlFor="name" className="md:text-[18px] mb-[4px]">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                placeholder="Your name:"
                                onChange={(e) => handleChange(e)}
                                required
                                className="border h-[55px] rounded-[10px] pl-5 md:text-[18px] mb-[25px]"
                            />
                            <label htmlFor="email" className="md:text-[18px] mb-[4px]">
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                placeholder="Your email:"
                                onChange={(e) => handleChange(e)}
                                required
                                className="border h-[55px] rounded-[10px] pl-5 md:text-[18px] mb-[25px]"
                            />
                            <label htmlFor="message" className="md:text-[18px] mb-[8px]">
                                Message*
                            </label>
                            <textarea
                                value={form.message}
                                name="message"
                                rows="6"
                                placeholder="How can I help you?:"
                                onChange={(e) => handleChange(e)}
                                className="rounded-[10px] p-5 md:text-[18px] border mb-10"
                            ></textarea>

                            <button className="flex justify-center items-center text-white h-[55px] bg-black w-full rounded-[10px] md:text-[18px] md:pt-[2px]">
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>

                <div className=" hidden md:flex justify-end w-[45%]">
                    <img src={stars} alt="Stars" className="mr-[-5px] w-[60%]" />
                </div>
            </div>
        </section>
    );
}

export default Contact;
