import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { useEffect, useState } from 'react';
import CodeHighlight from '../../components/Highlight';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { IRootState } from '../../store';
import IconBell from '../../components/Icon/IconBell';
import IconCode from '../../components/Icon/IconCode';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import IconSearch from '../../components/Icon/IconSearch';
import IconXCircle from '../../components/Icon/IconXCircle';

const BannerPreview = () => {

    const [currentMenu, setCurrentMenu] = useState<String>('shops'); //shops , shopsItems, shopslist

    const changeMenuBar = (typeMenuBar: String) => {
        setCurrentMenu(typeMenuBar)
    }

    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    return (
        <div className='flex flex-col w-full'>
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
            <div className='flex w-full'>
                <Swiper
                                modules={[Autoplay]}
                                autoplay={{ delay: 2000 }}
                                className="swiper max-w-3xl mx-auto"
                                id="slider2"
                                dir={themeConfig.rtlClass}
                                key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                            >
                                <div className="swiper-wrapper">
                                    {items.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <img src={`/assets/images/${item}`} className="w-full max-h-80 object-cover" alt="itemImage" />
                                            </SwiperSlide>
                                        );
                                    })}
                                </div>
                </Swiper>
            </div>
            <div className='flex bg-[#F5F5FA] h-full w-full'>
                <div className='flex flex-row w-full pl-7' style={{ zIndex: "11"}}>
                    <div className='flex flex-row relative justify-between bottom-5'>
                        <div className="flex">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input className="block w-full p-2 ps-10 text-sm border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" placeholder="ค้นหาสินค้าและร้านค้า" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-full h-full text-white justify-around bg-[#F5F5FA]'>
                    <div className='flex flex-row p-3 rounded-lg bg-[#363a44]' style={{
                        width: "40%"
                    }}>
                        <div className='flex items-center justify-center h-full rounded-lg mr-5 bg-white text-black py-4 px-4' style={{
                            width: "50%"
                        }}>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='flex'>
                                    60x60
                                </div>
                                <div className='flex'>
                                    (1:1)
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center w-full h-full text-lg'>
                            จัดส่ง<br/>ทางไปรษณีย์
                        </div>
                    </div>

                    <div className='flex flex-row p-3 rounded-lg bg-[#363a44]' style={{
                        width: "40%"
                    }}>
                        <div className='flex items-center justify-center h-full rounded-lg mr-5 bg-white text-black py-4 px-4' style={{
                            width: "50%"
                        }}>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='flex'>
                                    60x60
                                </div>
                                <div className='flex'>
                                    (1:1)
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center w-full h-full text-lg'>
                            จัดส่งทันที
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default BannerPreview