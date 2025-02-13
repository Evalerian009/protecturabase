import Slider from "react-slick";
import { logos } from "../constants";
import Reviews from "../../../components/Reviews";
import { styles } from "../../../constants/styles";

const ServiceSlides = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 320,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
      {/* Logo Slider Section */}
      <div className={`${styles.padX} py-10 bg-bgTet`}>
        <Slider {...sliderSettings}>
          {logos.map((logo) => (
            <div key={logo.id} className="grayscale brightness-300">
              <img
                src={logo.img}
                alt={`Partner logo ${logo.id}`}
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Customer Reviews Section */}
      <Reviews />
    </>
  );
};

export default ServiceSlides;