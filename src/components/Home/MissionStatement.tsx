import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export const MissionStatement = () => {
  return (
    <div className="bg-[#EAEAE8]">
      <div className="space-y-5 py-16 text-center text-[#254152]">
        <h1 className="text-4xl font-extrabold tracking-wider uppercase">
          Our Mission
        </h1>
        <p className="pb-8 text-sm text-[#425A68]">
          To encourage, support, represent and unify the Biomedical Engineering
          community in Ghana in order to promote health and <br /> quality of
          life through advancement of research, development and management of
          technology..
        </p>
        <Link
          className="items-center px-16 py-2 hover:border hover:border-[#EAEAE8] hover:bg-white hover:text-[#254152] hover:underline"
          to="/about"
        >
          Read More <FontAwesomeIcon className="text-sm" icon={faAngleRight} />
        </Link>
      </div>
    </div>
  );
};
