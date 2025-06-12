// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const ScrollIconToggle = () => {
  const [icon, setIcon] = useState(faChevronDown);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIcon(faMinus);
    } else {
      setIcon(faChevronDown);
    }
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="">
      <FontAwesomeIcon
        className="animate-bounce text-center text-3xl text-white"
        icon={icon}
        size="2x"
      />
    </div>
  );
};
