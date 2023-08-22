import { team } from "../constants";
import TeamCard from "./TeamCard";

function Team() {
    return (
        <section className="mt-[120px] mb-[120px] max-w-[1200px] px-5 lg:px-0">
            <div className="flex flex-col lg:flex-row items-center font-space mb-5 md:mb-[80px]">
                <h2 className="text-[28px] font-[600] md:font-normal md:text-[38px] bg-green px-4 rounded-md lg:mr-10">
                    Team
                </h2>
                <p className="md:text-[18px] md:max-w-[550px] text-center lg:text-left px-5 lg:px-0 mt-4 lg:mt-0">
                    Meet the skilled and experienced team behind our successful
                    digital marketing strategies
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
                {team.map((person) => (
                    <TeamCard
                        key={person.id}
                        image={person.image}
                        name={person.name}
                        job={person.job}
                        bio={person.bio}
                    />
                ))}
            </div>

            <div className="mt-[40px] flex justify-end">
                <a
                    href="#"
                    className="flex justify-center font-space tracking-[1px] py-[18px] w-full md:w-[240px] bg-black text-white text-[18px] rounded-[16px]"
                >
                    See all team
                </a>
            </div>
        </section>
    );
}

export default Team;

//
