import Heading from "../../../components/Heading";
import { styles } from "../../../constants/styles";
import { stats } from "../constants";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className={`${styles.padX} ${styles.padY} px-5 md:px-12 md:py-20 lg:px-24`}>
      <Heading
        title="Award-Winning Agency"
        txt="Recognized for excellence, innovation, and customer satisfaction, our agency provides cutting-edge security solutions trusted by industry leaders."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-0 text-center">
        {stats.map(({ id, icon: Icon, figure, text }) => (
          <div key={id} className="w-full md:w-1/4 p-5 flex flex-col items-center gap-2">
            <Icon className="text-sec text-5xl" />
            <div className="text-4xl font-bold text-1E1E1E">
              <CountUp end={figure} enableScrollSpy scrollSpyOnce />
            </div>
            <span className="text-lg font-medium text-mutedTxt">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;