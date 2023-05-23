import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
// rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from 'react-icons/fa';



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                heading='TESTIMONIALS'
                subHeading='What Our Clients Say'>

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 mt-10">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                />
                                <FaQuoteLeft  className="w-12 h-12 my-5 "/>
                            <p className="md:max-w-[1024px] text-center font-Inter font-normal text-descColor">{review.details}</p>
                            <h1 className="font-Inter font-semibold text-3xl text-btn_color mt-2">{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;