import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  detailPost,
} from "../redux/async/postsSlice";
import { FiArrowUpRight, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogList = ({page="10", button}) => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = page;

  const postsToShow = posts.slice(0, postsPerPage);

  useEffect(() => {
    dispatch(fetchPosts(currentPage));
  }, [dispatch, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="lg:mx-28 mx-8 gap-8 py-7" cy-data="blog-list">
      <h3 className="font-semibold dark:text-white text-xl">All blog posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-8 lg:gap-8 py-7">
        {loading ? (
          <>
          <div class="border border-black dark:border-white shadow rounded-md p-4 xl:row-span-2 row-span-1 xl:col-span-1 col-span-2 w-full">
              <div class="animate-pulse flex">
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-56 bg-gray rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-gray rounded col-span-1"></div>
                    </div>
                    <div class="h-8 bg-gray rounded"></div>
                    <div class="h-2 bg-gray rounded"></div>
                    <div class="h-2 bg-gray rounded"></div>
                    <div className="grid grid-cols-4">
                      <div class="h-2 bg-gray rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div class="border border-black dark:border-white shadow rounded-md p-4 xl:row-span-2 row-span-1 xl:col-span-1 col-span-2 w-full">
              <div class="animate-pulse flex">
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-56 bg-gray rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-gray rounded col-span-1"></div>
                    </div>
                    <div class="h-8 bg-gray rounded"></div>
                    <div class="h-2 bg-gray rounded"></div>
                    <div class="h-2 bg-gray rounded"></div>
                    <div className="grid grid-cols-4">
                      <div class="h-2 bg-gray rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div class="border border-black dark:border-white shadow rounded-md p-4 xl:row-span-2 row-span-1 xl:col-span-1 col-span-2 w-full">
              <div class="animate-pulse flex">
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-56 bg-gray rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-gray rounded col-span-1"></div>
                    </div>
                    <div class="h-8 bg-gray rounded"></div>
                    <div class="h-2 bg-gray rounded"></div>
                    <div class="h-2 bg-gray rounded"></div>
                    <div className="grid grid-cols-4">
                      <div class="h-2 bg-gray rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
        <>
        {postsToShow.map((post) => (
          <div key={post.key}>
            <Link to={`detail/${post.key}`}>
              <img
                onClick={() => dispatch(detailPost(post.key))}
                src={post.thumb}
                alt={post.title}
                className="w-full h-60 object-cover hover:brightness-50 transition duration-200"
                cy-data="blog-list-img"
              />
            </Link>
            <div className="flex flex-col gap-3 mt-8">
              <p className="font-semibold text-sm text-violet">{post.time}</p>
              <Link to={`/detail/${post.key}`}>
                <div
                  onClick={() => dispatch(detailPost(post.key))}
                  className="flex justify-between group dark:text-white"
                >
                  <h3 className="md:text-2xl text-lg font-semibold w-4/5 mb-2">
                    {post.title}
                  </h3>
                  <FiArrowUpRight className="text-3xl scale-105 group-hover:rotate-45 transition duration-200" />
                </div>
              </Link>
              <p className="text-gray dark:text-white-gray line-clamp-2">
                {post.desc}
              </p>
            </div>
            <div className="font-medium text-sm bg-light-orange text-orange w-fit py-1 px-2.5 rounded-full mt-6">
              {post.tag}
            </div>
          </div>
        ))}
        </>
        )}
      </div>
      <div className={`flex ${button} justify-between items-center border-t border-light-gray pt-5`}>
        <button
          className={`flex items-center gap-2 text-gray dark:text-white ${
            currentPage !== 1 && "hover:underline underline-offset-1"
          } transition duration-200 font-medium text-sm py-2`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <FiArrowLeft className="text-2xl" /> Previous
        </button>
        <button
          className={`flex items-center gap-2 text-gray dark:text-white ${
            posts.length >= postsPerPage && "hover:underline underline-offset-1"
          } transition duration-200 font-medium text-sm py-2`}
          onClick={handleNextPage}
          disabled={posts.length < postsPerPage}
        >
          Next <FiArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default BlogList;

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
}