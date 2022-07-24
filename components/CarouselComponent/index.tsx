import Image from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "./styles";

const CarouselComponet = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide style={{ minWidth: 200 }}>
          <Image
            src={"/teste.png"}
            layout="fill"
            objectFit="cover"
            alt="teste"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: "rgba(151, 151, 151,0.1)", minWidth: 212 }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: "rgba(151, 151, 151,0.1)", minWidth: 212 }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: "rgba(151, 151, 151,0.1)", minWidth: 212 }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: "rgba(151, 151, 151,0.1)", minWidth: 212 }}
        ></SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default CarouselComponet;
