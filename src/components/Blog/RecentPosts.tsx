import { BlogCard } from "@components/Blog";
import type { BlogPost } from "@typings/blog";
import { logger } from "loggers";
import { useState } from "react";
import { Link } from "react-router";

export const RecentPosts = (props: { currentPostSlug: string }) => {
  const { currentPostSlug } = props;
  const [posts, _setPosts] = useState<BlogPost[]>([]);
  logger.info(currentPostSlug);

  // useEffect(() => {
  // 	apiClient
  // 		.get('/news', {
  // 			params: {
  // 				page: 1,
  // 				pageSize: 4
  // 			}
  // 		})
  // 		.then((response) => {
  // 			const responseposts = response.data.data.rows
  // 			const recentPosts = posts.filter(
  // 				(post: {slug: string}) => post.slug !== currentPostSlug
  // 			)
  // 			console.log('recent posts', recentPosts)
  // 			setPosts(recentPosts)
  // 		})
  // 		.catch((error:unknown) => console.error(error))
  // }, [currentPostSlug])

  return (
    <div>
      {/* Div for recent posts title & see all link */}
      <div className="flex items-baseline justify-between px-10 text-left align-middle leading-8">
        <h1 className="mt-20 text-lg font-normal text-[#455D6B] capitalize">
          Other Posts
        </h1>
        <div className="relative">
          <h1 className="mt-20 text-lg font-normal text-[#455D6B] capitalize">
            <Link to="/blog">See All</Link>
          </h1>
        </div>
      </div>
      <div className="justify-left flex flex-wrap p-4">
        {/* Iterate over blogPosts array */}
        {posts.map((post) => (
          <div className="w-[30rem]" key={post.id}>
            <BlogCard blogPost={post} key={post.id} />
          </div>
        ))}
      </div>
      {/* <div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div> */}
    </div>
  );
};
