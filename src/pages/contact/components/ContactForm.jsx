import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission success
    setTimeout(() => {
      navigate("/thank-you"); // Redirect to Thank You page
    }, 1000);
  };
  return (
    <form
      action="https://formsubmit.co/simonemmanuel203@gmail.com" // Replace with your FormSubmit email
      method="POST"
      className="w-full md:w-[48%] flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      {/* Disable Captcha */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Redirect after submission (optional) */}
      <input type="hidden" name="_next" value="https://protecturabase.vercel.app//thank-you" />

      {/* Input Fields */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="p-3 text-[15px] border border-border rounded-lg outline-none"
      />
      <input
        type="email"
        name="email"
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

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-button1 hover:bg-bgTet py-3 text-white text-[14px] uppercase rounded-lg transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;