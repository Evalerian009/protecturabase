import Slider from "react-slick";

import { IoChatbubblesSharp } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";

import { slides } from '../pages/home/constants'
import { styles } from "../constants/styles";

const Reviews = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <>
      <div className={`${styles.padX} ${styles.padY} text-center`}>
        <Slider {...settings}>
          {slides.map(slide => (
            <div key={slide.id} className="px-2.5">
              <div className="w-fit mx-auto text-text border border-border py-10 px-7 rounded-3xl">
                <IoChatbubblesSharp className="mx-auto text-6xl text-grayTxt"/>
                <p className="md:w-[83%] lg:w-[88%] mx-auto text-[16px] h-[150px] mt-7 text-grayTxt">{slide.text}</p>
                <HiUser className="mx-auto text-[2.25rem] rounded-full text-grayTxt" />
                <h5 className="mt-0.5 text-tet text-center text-mutedTxt">{slide.user}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Reviews