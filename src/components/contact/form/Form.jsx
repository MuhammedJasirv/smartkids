import React, { useState } from "react";
import Dots from "../../../assets/images/contact/form/dots.png";
import Locaiton from "../../../assets/images/contact/form/location.png";

const Form = () => {
  return (
    <div className="bg-[#012C3B] relative px-4">
      <div className="relative">
        <img src={Dots} className="absolute" alt="" />
      </div>

      {/* Main container */}
      <div className="flex flex-col md:flex-row pt-16 pb-16 gap-12 md:gap-0">
        {/* Left Side */}
        <div className="md:w-1/2 w-full flex flex-col gap-14 md:gap-20 px-4 md:px-7 md:pl-[8%]">
          <div className="text-white w-full text-center md:text-left">
            <p className="font-bold text-4xl md:text-6xl font-kufi leading-tight">
              FORM <br />
              <span className="font-semibold text-3xl md:text-5xl font-kufi">
                Get In Touch!
              </span>
            </p>
            <p className="mt-6 md:mt-8 text-base md:text-xl">
              You’ve got some Q’s and we’ve got tons and tons of A’s. Ask us
              about Card order, Coin Purchase or anything you name it ... we can
              help with! Don’t be shy - we promise we’re really nice!
            </p>
          </div>

          {/* Office Address Card */}
          <div className="lg:w-[70%] w-full">
            <div className="bg-gradient-to-b from-[#3E89C8] to-[#95C83E] p-[2px] rounded-3xl w-full">
              <div className="bg-[#011C26] rounded-3xl p-5 h-full relative flex items-end">
                {/* Image Positioned */}
                <img
                  src={Locaiton}
                  alt=""
                  className="absolute -left-3 -top-10 object-contain"
                />

                {/* Text Content (aligned) */}
                <div className="flex flex-col justify-between h-full gap-4 ml-[30%]">
                  <p className="font-semibold font-sans text-xl text-start text-white">
                    Our Office Site
                  </p>
                  <p className="font-sans text-lg text-start text-white lg:w-2/3 w-full">
                    Smart kids ivt Trivandrum , KERALA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Form;

// ContactForm stays the same (already responsive due to max-w and padding)
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full px-2 sm:px-6">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-xl bg-gradient-to-b from-[#3E89C8] to-[#95C83E] p-[1px] rounded-3xl">
          <div className="bg-[#011C26] rounded-3xl p-6 md:p-8 shadow-lg">
            <div className="space-y-10 text-white">
              {/* Input Fields */}
              {["name", "email", "mobile"].map((field) => (
                <div key={field}>
                  <input
                    type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-0 placeholder-white border-b-[.5px] border-[#8FE5F8] text-white focus:outline-none focus:ring-2 focus:ring-[#8FE5F8] focus:rounded-2xl transition-all duration-200"
                    required
                  />
                </div>
              ))}

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-0 placeholder-white border-b-[.5px] border-[#8FE5F8] text-white focus:outline-none focus:ring-2 focus:ring-[#8FE5F8] focus:rounded-2xl transition-all duration-200 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-[#8CBE3E] hover:bg-[#8dbe3eb8] text-[#003041] font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
