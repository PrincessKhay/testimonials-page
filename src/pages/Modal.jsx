import React from "react";

function Modal({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "main_box") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="main_box"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-1000"
    >
      <div className="fixed z-1000 w-96 xxsx:w-80 bg-white rounded-xl">
        <div className="flex justify-between m-6">
          <span className="font-bold text-xl">Connect Wallet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer fill-current text-black"
            onClick={onClose}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <hr className="text-gray-100" />

        <div className="m-6">
          <p className="text-sm">Choose your preferred wallet:</p>
          <a
            href="/"
            className="w-full p-2 mt-3 border border-gray-300 rounded-xl flex justify-between items-center hover:bg-gray-50"
          >
            <div className="space-x-3 flex items-center">
              <img src="images/metamask.svg" alt="" />
              <span className="text-lg font-semibold">Metamask</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>

          <a
            href="/"
            className="w-full p-2 mt-3 border border-gray-300 rounded-xl flex justify-between items-center hover:bg-gray-50"
          >
            <div className="space-x-3 flex items-center">
              <img src="images/wallet.svg" alt="" />
              <span className="text-lg font-semibold">WalletConnect</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
