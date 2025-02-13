import Header from "../../components/Header";
import Stats from "../home/components/Stats";
import Banner from "../home/components/Banner";
import { styles } from "../../constants/styles";

const About = () => {
  return (
    <div>
      <Header title="About Us" />

      <div className={`${styles.padX} ${styles.padY} flex flex-col gap-y-12 lg:flex-row lg:items-center`}>
        <div className="lg:w-1/2 lg:pr-14 flex flex-col gap-5 text-lg">
          <h2 className="text-4xl text-text font-bold md:w-[350px] uppercase">Protecturabase</h2>
          <p>At Protecturabase, we specialize in advanced cybersecurity, penetration testing, and digital forensics. Our expertise lies in identifying vulnerabilities, executing security assessments, and tackling digital challenges where others fall short.</p>
          <p>We have extensive experience in account recovery, ethical hacking, and remote security solutions. Through years of dedicated research, we have developed proven methodologies to secure and retrieve digital assets efficiently.</p>
          <p>Explore our website to review our range of services. If your specific request isn’t listed, our minimum service fee is $600. After evaluating your case, we will provide a final quote. To proceed, click the chat support icon and connect with our team.</p>
        </div>
        <div className="lg:w-1/2 h-full relative">
          <img src="abt1.jpg" alt="About Us" className="w-full max-h-[300px] lg:max-h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#01082270]" />
        </div>
      </div>

      <div className={`${styles.padX} ${styles.padY} flex flex-col gap-12 justify-between lg:flex-row lg:items-center`}>
        <div className="w-full lg:w-[48%] flex flex-col gap-8">
          <h2 className="text-4xl text-text font-bold md:w-[350px] capitalize">Our Mission</h2>
          <p className="lg:h-[180px]">Our mission is to empower individuals and businesses by offering cutting-edge cybersecurity solutions. We are committed to protecting privacy, preventing cyber threats, and enhancing digital security through innovative strategies. By staying ahead of evolving cyber risks, we provide expert recovery, monitoring, and security services tailored to our clients&apos; needs.</p>
          <img src="mission.jpg" alt="Our Mission" className="w-full h-[300px] lg:h-full object-cover" />
        </div>
        <div className="w-full lg:w-[48%] flex flex-col gap-8">
          <img src="vision.jpg" alt="Our Vision" className="w-full max-h-[300px] hidden lg:block" />
          <h2 className="text-4xl font-bold md:w-[350px] capitalize text-text">Our Vision</h2>
          <p className="lg:h-[180px]">Our vision is to lead the global cybersecurity landscape by setting new standards in digital protection and innovation. We aim to create a safer online world where individuals and businesses can operate confidently without fear of cyber threats. Through continuous research, strategic partnerships, and advanced security solutions, we strive to make the digital space more resilient and secure for everyone.</p>
          <img src="vision.jpg" alt="Our Vision" className="w-full lg:hidden block max-h-[300px] lg:h-full object-cover" />
        </div>
      </div>

      <Stats />
      <Banner />
    </div>
  );
};

export default About;
