import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectCoverflow } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'

import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";

const Carousel = () => {
    let images =[image1,image2,image3,image4]
    return (
      <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
              delay: 10000, 
              disableOnInteraction: false,
          }}
          modules={[EffectCoverflow,Autoplay]} effect="coverflow"
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