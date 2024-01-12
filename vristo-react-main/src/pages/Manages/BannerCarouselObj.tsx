import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';


const BannerCarouselObj = () => {

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const uploadedPhoto = useSelector((state: IRootState) => state.photo.uploadedPhoto);
    return (
        <div>
            <div className='flex w-full'>
                <div className='flex justify-center items-center w-40 -translate-x-40 absolute bg-[#666666] text-white' style={{ zIndex: "10" }}>
                    <div className='flex flex-col justify-center items-center my-1'>
                        <div className='flex '>
                            แบนเนอร์
                        </div>
                        <div className='flex '>
                            Carousel
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000 }}
                    className="swiper max-w-3xl mx-auto"
                    id="slider2"
                    dir={themeConfig.rtlClass}
                    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                >
                    <div className="swiper-wrapper">
                        {uploadedPhoto?.length ? (
                            uploadedPhoto.map((photoUrl, i) => (
                                <SwiperSlide key={i}>
                                    <img src={photoUrl} className="w-full max-h-80 object-cover" alt={`itemImage-${i}`} />
                                </SwiperSlide>
                            ))
                        ) : (
                            // Display a default image when uploadedPhoto is null or empty
                            <SwiperSlide>
                                <img src="/assets/images/banner-not-found.png" className="w-full max-h-80 object-cover" alt="defaultImage" />
                            </SwiperSlide>
                        )}
                    </div>
                </Swiper>
            </div>
            <div className='flex h-full w-full'>
                <div className='flex flex-row w-full pl-7' style={{ zIndex: "11" }}>
                    <div className='flex flex-row relative justify-between bottom-5'>
                        <div className="flex">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input className="block w-full p-2 ps-10 text-sm border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" placeholder="ค้นหาสินค้าและร้านค้า" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row w-full h-full text-white justify-around'>
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
                        จัดส่ง<br />ทางไปรษณีย์
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
            <div className='flex h-full mt-6 text-white mx-7'>
                <div className='flex h-full w-full rounded-md bg-[#363a44]'>
                    <div className='flex flex-row py-3 justify-between w-full'>
                        <div className='flex rounded-md bg-white w-9 h-7 ml-2' />
                        <div className='flex truncate ... text-lg mx-2'>
                            <p className="truncate ...">
                                สถานที่จัดส่ง: 12/37 หมู่6 เฟส1 ซอยบางพุทรา อ.เมือง จ.สิงห์บุรี 16000
                            </p>
                        </div>
                        <div className='flex rounded-md bg-white w-9 h-7 mr-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCarouselObj;