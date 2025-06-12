import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialsBar = () => {
  return (
    <div className="fixed top-1/4 right-0 hidden h-48 w-20 space-y-5 bg-[#F4CE50] px-8 py-5 shadow-lg md:block">
      <button type="button">
        <a href="www.facebook.com">
          <FontAwesomeIcon
            className="text-black"
            icon={faFacebookF}
            size="lg"
          />
        </a>
      </button>

      <button type="button">
        <a href="www.x.com">
          <FontAwesomeIcon className="text-black" icon={faXTwitter} size="lg" />
        </a>
      </button>
      <button type="button">
        <a href="www.linkedin.com">
          <FontAwesomeIcon
            className="text-black"
            icon={faLinkedinIn}
            size="lg"
          />
        </a>
      </button>
      <button type="button">
        <a href="www.instagram.com">
          <FontAwesomeIcon
            className="text-black"
            icon={faInstagram}
            size="lg"
          />
        </a>
      </button>
    </div>
  );
};
