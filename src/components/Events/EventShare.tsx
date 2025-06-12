import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { EventCardProps } from "@typings/events";

export const EventShare: React.FC<EventCardProps> = (props) => {
  const { event } = props;
  return (
    <div className="my-5 flex gap-4">
      <div className="w-full max-w-5xl text-left">
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          Share this event
        </h2>
        <div className="flex space-x-4">
          {/* Facebook Icon Link */}
          <a
            className="cursor-pointer text-xl text-gray-700"
            href={`https://www.facebook.com/sharer/sharer.php?u=https://johnjeffery649.wixsite.com/gsbeui/events/${event.slug}&quote=Check%20out%20this%20event.%20Hope%20to%20see%20you%20there!`}
            target="blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          {/* Twitter/X Icon Link */}
          <a
            className="cursor-pointer text-xl text-gray-700"
            href={`https://twitter.com/intent/tweet?url=https://johnjeffery649.wixsite.com/gsbeui/events/${event.slug}&text=Check%20out%20this%20event.%20Hope%20to%20see%20you%20there!`}
            target="blank"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            className="cursor-pointer text-xl text-gray-700"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fjohnjeffery649.wixsite.com%2Fgsbeui%2Fevents%2F${event.slug}`}
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </div>
  );
};
