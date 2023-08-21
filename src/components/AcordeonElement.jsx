import PropTypes from "prop-types";
import closeCard from "../assets/closeCard.svg";
import openCard from "../assets/openCard.svg";

function AcordeonElement({
    index,
    number,
    title,
    text,
    activeId,
    setActiveId,
}) {
    const handleClick = (itemId) => {
        setActiveId(itemId);
    };

    return (
        <div
            className={`${
                activeId === index ? "active" : "close"
            } flex mb-[30px] border w-full md:px-[50px] rounded-[30px] box-shadow transition-all duration-300 ease-in-out overflow-hidden cursor-pointer`}

            onClick={() => handleClick(index)}
        >
            <div className="flex flex-col w-full font-space">

                <div className="relative">

                    <div className="flex items-center h-[100px] md:h-[125px] ">
                        <p className="text-[35px] font-bold md:text-[48px] ml-[20px] md:ml-0 mr-[20px] ">
                            {number}
                        </p>
                        <p className="text-[18px] md:text-[25px] max-w-[60%] md:max-w-full">{title}</p>
                    </div>

                    <div className="absolute right-[20px] md:right-0 top-[30%] h-[40px] w-[40px]">
                        <img
                            className="h-full w-full"
                            alt="Active or Close"
                            src={activeId === index ? closeCard : openCard}
                        />
                    </div>

                </div>

                <div className={`${activeId === index ? 'flex  md:h-[100px]' : 'hidden'} items-center border-t`}>
                    <p className="p-4 md:p-0">{text}</p>
                </div>
            </div>
        </div>
    );
}

AcordeonElement.propTypes = {
    index: PropTypes.number.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    activeId: PropTypes.number.isRequired,
    setActiveId: PropTypes.func.isRequired,
};

export default AcordeonElement;
