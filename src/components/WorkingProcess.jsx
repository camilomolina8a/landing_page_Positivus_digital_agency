import { useState } from "react";
import { process } from "../constants";
import AcordeonElement from "./AcordeonElement";

function WorkingProcess() {
    const [activeId, setActiveId] = useState(0);

    return (
        <div className="mt-[120px] mb-[120px] max-w-[1200px] px-5 lg:px-0">
            <div className="flex flex-col lg:flex-row items-center font-space mb-[80px]">
                <h2 className="text-[28px] font-[600] md:font-normal md:text-[38px] bg-green px-4 rounded-md lg:mr-10">
                    Our Working Process
                </h2>
                <p className="md:text-[18px] md:max-w-[550px] text-center lg:text-left px-5 lg:px-0 mt-4 lg:mt-0">
                    Step-by-Step Guide to Achieving <br/> Your Business Goals
                </p>
            </div>

            <div>
                {process.map((item) => (
                    <AcordeonElement
                        key={item.id}
                        index={item.id}
                        number={item.number}
                        title={item.title}
                        text={item.text}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />
                ))}
            </div>
        </div>
    );
}

export default WorkingProcess;
