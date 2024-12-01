import React from "react";

const Footer = () => {
  return (
    <div className="py-7 lg:px-28 px-8 dark:text-white" cy-data="footer">
      <footer className="flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-3">
        <p>
          <i className="bi bi-c-circle"></i> 2024
        </p>
        <ul className="flex flex-col md:flex-row items-center gap-3">
          <li className="hover:underline underline-offset-1">
            <a href="">Twitter</a>
          </li>
          <li className="hover:underline underline-offset-1">
            <a href="">LinkedIn</a>
          </li>
          <li className="hover:underline underline-offset-1">
            <a href="">Email</a>
          </li>
          <li className="hover:underline underline-offset-1">
            <a href="">RSS feed</a>
          </li>
          <li className="hover:underline underline-offset-1">
            <a href="">Add to Feedly</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
