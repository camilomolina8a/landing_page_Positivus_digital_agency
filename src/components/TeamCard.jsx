import PropTypes from "prop-types";
import linkedIn from '../assets/linkedIn.jpg'

function TeamCard({  name, job, bio }) {
    return (
        <div className="border pt-[40px] pb-[30px] px-[30px] rounded-[30px] box-shadow font-space">
            <div className="flex h-[110px] mb-5">
                <div className="w-[40%] h-full mr-4">
                    <img
                        src={"../../assets/team/SarahKim.png"}
                        alt="Image of the person"
                        className="h-full"
                    />
                </div>

                <div className="w-[60%] relative flex flex-col justify-end">
                    <p className="text-[18px] font-bold">{name}</p>
                    <p className="text-[16px]">{job}</p>
                    <a href="#" className="h-[32px] w-[32px] absolute top-0 right-0">
                        <img src={linkedIn} alt="LinkedIn Logo" />
                    </a>
                </div>
            </div>

            <div className="border-t pt-5">
                <p className="text-[16px] md:pr-3">{bio}</p>
            </div>
        </div>
    );
}

TeamCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
};

export default TeamCard;
