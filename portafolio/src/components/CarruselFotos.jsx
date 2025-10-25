import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarruselFotos = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="bg-bg-soft border border-bg-soft rounded-lg p-8 text-center text-secondary">
        <p className="font-sans">
          No hay imágenes adicionales para este proyecto.
        </p>
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      className="rounded-lg shadow-xl overflow-hidden"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarruselFotos;
