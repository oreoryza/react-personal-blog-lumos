import React from "react";

const Header = ({ text = "THE BLOG" }) => {
  return (
    <div className="lg:mx-28 py-7" cy-data="header">
      <h1 className="xl:text-[16vw] lg:text-[15vw] text-[19vw] text-black dark:text-white font-bold text-center border-y border-black/[.34] dark:border-white">
        {text}
      </h1>
    </div>
  );
};

export default Header;
