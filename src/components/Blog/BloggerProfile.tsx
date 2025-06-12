import { SharePostModal } from "@components/Blog";
import {
  faCrown,
  faEllipsisVertical,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { BlogDetailProps } from "@typings/blog";
import { formatTimestamp } from "@utils";
import { useEffect, useRef, useState } from "react";

export const BloggerProfile: React.FC<BlogDetailProps> = (props) => {
  const { blogPost } = props;
  const [sharePost, setSharePost] = useState(false);
  const [sharePostModal, setSharePostModal] = useState(false);
  const sharePostRef = useRef<HTMLButtonElement>(null);

  const toggleEllipsis = () => {
    setSharePost(!sharePost);
  };

  const openModal = () => {
    setSharePost(false);
    setSharePostModal(true);
  };

  const closeModal = () => {
    setSharePostModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: unknown }) => {
      if (
        sharePostRef.current &&
        !sharePostRef.current.contains(event.target as Node)
      ) {
        setSharePost(false);
      }
    };

    if (sharePost) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sharePost]);
  const { date, time } = formatTimestamp(blogPost.dateTimePosted);

  return (
    <div className="flex items-center justify-between text-lg">
      <div className="my-2 flex items-center text-xs">
        <img
          alt="Blogger DP"
          className="h-14 w-14 rounded-full object-cover"
          src={blogPost.profileImageUrl}
        />
        <div className="px-4 text-sm md:text-lg">
          <p className="px-3">
            {blogPost.username} <FontAwesomeIcon icon={faCrown} />
          </p>
          <p>
            • {date} • {time}
          </p>
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          className="cursor-pointer text-[#254152]"
          icon={faEllipsisVertical}
          onClick={toggleEllipsis}
        />
        {/* Share Post PopUp */}
        {sharePost && (
          <button
            className="absolute right-52 flex h-14 w-[12rem] cursor-pointer items-center gap-2 border bg-white px-4 align-middle shadow"
            onClick={openModal}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal();
              }
            }}
            ref={sharePostRef}
            type="button"
          >
            <FontAwesomeIcon icon={faShare} />
            Share Post
          </button>
        )}
        <SharePostModal
          closeSharePostModal={closeModal}
          sharePostModal={sharePostModal}
        />
      </div>
    </div>
  );
};
