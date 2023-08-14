import PropTypes from "prop-types";

function ServiceCard({ name, arrow, serviceImg, bgColor, bgTitle, textColor }) {


    return (
        <div className={`flex justify-between md:w-[600px] lg:max-w-full lg:h-[260px] h-[220px] p-[50px] rounded-[45px] font-space bg-${bgColor} box-shadow border`} >
            <div className="flex flex-col justify-between ">

                <div className="text-[18px] lg:text-[24px] font-bold">
                    <h3 className={`inline-block rounded-[8px] px-2 bg-${bgTitle}`}>{name[0]}</h3><br/>
                    <h3 className={`inline-block rounded-[8px] px-2 bg-${bgTitle}`}>{name[1]}</h3>
                </div>

                <div className="flex items-center">
                    <a href="#">
                        <img src={arrow} alt="Imagen de una flecha" className="w-[35px] mr-4"/>
                    </a>
                    <a href="#" className={ `hidden lg:flex text-[20px] text-${textColor}` }>Learn more</a>
                </div>
            </div>

            <div className="flex items-end md:items-center w-[40%] md:w-[30%] lg:w-[40%] lg:h-auto">
                <img src={serviceImg} alt="Imagen del Servicio ofrecido" className="" />
            </div>
        </div>
    );
}

ServiceCard.propTypes = {
    name: PropTypes.node.isRequired,
    arrow: PropTypes.string.isRequired,
    serviceImg: PropTypes.string.isRequired,
    bgTitle: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
};

export default ServiceCard;
