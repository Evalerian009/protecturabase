import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-5 bg-white">
      <FaCheckCircle className="text-green-500 text-6xl mb-4" />
      <h1 className="text-3xl font-semibold text-heading">Thank You!</h1>
      <p className="text-grayTxt mt-2 max-w-md">
        Your message has been successfully sent. We'll get back to you as soon as possible.
      </p>
      <Link
        to="/"
        className="mt-5 bg-button1 hover:bg-bgTet text-white py-3 px-6 rounded-lg text-[15px] uppercase duration-200"
        onClick={() => {window.scrollTo(0, 0)}}
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default ThankYou;