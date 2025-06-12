/** biome-ignore-all lint/suspicious/noConsole: tbd */
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logger } from "loggers";
import { useEffect, useRef } from "react";

interface SharePostModalProps {
  sharePostModal: boolean;
  closeSharePostModal: () => void;
}

export const SharePostModal: React.FC<SharePostModalProps> = (props) => {
  const { sharePostModal, closeSharePostModal } = props;
  const sharePostModalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sharePostModalRef.current &&
        !(sharePostModalRef.current as HTMLDivElement).contains(
          event.target as Node,
        )
      ) {
        closeSharePostModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSharePostModal]);

  if (!sharePostModal) {
    return null;
  }

  const copyLink = () => {
    const linkToCopy = window.location.href;
    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        logger.info("Link copied to clipboard");
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        logger.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div
        className="flex flex-col items-center bg-white px-40 py-20 align-middle"
        ref={sharePostModalRef}
      >
        <span className="text-2xl font-bold tracking-widest text-[#254152] uppercase">
          Share Post
        </span>
        <span className="flex gap-10 pt-10">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon
              className="text-[#4464a3]"
              icon={faFacebook}
              size="2xl"
            />
          </a>

          <a href="https://www.x.com">
            <FontAwesomeIcon
              className="text-[#56acee]"
              icon={faXTwitter}
              size="2xl"
            />
          </a>

          <a href="https://www.linkedin.com">
            <FontAwesomeIcon
              className="text-[#0077b5]"
              icon={faLinkedin}
              size="2xl"
            />
          </a>
          <button onClick={copyLink} type="button">
            <FontAwesomeIcon icon={faLink} size="2xl" />
          </button>
        </span>
        <button
          className="absolute top-4 right-4"
          onClick={closeSharePostModal}
          type="button"
        >
          <FontAwesomeIcon
            className="text-[#696968]"
            icon={faTimes}
            size="lg"
          />
        </button>
      </div>
    </div>
  );
};
