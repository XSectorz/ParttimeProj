import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from 'swiper';
import { useState } from 'react';
import BannerCarouselObj from './BannerCarouselObj';
import SlideTypeCard from './SlideTypeCard';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import '../../assets/css/swiper-2-rows.css';

interface SlideTypeContainerProps {
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
  }

const SlideTypeContainer: React.FC<SlideTypeContainerProps> = ({ currentIndex, setCurrentIndex }) => {
    return (
        <>
            <div className='flex flex-row h-[300px] mx-7'>
                <Swiper
                    slidesPerView={4}
                    grid={{
                        rows: 2,
                    }}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid]}
                    className="mySwiper"
                    onSlideChange={(swiper) => {
                        setCurrentIndex(swiper.activeIndex);
                    }}
                >
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม1" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม2" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม3" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม4" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม5" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม" /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-show'><SlideTypeCard title="อาหารเสริม" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default SlideTypeContainer;