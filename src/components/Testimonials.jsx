import React from "react";
import { useState, useEffect } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [showModal, setShowModal] = useState(false);

  // submitted
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleOnClose = () => {
    setSubmitted(false);
    setValid(false);
    setShowModal(false);
  };

  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  const [fieldError, setFieldError] = useState(false);

  // Fetching of Reviews
  const getMe = async () => {
    try {
      const res = await fetch(`https://api.loveme.hng.tech/api/v1/user/me/`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      });

      const data = await res.json();
      setUser(data.email);
    } catch (err) {
      // console.log(err);
    }
  };
  const getData = async () => {
    try {
      const res = await fetch(`https://api.loveme.hng.tech/review/all`);

      const data = await res.json();
      setData(data.reverse());
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getMe();
  }, []);

  // Modal
  const [values, setValues] = useState({
    userName: "",
    message: "",
  });

  const handleUserNameInputChange = (e) => {
    setValues({ ...values, userName: e.target.value });
  };
  const handleMessageInputChange = (e) => {
    setValues({ ...values, message: e.target.value });
  };

  // for modal form

  // const [postResult, setPostResult] = useState(null);

  async function postData() {
    const postData = {
      review: values.message,
    };

    if (values.message) {
      try {
        await fetch(`https://api.loveme.hng.tech/review/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
          body: JSON.stringify(postData),
        });

        getData();
      } catch (err) {
        // console.log(err);
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.userName && values.message) {
      postData();
      setValid(true);

      setSubmitted(true);
      setValues({
        userName: "",
        message: "",
      });
      setFieldError(false);
      handleOnClose();
    } else {
      setFieldError(true);
    }
  };

  async function deletePost(id) {
    try {
      await fetch(`https://api.loveme.hng.tech/review/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      });

      getData();
    } catch (err) {
      // console.log(err);
    }
  }

  return (
    <div className="review_div py-20 bg-[#FBF9F9] relative">
      <section className="flex flex-col px-12 sm:px-24 relative md:flex md:flex-col  md:mx-auto md:items-center  ">
        <h1 className="text-4xl font-bold mb-10 text-center">Testimonials</h1>
        <div>
          {data &&
            data.map((item) => {
              return (
                <div
                  className="md:max-w-xl md:mx-auto bg-gray-100 border rounded-xl mb-8"
                  key={item.id}
                >
                  <div className="flex  p-3 gap-5  md:mx-auto">
                    <img src="/Rectangle 34.svg" className="md:h-full" alt="" />
                    <p className="font-avenir_light leading-7 md:font-avenir_light md:text-lg lg:text-xl">
                      “{item.review}“
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center">
                      <div className=" w-12 h-12 border rounded-full mx-3 ">
                        <img
                          src={
                            item.user.image
                              ? item.user.image
                              : "/review-avatar.png"
                          }
                          alt="user profile"
                          className=" h-full w-full  border rounded-full"
                        />
                      </div>
                      <div>
                        <h5 className="font-avenir_bold text-base font-semibold">
                          {item.user.first_name} {item.user.last_name}
                        </h5>
                        <span className="text-[#928d8d] text-xs">
                          Love Letter user
                        </span>
                      </div>
                    </div>
                    {user === item.user.email && (
                      <div className="flex justify-end mr-5">
                        <svg
                          onClick={() => deletePost(item.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 cursor-pointer text-[#d2120f]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          {(!data || !data.length) && (
            <div>There is no available Testimonials Now</div>
          )}
        </div>

        <div className="hidden md:block">
          <img
            src="images/LOVE BOTTOM LEFT.png"
            alt=""
            className="md:absolute md:-top-20 md:left-5 w-15 mt-4 opacity-40"
          />
          {/* <img
            src="images/LOVE LEFT.png"
            alt=""
            className="md:absolute md:-bottom-20 right-7 w-15"
          /> */}
        </div>
      </section>

      <div className="fixed bottom-40 right-0 bg-[#d2120f] rounded-t-3xl rounded-l-3xl rounded-tr-none rounded-br-none translate-x-52 translate-y-0 hover:translate-x-0 hover:translate-y-0 cursor-pointer hover:transition-all hover:duration-1000 duration-700 ease-in-out  ">
        <button
          onClick={() => setShowModal(true)}
          className="flex gap-3 items-center px-2 py-2 text-base font-normal leading-6 text-white "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-[#d2120f] bg-white border rounded-full p-1 cursor-pointer "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Care to also leave a review?
        </button>
      </div>

      {showModal && (
        <div
          id="main_box"
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-1000"
        >
          <div className="form-container bg-white fixed z-1000 rounded-xl lg:w-5/12 md:w-6/12 sm:w-8/12 w-9/12 p-6 sm:p-8 md:p-12">
            <form
              // onSubmit={postData}
              // action="#"
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
              {fieldError && !values.userName ? (
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
              {fieldError && !values.message ? (
                <span id="message-error">Text field cannot be empty</span>
              ) : null}
              <button
                className="form-field bg-[#d2120f] text-white border rounded-md cursor-pointer"
                onClick={handleSubmit}
              >
                Post
              </button>
            </form>

            {!user ? (
              <div className="text-center font-bold py-2">
                <span id="message-error">
                  You need to be logged in to send a review!
                </span>
              </div>
            ) : null}

            {/* <button onClick={handleOnClose}>click and try</button> */}

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
      )}
    </div>
  );
}

export default Testimonials;
