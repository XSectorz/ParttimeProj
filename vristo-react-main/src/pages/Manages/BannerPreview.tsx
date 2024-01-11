import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay,Grid } from 'swiper';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import BannerCarouselObj from './BannerCarouselObj';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import '../../assets/css/swiper-2-rows.css'

const BannerPreview = () => {

    const [currentMenu, setCurrentMenu] = useState<String>('shops'); //shops , shopsItems, shopslist

    const changeMenuBar = (typeMenuBar: String) => {
        setCurrentMenu(typeMenuBar)
    }

    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    return (
        <div className='flex flex-col w-full bg-[#F5F5FA]'>
            <div className="flex w-full flex-row bg-[#FFFFFF] h-full">
                <div className="flex px-4 py-3 w-full">
                    <button className={`pb-2 ${currentMenu === 'shops' ? 'text-[#4361EE] border-b-2 border-b-[#4361EE]' : ' text-black'}`} style={{
                        width: "33%"
                    }} onClick={() => changeMenuBar("shops")}>
                        ร้านค้า
                    </button>
                    <button className={`pb-2 ${currentMenu === 'shopsItems' ? 'text-[#4361EE] border-b-2 border-b-[#4361EE]' : ' text-black'}`} style={{
                        width: "33%"
                    }} onClick={() => changeMenuBar("shopsItems")}>
                        รายการร้านค้า
                    </button>
                    <button className={`pb-2 ${currentMenu === 'shopslist' ? 'text-[#4361EE] border-b-2 border-b-[#4361EE]' : ' text-black'}`} style={{
                        width: "33%"
                    }} onClick={() => changeMenuBar("shopslist")}>
                        ร้านค้า
                    </button>
                </div>
            </div>
            <div className='mb-4'>
                <BannerCarouselObj/>
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center w-40 -translate-x-40 absolute bg-[#e8e8e8] text-[#666666]' style={{ zIndex: "10"}}>
                    <div className='flex flex-col justify-center items-center my-1'>
                        <div className='flex '>
                            รายการหมวดหมู่สินค้า
                        </div>
                    </div>
                </div>
                <div className='flex text-black mx-7 text-lg'>
                    หมวดหมู่
                </div>
                <div className='flex flex-row'>
                <Swiper
                        slidesPerView={3}
                        grid={{
                        rows: 2,
                        }}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )

}

export default BannerPreview