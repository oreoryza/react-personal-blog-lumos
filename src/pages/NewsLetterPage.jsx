import React from "react";
import NewsLetter from "../components/NewsLetter";
import BlogList from "../components/BlogList";

const NewsLetterPage = () => {
  return (
    <>
      <NewsLetter />
      <BlogList button={"hidden"} page="3"/>
    </>
  );
};

export default NewsLetterPage;
