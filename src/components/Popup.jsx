import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { EmailJSServiceID, EmailJSPublicKey, EmailJSTemplateID } from "../constants/config";

const Popup = ({ isOpen, onClose }) => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        EmailJSServiceID, // Replace with your EmailJS Service ID
        EmailJSTemplateID, // Replace with your EmailJS Template ID
        formRef.current,
        EmailJSPublicKey // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
          console.log("Success:", response);
  
          // ✅ Clear form state
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
  
          // ✅ Reset the form reference
          formRef.current.reset();
  
          onClose(); // Close popup
        },
        (error) => {
          alert("Failed to send email.");
          console.error("Error:", error);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex flex-col p-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-6 relative w-[90%] max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
        >
          &times;
        </button>

        <h6 className="font-semibold text-base">Let's Connect</h6>
        <p className="text-sm text-gray-300">
          Tell us about your requirement, and we'll get back to you right away!
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 text-sm text-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 text-sm text-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 text-sm text-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Please describe your requirement"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 text-sm text-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            required
          />

          <Button type="submit" className="self-end">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Popup;