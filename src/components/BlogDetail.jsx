import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailPost } from "../redux/async/postsSlice";
import NewsLetter from "./NewsLetter";
import PropTypes from "prop-types";
import parse from "html-react-parser";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.posts);
  const { year, month, day, id } = useParams();

  const key = `${year}/${month}/${day}/${id}`;

  useEffect(() => {
    dispatch(detailPost(key));
  }, [dispatch, key]);

  const content = parse(`${post.content}`);

  if (loading) {
    return (
      <div className="lg:mx-28 mx-8">
        <div class="border border-black dark:border-white shadow rounded-md p-4 w-full">
          <div class="animate-pulse flex">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-8 bg-gray rounded"></div>
              <div class="h-8 bg-gray rounded"></div>
              <div class="h-96 bg-gray rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-gray rounded col-span-1"></div>
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
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-7 px-8 min-h-screen" cy-data="blog-detail">
      <h3 className="font-semibold text-2xl text-gray-800 dark:text-white">
        {post.title}
      </h3>
      <div className="flex flex-col gap-4 mt-4 dark:text-white">
        <p className="font-semibold text-sm text-violet">{post.date}</p>
        <p className="text-gray dark:text-white">{post.desc}</p>
        <div className="flex flex-wrap gap-2">
          {post.categories &&
            post.categories.map((category, index) => (
              <div
                key={index}
                className="font-medium text-sm bg-light-orange text-orange w-fit py-1 px-2.5 rounded-full"
              >
                {category}
              </div>
            ))}
        </div>
        {content}
      </div>
      <NewsLetter />
    </div>
  );
};

export default BlogDetail;

BlogDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
  }),
};
