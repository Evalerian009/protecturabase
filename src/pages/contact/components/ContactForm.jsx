import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdReplayCircleFilled } from "react-icons/md";

export const ContactForm = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setLoading(false)
          console.log('SUCCESS!');
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again.");
          console.log('FAILED...', error.text);
        },
      );
      
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full md:w-[48%] flex flex-col gap-4">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="p-3 text-[15px] border border-border rounded-lg outline-none"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"

        required
        className="p-3 text-[15px] border border-border rounded-lg outline-none"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
    
        required
        className="p-3 text-[15px] border border-border rounded-lg outline-none"
      />
      <textarea
        name="message"
        placeholder="Your Message"
    
        required
        className="p-3 text-[15px] border border-border rounded-lg outline-none resize-none"
        rows={4}
      />
      <div className='flex gap-2 items-center'>
        <input 
          type="submit" 
          value={loading ? "Sending..." : "Submit"} 
          className="bg-button1 cursor-pointer hover:bg-bgTet py-3 text-white text-[14px] flex-1 uppercase rounded-lg transition-all" 
          disabled={loading}
        />
        <button type="reset" className='cursor-pointer text-button1 hover:text-bgTet duration-300'>
          <MdReplayCircleFilled onClick={()=>setloading(false)} className='text-[2.5rem]'/>
        </button>
      </div>

      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
};


// import { useState } from "react";
// import emailjs from "emailjs-com";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccessMessage("");
//     setErrorMessage("");

//     emailjs
//       .send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
//       )
//       .then(
//         () => {
//           setSuccessMessage("Your message has been sent successfully!");
//           setFormData({ name: "", email: "", subject: "", message: "" });
//         },
//         (error) => {
//           setErrorMessage("Failed to send message. Please try again.");
//         }
//       )
//       .finally(() => setLoading(false));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full md:w-[48%] flex flex-col gap-4">
//       <input
//         type="text"
//         name="name"
//         placeholder="Your Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//         className="p-3 text-[15px] border border-border rounded-lg outline-none"
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Your Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//         className="p-3 text-[15px] border border-border rounded-lg outline-none"
//       />
//       <input
//         type="text"
//         name="subject"
//         placeholder="Subject"
//         value={formData.subject}
//         onChange={handleChange}
//         required
//         className="p-3 text-[15px] border border-border rounded-lg outline-none"
//       />
//       <textarea
//         name="message"
//         placeholder="Your Message"
//         value={formData.message}
//         onChange={handleChange}
//         required
//         className="p-3 text-[15px] border border-border rounded-lg outline-none resize-none"
//         rows={4}
//       />
//       <button
//         type="submit"
//         className="bg-button1 hover:bg-bgTet py-3 text-white text-[14px] uppercase rounded-lg transition-all"
//         disabled={loading}
//       >
//         {loading ? "Sending..." : "Submit"}
//       </button>

//       {successMessage && <p className="text-green-500">{successMessage}</p>}
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//     </form>
//   );
// };

export default ContactForm;
