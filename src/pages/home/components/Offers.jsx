import Heading from "../../../components/Heading";
import { styles } from "../../../constants/styles";
import { offers } from "../constants";

const Offers = () => {
  return (
    <section className={`${styles.padX} ${styles.padY} mt-14 text-center`}>
      {/* Section Heading */}
      <Heading 
        title="What We Offer"
        txt="At Protecturabase, we provide expert cybersecurity solutions, including assessments, penetration testing, and advanced security measures. Our mission is to protect businesses from cyber threats, offering fast response solutions for hacking incidents, data recovery, and surveillance services."
      />

      <div className="mt-10 md:mt-[70px] flex flex-col md:flex-row gap-x-5">
        {/* Left-Side Image Section */}
        <div className="w-full h-[350px] md:h-auto md:w-1/3 relative overflow-hidden rounded-lg">
          <img src="offers1.jpg" alt="Cybersecurity Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#060d315d]" />
        </div>

        {/* Right-Side Offer Cards */}
        <div className="md:w-2/3 flex flex-col md:flex-row flex-wrap gap-4">
          {offers.map(({ id, icon: Icon, header, text }) => (
            <div 
              key={id} 
              className="w-full md:w-[48%] px-6 py-10 rounded-xl border border-border hover:border-sec shadow-lg transition-all duration-200"
            >
              <div className="w-fit mx-auto p-2 text-mutedTxt text-5xl">
                <Icon />
              </div>
              <h3 className="text-2xl font-semibold text-heading mt-3">{header}</h3>
              <p className="text-mutedTxt mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;