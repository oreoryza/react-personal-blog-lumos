import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailPost, fetchRecentPosts } from "../redux/async/postsSlice";

import { FiArrowUpRight } from "react-icons/fi";

const RecentBlogList = () => {
  const dispatch = useDispatch();
  const { recentPosts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchRecentPosts());
  }, [dispatch]);

  return (
    <div className="lg:mx-28 mx-8">
      <div className="flex flex-col gap-8 py-7">
        <h3 className="font-semibold dark:text-white text-xl">
          Recent blog posts
        </h3>
        {loading ? (
          //loading pulse
          <div className="grid grid-cols-2 xl:grid-rows-2 gap-6 lg:gap-8">
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
            <div class="border border-black dark:border-white shadow rounded-md p-4 w-full hidden xl:block mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="bg-gray w-48 h-40 rounded"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div className="grid grid-cols-subgrid gap-4 col-span-3">
                        <div class="h-2 bg-gray rounded col-start-1"></div>
                      </div>
                      <div class="h-8 bg-gray rounded col-span-3"></div>
                    </div>
                    <div class="h-2 bg-gray rounded"></div>
                    <div class="h-2 bg-gray rounded"></div>
                    <div className="grid grid-cols-4">
                      <div class="h-2 bg-gray rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="border border-black dark:border-white shadow rounded-md p-4 w-full hidden xl:block mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="bg-gray w-48 h-40 rounded"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div className="grid grid-cols-subgrid gap-4 col-span-3">
                        <div class="h-2 bg-gray rounded col-start-1"></div>
                      </div>
                      <div class="h-8 bg-gray rounded col-span-3"></div>
                    </div>
                    <div class="h-2 bg-gray rounded"></div>
                    <div class="h-2 bg-gray rounded"></div>
                    <div className="grid grid-cols-4">
                      <div class="h-2 bg-gray rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {recentPosts.length > 0 && (
              <div className="grid grid-cols-2 xl:grid-rows-2 gap-12 md:gap-8 lg:gap-8">
                <div className="flex flex-col justify-between xl:row-span-2 row-span-1 xl:col-span-1 col-span-2">
                  <Link to={`/detail/${recentPosts[0].key}`}>
                    <img
                      onClick={() => dispatch(detailPost(recentPosts[0].key))}
                      src={recentPosts[0].thumb}
                      alt={recentPosts[0].title}
                      className="w-full h-60 object-cover dark:text-white hover:brightness-50 transition duration-200"
                    />
                  </Link>
                  <div className="flex flex-col gap-3 mt-8">
                    <p className="font-semibold text-sm text-violet ">
                      {recentPosts[0].time}
                    </p>
                    <Link
                      to={`/detail/${recentPosts[0].key}`}
                      onClick={() => dispatch(detailPost(recentPosts[0].key))}
                    >
                      <div
                        className="flex justify-between group dark:text-white"
                        cy-data="recent-blog-title"
                      >
                        <h3 className="md:text-2xl text-lg font-semibold w-4/5 mb-2">
                          {recentPosts[0].title}
                        </h3>
                        <FiArrowUpRight className="text-3xl scale-105 group-hover:rotate-45 transition duration-200" />
                      </div>
                    </Link>
                    <p className="text-gray dark:text-white-gray line-clamp-2">
                      {recentPosts[0].desc}
                    </p>
                    <div className="font-medium text-sm bg-light-orange text-orange w-fit py-1 px-2.5 rounded-full">
                      {recentPosts[0].tag}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row xl:gap-4 gap-12 md:gap-8 lg:gap-8 xl:col-span-1 col-span-2">
                  <Link
                    to={`/detail/${recentPosts[1].key}`}
                    onClick={() => dispatch(detailPost(recentPosts[1].key))}
                  >
                    <img
                      src={recentPosts[1].thumb}
                      alt={recentPosts[1].title}
                      className="xl:w-72 w-full xl:h-full h-56 object-cover dark:text-white hover:brightness-50 transition duration-200"
                    />
                  </Link>
                  <div className="flex flex-col md:gap-1 gap-3 xl:max-w-72">
                    <p className="font-semibold text-sm text-violet mb-2">
                      {recentPosts[1].time}
                    </p>
                    <Link
                      to={`/detail/${recentPosts[1].key}`}
                      onClick={() => dispatch(detailPost(recentPosts[1].key))}
                    >
                      <div className="flex justify-between group dark:text-white">
                        <h3 className="text-lg md:w-full w-4/5 font-semibold">
                          {recentPosts[1].title}
                        </h3>
                        <FiArrowUpRight className="text-3xl scale-105 md:hidden group-hover:rotate-45 transition duration-200" />
                      </div>
                    </Link>
                    <p className="text-gray dark:text-white-gray xl:hidden xl:line-clamp-2 line-clamp-3">
                      {recentPosts[1].desc}
                    </p>
                    <div className="font-medium text-sm bg-light-orange text-orange w-fit py-1 px-2.5 rounded-full mt-2">
                      {recentPosts[1].tag}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row xl:gap-4 gap-12 md:gap-8 lg:gap-8 xl:col-span-1 col-span-2">
                  <Link
                    to={`/detail/${recentPosts[2].key}`}
                    onClick={() => dispatch(detailPost(recentPosts[2].key))}
                  >
                    <img
                      src={recentPosts[2].thumb}
                      alt={recentPosts[2].title}
                      className="xl:w-72 w-full xl:h-full h-56 object-cover dark:text-white hover:brightness-50 transition duration-200"
                    />
                  </Link>
                  <div className="flex flex-col md:gap-1 gap-3 xl:max-w-72">
                    <p className="font-semibold text-sm text-violet mb-2">
                      {recentPosts[2].time}
                    </p>
                    <Link
                      to={`/detail/${recentPosts[2].key}`}
                      onClick={() => dispatch(detailPost(recentPosts[2].key))}
                    >
                      <div className="flex justify-between group dark:text-white">
                        <h3 className="text-lg md:w-full w-4/5 font-semibold">
                          {recentPosts[2].title}
                        </h3>
                        <FiArrowUpRight className="text-3xl scale-105 md:hidden group-hover:rotate-45 transition duration-200" />
                      </div>
                    </Link>
                    <p className="text-gray dark:text-white-gray xl:hidden xl:line-clamp-2 line-clamp-3">
                      {recentPosts[2].desc}
                    </p>
                    <div className="font-medium text-sm bg-light-orange text-orange w-fit py-1 px-2.5 rounded-full mt-2">
                      {recentPosts[2].tag}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {loading ? (
        <div class="border border-black dark:border-white shadow rounded-md p-4 w-full hidden xl:block mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="bg-gray w-96 h-40 rounded"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div className="grid grid-cols-subgrid gap-4 col-span-3">
                    <div class="h-2 bg-gray rounded col-start-1"></div>
                  </div>
                  <div class="h-8 bg-gray rounded col-span-3"></div>
                </div>
                <div class="h-2 bg-gray rounded"></div>
                <div class="h-2 bg-gray rounded"></div>
                <div className="grid grid-cols-4">
                  <div class="h-2 bg-gray rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {recentPosts.length > 0 && (
            <div className="py-7 gap-6 lg:gap-8 flex flex-col md:grid lg:grid-cols-2">
              <Link
                to={`/detail/${recentPosts[3].key}`}
                onClick={() => dispatch(detailPost(recentPosts[3].key))}
              >
                <img
                  src={recentPosts[3].thumb}
                  alt={recentPosts[3].title}
                  className="w-full h-60 object-cover dark:text-white hover:brightness-50 transition duration-200"
                />
              </Link>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-sm text-violet mb-2">
                  {recentPosts[3].time}
                </p>
                <Link
                  to={`/detail/${recentPosts[3].key}`}
                  onClick={() => dispatch(detailPost(recentPosts[3].key))}
                >
                  <div className="flex justify-between group dark:text-white">
                    <h3 className="md:text-2xl text-lg w-4/5 font-semibold">
                      {recentPosts[3].title}
                    </h3>
                    <FiArrowUpRight className="text-3xl scale-105 group-hover:rotate-45 transition duration-200" />
                  </div>
                </Link>
                <p className="text-gray dark:text-white-gray line-clamp-4">
                  {recentPosts[3].desc}
                </p>
                <div className="font-medium text-sm bg-light-orange text-orange w-fit py-1 px-2.5 rounded-full mt-2">
                  {recentPosts[3].tag}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RecentBlogList;
