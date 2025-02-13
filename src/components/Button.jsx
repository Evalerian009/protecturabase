import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ href, title, color, custStyles }) => {
  const location = useLocation(); // Get current route

  const handleClick = (e) => {
    if (location.pathname === href) {
      e.preventDefault(); // Prevent duplicate navigation
      window.scrollTo(0, 0);
    }
  };

  return (
    <Link
      to={href.startsWith("/") ? href : `/${href}`} // Ensure absolute path
      className={`${color === "blue" ? "bg-button1 hover:bg-bgTet text-white" : "bg-bgTet hover:bg-button1"} 
      uppercase h-fit py-2.5 duration-200 px-10 rounded-lg text-[15px] ${custStyles}`}
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  custStyles: PropTypes.string,
};

export default Button;
