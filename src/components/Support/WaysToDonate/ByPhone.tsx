import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ByPhone = () => {
  return (
    <div className="bg-[#636362] text-center text-sm text-white">
      <div>
        <FontAwesomeIcon
          className="pt-24 text-[#939393]"
          icon={faPhone}
          size="2x"
        />
      </div>
      <div className="py-3 text-2xl font-semibold">Over the Phone</div>
      <div className="py-3 leading-normal">
        Call us, and our team will guide you through the donation process and
        answer any questions
      </div>
      <div className="pb-32">0302342877</div>
    </div>
  );
};
