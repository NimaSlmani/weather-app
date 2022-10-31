import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade,Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'

import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";

const Carousel = () => {
    let images =[image1,image2,image3,image4,image5,image6,image7]
    return (
      <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
              delay: 10000, 
              disableOnInteraction: false,
          }}
          modules={[EffectFade,Autoplay]} effect="fade"
      >
        {
            images.map((image,index)=>
                <SwiperSlide key={index}>
                    <img src={image} alt="weather-app" className="w-full h-screen object-cover" />
                </SwiperSlide>
            )
        }    
      </Swiper>
    )
}

export default Carousel