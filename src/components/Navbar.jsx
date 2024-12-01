import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="lg:mx-28 mx-8 py-7" cy-data="navbar">
      <nav className="flex justify-between items-center dark:text-white">
        <Link to="/">
          <h3 className="font-semibold text-xl" cy-data="logo">LumosBlog</h3>
        </Link>
        <ul className="hidden md:flex justify-center items-center gap-3.5">
          <Link to="/blog">
            <li cy-data="nav-blog" className="text-xl  hover:underline underline-offset-8 hover:font-semibold">
              Blog
            </li>
          </Link>
          <Link to="/about">
            <li cy-data="nav-about" className="text-xl  hover:underline underline-offset-8 hover:font-semibold">
              About
            </li>
          </Link>
          <Link to="/newsletter">
            <li cy-data="nav-news" className="text-xl  hover:underline underline-offset-8 hover:font-semibold">
              Newsletter
            </li>
          </Link>
          <li className="flex justify-center items-center bg-black dark:bg-white text-white dark:text-black gap-3 py-1 max-w-20 min-w-20 rounded-full">
            <button
              onClick={() => dispatch(toggleTheme())}
              disabled={theme === "dark"}
              cy-data="light-toggle"
            >
              <i
                className={`bi ${
                  theme === "dark" ? "bi-circle-fill" : "bi-brightness-low-fill"
                } text-2xl`}
              ></i>
            </button>
            <button
              onClick={() => dispatch(toggleTheme())}
              disabled={theme !== "dark"}
              cy-data="dark-toggle"
            >
              <i
                className={`bi ${
                  theme === "dark" ? "bi-moon" : "bi-circle-fill text-2xl"
                }`}
              ></i>
            </button>
          </li>
        </ul>
        <button onClick={handleModal} className="md:hidden flex">
          <i className="bi bi-list text-3xl"></i>
        </button>
      </nav>
      {isOpen && (
        <div className="fixed flex flex-col justify-center items-center bg-white dark:bg-black left-0 top-0 w-full h-full z-10">
          <ul className="flex flex-col justify-center items-center gap-8 dark:text-white">
            <Link to="/blog" onClick={handleModal}>
              <li className="text-xl  hover:underline underline-offset-8 hover:font-semibold">
                Blog
              </li>
            </Link>
            <Link to="/About" onClick={handleModal}>
              <li className="text-xl  hover:underline underline-offset-8 hover:font-semibold">
                About
              </li>
            </Link>
            <Link to="/newsletter" onClick={handleModal}>
              <li className="text-xl  hover:underline underline-offset-8 hover:font-semibold">
                Newsletter
              </li>
            </Link>
            <li className="flex justify-center items-center bg-black dark:bg-white text-white dark:text-black gap-4 px-4 py-2 rounded-full">
              <button
                onClick={() => dispatch(toggleTheme())}
                disabled={theme === "dark"}
              >
                <i
                  className={`bi ${
                    theme === "dark"
                      ? "bi-circle-fill"
                      : "bi-brightness-low-fill"
                  } text-2xl`}
                ></i>
              </button>
              <button
                onClick={() => dispatch(toggleTheme())}
                disabled={theme !== "dark"}
              >
                <i
                  className={`bi ${
                    theme === "dark" ? "bi-moon" : "bi-circle-fill text-2xl"
                  }`}
                ></i>
              </button>
            </li>
          </ul>
          <button onClick={handleModal} className="fixed bottom-10 font-bold text-xl text-black dark:text-white"><i className="bi bi-x-lg"></i></button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
