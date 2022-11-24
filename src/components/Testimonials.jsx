import React from "react";
import ModalFormT from "./ModalFormT";
import { useState, useEffect } from "react";

function Testimonials() {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  const [data, setData] = useState(null);

  const getData = async () => {
    fetch(`https://api.loveme.hng.tech/review/all`)
      .then(async (response) => {
        return await response.json();
      })
      .then(async (resp) => {
        console.log(resp);
        data = resp;
        console.log(data);
        setData(await resp);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="review_div py-24 md:py-52 bg-[#FBF9F9] relative">
      {/* {data.map((item) => {
        return <li>{item.review}</li>;
      })} */}
      <section className="flex flex-col px-12 sm:px-24 relative md:flex md:flex-col md:p-20 md:h-screen md:mx-auto md:items-center md:justify-center ">
        <h1 className="text-4xl font-bold mb-10 text-center">Testimonials</h1>
        <div>
          <div className="md:max-w-xl md:mx-auto bg-gray-100 border rounded-xl ">
            <div className="flex  p-3 gap-5  md:mx-auto">
              <img src="images/Rectangle 34.svg" className="md:h-full" alt="" />
              <p className="font-avenir_light leading-7 md:font-avenir_light md:text-lg lg:text-xl">
                “LoveMe App is a fantastic tool that helped me express my love
                beautifully and creatively. The process was quick and easy, and
                I got a great love letter that perfectly captured my emotions.“
              </p>
            </div>
            <div className="flex justify-start mt-1">
              <img src="images/large.svg" alt="" className="px-4" />
              <div>
                <h5 className="font-avenir_bold text-base font-semibold">
                  Ije
                </h5>
                <span className="text-[#928d8d] text-xs">Love Letter user</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 cursor-pointer text-[#d2120f]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>

          <div className="md:max-w-xl md:mx-auto bg-gray-100 border rounded-xl mt-10">
            <div className="flex  p-3 gap-5  md:mx-auto">
              <img src="images/Rectangle 34.svg" className="md:h-full" alt="" />
              <p className="font-avenir_light leading-7 md:font-avenir_light md:text-lg lg:text-xl">
                “ I was initially skeptical about this app, but I decided to try
                it. And I'm so glad I did! The love letters it generated for me
                were so beautiful and creative. I could never have written
                something like that on my own. This app is definitely worth the
                small fee.“
              </p>
            </div>
            <div className="flex justify-start mt-1">
              <img src="images/large.svg" alt="" className="px-4" />
              <div>
                <h5 className="font-avenir_bold text-base font-semibold">
                  Ben
                </h5>
                <span className="text-[#928d8d] text-xs">Love Letter user</span>
              </div>
            </div>
          </div>

          <div className="md:max-w-xl md:mx-auto bg-gray-100 border rounded-xl mt-10">
            <div className="flex  p-3 gap-5  md:mx-auto">
              <img src="images/Rectangle 34.svg" className="md:h-full" alt="" />
              <p className="font-avenir_light leading-7 md:font-avenir_light md:text-lg lg:text-xl">
                “ I was really touched by the beautiful and poetic love letters
                that LoveMe App generated for me. It was like having my own love
                letter writer, but at a fraction of the cost. And because the
                letters were generated based on my own emotions and parameters,
                they felt very personal and intimate.“
              </p>
            </div>
            <div className="flex justify-start mt-1">
              <img src="images/large.svg" alt="" className="px-4" />
              <div>
                <h5 className="font-avenir_bold text-base font-semibold">
                  Jane
                </h5>
                <span className="text-[#928d8d] text-xs">Love Letter user</span>
              </div>
            </div>
          </div>
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
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-[#d2120f] bg-white border rounded-full p-1 cursor-pointer "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Care to also leave a review?
        </button>
      </div>
      <ModalFormT onClose={handleOnClose} visible={showModal} />
    </div>
  );
}

export default Testimonials;
