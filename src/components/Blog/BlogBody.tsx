import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faMessage,
  faHeart as faRegularHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLink,
  faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { BlogBodyProps } from "@typings/blog";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export const BlogBody: React.FC<BlogBodyProps> = (props) => {
  const { blogPost } = props;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(blogPost.likes);
  const [showComments, setShowComments] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="mb-3 text-left text-2xl leading-relaxed font-extrabold tracking-widest text-[#254152] uppercase lg:text-3xl">
        {blogPost.title}
      </div>
      <div>
        <img
          alt={blogPost.title}
          className="mx-auto w-full cursor-pointer lg:h-[40rem] lg:w-3/4"
          src={`https://lh3.googleusercontent.com/d/${blogPost.postImageId}?authuser=0`}
        />
      </div>
      <div>
        <div className="py-5 text-justify text-xl leading-loose text-gray-700">
          <ReactMarkdown>{blogPost.content}</ReactMarkdown>
        </div>
      </div>
      <div className="flex items-center gap-3 space-x-10 border-t-2 border-b-2 px-3 py-6 text-[#254152] xl:text-xl">
        <a
          href={`https://web.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjohnjeffery649.wixsite.com%2Fgsbeui%2Fpost%2F${blogPost.slug}&_rdc=1&_rdr`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a
          href={`https://x.com/intent/post?url=https%3A%2F%2Fjohnjeffery649.wixsite.com%2Fgsbeui%2Fpost%2F${blogPost.slug}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle/?mini=true&url=https://johnjeffery649.wixsite.com/gsbeui/post/${blogPost.slug}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
        <button onClick={() => props.setShowSharePopup(true)} type="button">
          <FontAwesomeIcon icon={faLink} size="lg" />
        </button>
        <div>
          <span className="mr-2 mb-2 inline-block py-1">
            {blogPost.views} <FontAwesomeIcon icon={faEye} />
          </span>
          <button
            aria-label="Show comments"
            className="mr-2 mb-2 inline-block px-3 py-1 hover:text-[#E84A43] focus:outline-none"
            onClick={toggleComments}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleComments();
              }
            }}
            style={{ cursor: "pointer", background: "none", border: "none" }}
            type="button"
          >
            {blogPost.comments} <FontAwesomeIcon icon={faMessage} />
          </button>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{likeCount}</span>
          <FontAwesomeIcon
            className="cursor-pointer text-[#E84A43]"
            icon={liked ? faSolidHeart : faRegularHeart}
            onClick={toggleLike}
          />
        </div>
      </div>
      {showComments && (
        <div className="mt-4">
          <h2 className="text-lg font-extrabold tracking-widest text-[#254152] uppercase xl:text-2xl">
            Comments:
          </h2>
          <textarea
            className="mt-4 w-full rounded border border-gray-300 p-2 xl:text-xl"
            placeholder="Write a comment..."
          />
          <button
            className="mt-2 rounded bg-[#254152] px-4 py-2 text-white xl:text-xl"
            type="button"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
