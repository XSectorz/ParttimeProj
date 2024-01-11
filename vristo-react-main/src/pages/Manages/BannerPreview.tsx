import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import BannerCarouselObj from './BannerCarouselObj';

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
            <div>
                <BannerCarouselObj/>
            </div>
        </div>
    )

}

export default BannerPreview