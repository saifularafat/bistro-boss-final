import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

/* images Link up */
import slide1 from './../../../assets/home/slide1.jpg'
import slide2 from './../../../assets/home/slide2.jpg'
import slide3 from './../../../assets/home/slide3.jpg'
import slide4 from './../../../assets/home/slide4.jpg'
import slide5 from './../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
const CategorySwiper = () => {
    return (
        <section className="">

            <SectionTitle
            subHeading = {'From 11:00am to 10:00pm'}
            heading = {'ORDER ONLINE'}
            >
            </SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper md:mb-24 mb-14 mt-8 "
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className="swiper_title">Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className="swiper_title">Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className="swiper_title">Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className="swiper_title">Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className="swiper_title">Salad</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default CategorySwiper;