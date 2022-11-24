import React, { useState } from "react";
import "./Testimonials.css";

function ModalFormT({ visible, onClose }) {
  const [values, setValues] = useState({
    userName: "",
    message: "",
  });
  // submitted
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleUserNameInputChange = (e) => {
    setValues({ ...values, userName: e.target.value });
  };
  const handleMessageInputChange = (e) => {
    setValues({ ...values, message: e.target.value });
  };

  // submitted event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.userName && values.message) {
      setValid(true);
    }
    setSubmitted(true);
  };

  // for modal
  const handleOnClose = (e) => {
    if (e.target.id === "main_box") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="main_box"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-1000"
    >
      <div className="form-container bg-white fixed z-1000 rounded-xl lg:w-5/12 md:w-6/12 sm:w-8/12 w-9/12 p-6 sm:p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          // action="#"
          method="get"
          className="register-form"
        >
          {/* Uncomment the next line to show the success message */}
          {submitted && valid ? (
            <div className="success-message bg-slate-500 py-3 mb-2 text-center text-white font-semibold border rounded-sm">
              Success! Your review has been posted.
            </div>
          ) : null}
          <div>
            <label htmlFor="username" className="font-semibold leading-4">
              Username:
            </label>{" "}
            <br />
            <input
              onChange={handleUserNameInputChange}
              value={values.userName}
              id="username"
              className="form-field w-full border border-[#d0d5dd] rounded-lg bg-[#f2f2f2]"
              type="text"
              placeholder="Username"
              name="userName"
            />
          </div>
          {submitted && !values.userName ? (
            <span id="username-error">Please enter username</span>
          ) : null}
          <div>
            <label htmlFor="message" className="font-semibold">
              Message:
            </label>{" "}
            <br />
            <textarea
              onChange={handleMessageInputChange}
              value={values.message}
              name="message"
              id="review_message"
              cols="10"
              rows="5"
              placeholder="Enter your review message here..."
              className="form-field w-full border border-[#d0d5dd] rounded-lg bg-[#f2f2f2]"
            ></textarea>
          </div>
          {/* Uncomment the next line to show the error message */}
          {submitted && !values.message ? (
            <span id="message-error">Text field cannot be empty</span>
          ) : null}
          <button
            className="form-field bg-[#d2120f] text-white border rounded-md cursor-pointer"
            type="submit"
          >
            Post
          </button>
        </form>

        <div className="hidden md:block">
          <img
            src="images/LOVE LEFT.png"
            alt=""
            className="md:absolute md:top-0 left-0 w-12 rotate-180 opacity-70"
          />
          <img
            src="images/LOVE LEFT.png"
            alt=""
            className="md:absolute md:bottom-0 right-0 w-12 opacity-70"
          />
        </div>
      </div>
    </div>
  );
}

export default ModalFormT;
