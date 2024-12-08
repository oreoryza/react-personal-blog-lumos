import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { subscribe } from "../redux/async/postsSlice";
import DOMPurify from "dompurify";

const NewsLetter = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const sanitizedEmail = DOMPurify.sanitize(e.target.value);
    setEmail(sanitizedEmail);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter your email address.");
      return;
    } else {
      dispatch(subscribe(email));
      alert("Thank you for subscribing!");
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-8 py-10 lg:px-28 md:px-8"
      cy-data="news"
    >
      <p className="text-violet">Newsletters</p>
      <h2 className="text-5xl font-bold dark:text-white text-center">
        Stories and interviews
      </h2>
      <p className="text-gray text-lg max-w-2xl text-center dark:text-white-gray">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <form
        onSubmit={handleSubscribe}
        className="flex md:flex-row flex-col justify-center items-center md:gap-2 gap-4"
      >
        <input
          className="p-3 border border-gray rounded-lg h-12 w-80"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your email"
          value={email}
          onChange={handleChange}
          cy-data="form-input"
        />
        <button
          type="submit"
          className="bg-violet text-white font-medium rounded-lg px-4 h-12"
          cy-data="form-button"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;