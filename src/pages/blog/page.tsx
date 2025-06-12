import { useNewsList } from "@api/news";
import { BlogCard } from "@components/Blog";
import { DynamicSearchBar, Spinner } from "@components/shared";
import { Pagination } from "@components/shared/Pagination";
import { useState } from "react";
import { Link } from "react-router";

export function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data: posts, isLoading, isError } = useNewsList({});
  if (isLoading) {
    return <Spinner isLoading={true} />;
  }
  if (isError) {
    return <p>Failed to load posts</p>;
  }
  if (!posts) {
    return <p>Posts not found</p>;
  }
  setCurrentPage(posts.page);
  setTotalPages(posts.totalPages);

  return (
    <div>
      <div className="min-h-screen bg-[#EAEAE8]">
        <div className="md:p-12 lg:p-20">
          <div className="bg-white py-6 text-[#687982]">
            <div className="text-center align-middle leading-8">
              <h1 className="mt-14 text-4xl font-extrabold tracking-widest text-[#D55342] uppercase">
                News
              </h1>
            </div>
            <div>
              <div className="flex items-baseline justify-between px-10 text-left align-middle leading-8">
                <h1 className="mt-20 text-lg font-normal text-[#455D6B] capitalize">
                  <Link to="/blog">All Posts</Link>
                </h1>
                <DynamicSearchBar />
              </div>
            </div>
            <div className="flex flex-wrap justify-center p-4">
              {posts.rows.map((post) => (
                <div className="w-[30rem]" key={post.id}>
                  <BlogCard blogPost={post} key={post.id} />
                </div>
              ))}
            </div>
            <div>
              <Pagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalPages={totalPages}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
