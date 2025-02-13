import Header from "../../components/Header";
import { IoIosHome, IoIosPhonePortrait, IoMdGlobe } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import MapPlaceholder from "./assets/map.png";
import Heading from "../../components/Heading";
import { styles } from "../../constants/styles";
import ContactForm from './components/ContactForm'; // Import the new component

const Contact = () => {
  return (
    <div>
      <Header title="Contact" />

      <div className={`${styles.padX} ${styles.padY}`}>
        <Heading
          title="Get In Touch"
          txt="In today's digital age, reaching out to organizations has never been easier. We've made it simple for our clients to contact us—we're available 24/7. For emergencies or instant responses, please use the live chat support, where our agents will assist you immediately."
        />

        <div className="mt-[70px] flex flex-col md:flex-row justify-between gap-y-7">
          {/* Contact Details Section */}
          <div className="md:w-[45%]">
            <h3 className="text-4xl font-semibold text-heading">Contact Details</h3>
            <p className="mt-3 text-grayTxt">
              If you have any inquiries, feel free to reach out to us. Our team is dedicated to responding promptly and efficiently.
            </p>
            <div className="mt-7 flex flex-col gap-3 text-grayTxt">
              <p className="flex items-center gap-2">
                <IoIosHome className="text-lg" />
                <span>42nd Street, Ordway, Colorado.</span>
              </p>
              <p className="flex items-center gap-2">
                <IoIosPhonePortrait className="text-lg" />
                <span>Phone: +1 801 413 7852</span>
              </p>
              <p className="flex items-center gap-2">
                <IoMdGlobe className="text-lg" />
                <span>Text: +1 801 413 7852</span>
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-lg" />
                <span>Email: officialcleedenz@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <ContactForm />
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[350px] flex items-center justify-center">
        <iframe
          style={{
            backgroundImage: `url(${MapPlaceholder})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          frameBorder={0}
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default Contact;