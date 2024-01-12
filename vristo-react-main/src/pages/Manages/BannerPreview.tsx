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

import '../../assets/css/swiper-2-rows.css'
import SlideTypeContainer from './SlideTypeContainer';


const BannerPreview = () => {

    const [currentMenu, setCurrentMenu] = useState<String>('shops'); //shops , shopsItems, shopslist
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const changeMenuBar = (typeMenuBar: String) => {
        setCurrentMenu(typeMenuBar)
    }

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
                <BannerCarouselObj />
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center w-40 -translate-x-40 absolute bg-[#e8e8e8] text-[#666666]' style={{ zIndex: "10" }}>
                    <div className='flex flex-col justify-center items-center my-3'>
                        <div className='flex '>
                            รายการหมวดหมู่สินค้า
                        </div>
                    </div>
                </div>
                <div className='flex text-black mx-7 text-lg mb-1'>
                    หมวดหมู่
                </div>
                <div>
                    <SlideTypeContainer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <div className={`flex h-3 rounded-full duration-500 ${currentIndex === 0 ? 'bg-black w-8' : 'bg-[#b3b9c6] w-3'} mx-1`} />
                    <div className={`flex h-3 rounded-full duration-500 ${currentIndex === 1 ? 'bg-black w-8' : 'bg-[#b3b9c6] w-3'} mx-1`} />
                    <div className={`flex h-3 rounded-full duration-500 ${currentIndex === 2 ? 'bg-black w-8' : 'bg-[#b3b9c6] w-3'} mx-1`} />
                    <div className={`flex h-3 rounded-full duration-500 ${currentIndex === 3 ? 'bg-black w-8' : 'bg-[#b3b9c6] w-3'} mx-1`} />
                </div>
            </div>
        </div>
    )

}

export default BannerPreview