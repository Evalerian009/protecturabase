import { BiCheck } from "react-icons/bi";
import { homeServices } from "../constants";
import Heading from "../../../components/Heading";
import Button from "../../../components/Button";
import { styles } from "../../../constants/styles";

const Services = () => {
  return (
    <section className={`${styles.padX} ${styles.padY} py-14 md:py-[100px] lg:px-[100px]`}>
      {/* Section Heading */}
      <Heading
        title="The Cleedenz Agency"
        txt="At Cleedenz, we prioritize excellent customer support and offer specialized services in hacking recovery, data restoration, and cybersecurity solutions."
      />

      <div className="mt-18 flex flex-col items-center md:flex-row-reverse gap-7">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full h-[300px] relative overflow-hidden rounded-lg">
          <img src="services.jpg" alt="Our Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0000003d]" />
        </div>

        {/* Services List */}
        <div className="lg:w-1/2 py-5">
          <ul className="flex flex-col gap-y-3">
            {homeServices.map(({ id, text }) => (
              <li key={id} className="flex gap-4 items-start">
                <BiCheck className="text-4xl text-sec min-w-14" />
                <span className="text-grayTxt">{text}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button title="Contact Us" href="contact" color="blue" custStyles="block w-fit mt-7" />
        </div>
      </div>
    </section>
  );
};

export default Services;
