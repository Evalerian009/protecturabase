import Button from "../../../components/Button";
import { styles } from "../../../constants/styles";

const Hero = () => {
  return (
    <div
      className="w-screen h-[700px] lg:min-h-screen text-white flex items-center"
      style={{
        backgroundImage: `url(hero-bg1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay for Contrast */}
      <div className={`bg-[#000000a7] w-full h-full ${styles.padX} ${styles.padY} flex flex-col justify-center`}>
        <div className="md:max-w-[600px]">
          {/* Main Heading */}
          <h1 className="text-[2.6rem] md:text-6xl leading-tight font-semibold uppercase">
            We Are an Innovative <br /> Creative Agency
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-lightTxt md:w-[360px] lg:w-full">
            Pushing the boundaries of design and technology, we craft solutions that elevate brands. Let’s build something exceptional together.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-5 flex flex-wrap gap-4">
            <Button title="Discover More" color="blue" href="about" />
            <Button title="Our Story" color="transparent" href="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
