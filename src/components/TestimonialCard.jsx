import PropTypes from 'prop-types'

function TestimonialCard({ name, job, text }) {
    return (
        <div className="h-auto font-space carousel-cell md:w-[50%] mx-[20px]">
            <div className=" relative">
                <div className="relative rounded-[40px] border border-green  block z-10">
                    <p className="p-7 md:p-10 w-full h-full">
                        {text}
                    </p>
                </div>
                <div className="relative border-b border-r mt-[-20px] w-[40px] h-[40px] ml-[65px] mb-[30px] rotate-[45deg] border-green bg-black z-20"></div>
                
            </div>

            <div className=" pl-[80px] mb-[40px] md:mb-[80px]">
                <p className="text-green">{name}</p>
                <p className="">{job}</p>
            </div>
        </div>
    );
}

TestimonialCard.propTypes = {
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    text: PropTypes.number.isRequired,
}

export default TestimonialCard;
