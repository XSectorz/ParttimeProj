import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
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

    const categoriesPhoto = useSelector((state: IRootState) => state.photo.categoriesPhoto);

    const dataList = Array.from({length:14}, (_,index) => `อาหารเสริม`);

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
                    
                    {
                        dataList.map((title,index) => (
                            
                            <SwiperSlide key={index} className='swiper-slide-show'>
                                <SlideTypeCard title={title} img={categoriesPhoto?.[index]} index={index} />
                            </SwiperSlide>
                        ))
                    }
                   
                </Swiper>
            </div>
        </>
    )
}

export default SlideTypeContainer;