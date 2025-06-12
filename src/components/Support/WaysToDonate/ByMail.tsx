import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ByMail = () => {
  return (
    <div className="bg-[#45B29D] text-center text-sm text-white">
      <div>
        <FontAwesomeIcon
          className="pt-24 text-[#939393]"
          icon={faEnvelope}
          size="2x"
        />
      </div>
      <div className="py-3 text-2xl font-semibold">By Email</div>
      <div className="py-3 leading-normal">
        Reach out to us by email to arrange your donation
      </div>
      <div className="pb-32">
        <a href="info@mysite.com">bmes.gh@gmail.com</a>
      </div>
    </div>
  );
};
