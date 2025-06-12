import {
  faEye,
  faMessage,
  faHeart as faRegularHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCrown,
  faEllipsisVertical,
  faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { BlogDetailProps } from "@typings/blog";
import { formatTimestamp } from "@utils";

import { useEffect, useState } from "react";
import { Link } from "react-router";

export const BlogCard: React.FC<BlogDetailProps> = (props) => {
  const { blogPost } = props;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(blogPost.likes);
  const [viewCount, setViewCount] = useState(blogPost.views);
  const [commentCount] = useState(blogPost.comments);

  useEffect(() => {
    setViewCount((prevCount: number) => prevCount + 1);
  }, []);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount((prevCount: number) =>
      liked ? prevCount - 1 : prevCount + 1,
    );
  };
  const { date, time } = formatTimestamp(blogPost.dateTimePosted);
  return (
    <div className="px-3 py-14">
      <div className="overflow-hidden border">
        <img
          alt={blogPost.title}
          className="w-full cursor-pointer"
          src={`https://lh3.googleusercontent.com/d/${blogPost.postImageId}`}
        />
        <div className="px-6 pt-4">
          <div className="flex items-center justify-between">
            <div className="my-2 flex items-center text-xs">
              <img
                alt="Blogger DP"
                className="h-14 w-14 rounded-full object-cover"
                src={blogPost.profileImageUrl}
              />
              <div className="px-4 text-sm">
                <p>
                  {blogPost.username} <FontAwesomeIcon icon={faCrown} />
                </p>
                <p>
                  {date} • {time}
                </p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                className="pr-6 text-[#254152]"
                icon={faEllipsisVertical}
              />
            </div>
          </div>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={`/blog/${blogPost.slug}`}
          >
            <div className="my-3 cursor-pointer pt-2 text-xl font-bold tracking-wider text-[#254152] hover:text-[#636362]">
              {blogPost.title}
            </div>
          </Link>
          <p className="pb-5 text-left text-sm text-gray-700">
            {/* <Truncate
              ellipsis={
                <span>
                  ...{" "}
                  <Link
                    className="text-[#D55342] hover:text-[#47B29D]"
                    to={`/blog/${blogPost.slug}`}
                  >
                    Read More
                  </Link>
                </span>
              }
              lines={1}
            >
            </Truncate> */}
            {blogPost.content}
          </p>
        </div>
        <div className="flex items-center px-6 pt-4 pb-2">
          <div className="flex flex-grow justify-between border-t-2 py-3">
            <div className="text-xs">
              <span className="mr-2 mb-2 inline-block px-3 py-1">
                {viewCount} <FontAwesomeIcon icon={faEye} />
              </span>
              <span className="mr-2 mb-2 inline-block px-3 py-1">
                {commentCount} <FontAwesomeIcon icon={faMessage} />
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm">{likeCount}</span>
              <FontAwesomeIcon
                className="cursor-pointer text-[#E84A43]"
                icon={liked ? faSolidHeart : faRegularHeart}
                onClick={toggleLike}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
