import Heading from "../../../components/Heading";
import { styles } from "../../../constants/styles";
import { services, servicesStats } from "../constants";
import { motion } from "framer-motion";
import Button from "../../../components/Button";

const ServicesList = () => {
  return (
    <div className={`${styles.padX} ${styles.padY}`}>
      {/* Main Services Heading */}
      <Heading
        txt={
          "Stay ahead in the digital world with our cutting-edge services. At Protecturabase, we continuously evolve with technological advancements to provide you with top-tier online solutions. Our commitment to innovation, security, and efficiency ensures that you receive unparalleled service. Join our growing community of satisfied clients and experience the future of digital services today."
        }
      />

      {/* Services Grid */}
      <div className="mt-10 flex flex-col md:flex-row flex-wrap">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.header}
              className={`${
                (idx + 1) % 2 === 0 ? "bg-bgTet text-gray-200" : "border border-border"
              } w-full md:w-1/2 lg:w-1/3 py-10 px-6 text-center hover:border-sec duration-300`}
            >
              <div className="w-fit mx-auto text-6xl">
                <Icon />
              </div>
              <h3 className="mt-6 text-xl font-bold">{service.header}</h3>
              <p className="mt-3 font-light">{service.text}</p>
            </div>
          );
        })}
      </div>

      {/* Our Skills Section */}
      <Heading
        title={"Our Expertise"}
        txt={
          "Client feedback is at the core of our growth and service refinement. We continuously enhance our skills to meet your evolving needs, ensuring that we deliver top-tier solutions in every aspect of digital security and innovation."
        }
        custStyle={"mt-24"}
      />

      {/* Skills & Progress Bar Section */}
      <div className="mt-[70px] flex flex-col md:flex-row justify-between items-center gap-y-7">
        {/* Skills Description */}
        <div className="md:w-[45%]">
          <h3 className="text-4xl font-semibold text-text">Effortless Onboarding</h3>
          <p className="mt-3">
            Navigating digital solutions can be complex, but we’ve streamlined every step to make it seamless for you. Whether you're tackling security concerns or optimizing your digital presence, we simplify the process so you can focus on what matters most. Let’s work together to achieve your goals.
          </p>
          <Button title={"Contact Us"} color={"blue"} href={"contact"} custStyles={"mt-7 block w-fit"} />
        </div>

        {/* Progress Bars */}
        <div className="w-full md:w-[45%] flex flex-col gap-3">
          {servicesStats.map((stat) => (
            <div key={stat.title}>
              <h4 className="text-[15px] font-medium">{stat.title}</h4>
              <div className="mt-1 w-full bg-lightTxt h-3 rounded-sm overflow-hidden">
                <motion.span
                  className="block h-full bg-mutedTxt"
                  initial={{ width: 0 }}
                  whileInView={{ width: stat.progress }}
                  transition={{ duration: 3 }}
                  viewport={{ once: true }} // Ensures animation plays only once
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;