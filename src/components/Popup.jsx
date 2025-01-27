import React, { useEffect, useState } from "react";
import Button from "./Button";

const Popup = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      // Disable background scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable background scrolling
      document.body.style.overflow = "auto";
    }

    {/* // Cleanup when component unmounts or popup closes
    return () => {
      document.body.style.overflow = "auto";
    }; */}
  }, [isOpen]);

  const handleSubmit = () => {
    alert(`Submitted value: ${inputValue}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex flex-col p-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-6 relative w-[90%] max-w-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
        >
          &times;
        </button>

        {/* Title */}
        <h6 className="font-semibold text-base">Let's Connect</h6>

        {/* Description */}
        <p className="text-sm text-gray-300">
        Tell us about your requirement, and we'll get back to you right away!
        </p>
        {/* Form */}
        <form className="space-y-4">
          <div>
          <input
          type="text"
          placeholder="Name*"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-3 text-sm text-gray-100 border border-gray-300 rounded-lg focus:outline-none"
        />
          </div>
          <div>
          <input
          type="text"
          placeholder="Email*"
          className="w-full p-3 text-sm text-gray-100 border border-gray-300 rounded-lg focus:outline-none"
        />
          </div>
          <div>
          <input
          type="text"
          placeholder="Phone*"
          className="w-full p-3 text-sm text-gray-100 border border-gray-300 rounded-lg focus:outline-none"
        />
          </div>
          <div>
            <textarea
              rows="4"
              placeholder="Please describe your requirement"
              className="w-full p-3 text-sm text-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex justify-right mt-12 md:mt-15 xl:mt-20">
        </div>
        </form>
        {/* Submit Button */}
        <Button
          className="self-end"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Popup;