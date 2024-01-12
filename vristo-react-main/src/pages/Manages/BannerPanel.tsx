
import IconPlus from '../../components/Icon/IconPlus';
import IconX from '../../components/Icon/IconX';
import ImagePlaceholder from './ImagePlaceholder';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BannerPanel = () => {
    const [imagePlaceholders, setImagePlaceholders] = useState([1]);

    const addImagePlaceholder = () => {
        if (imagePlaceholders.length < 4) {
            setImagePlaceholders(prevState => [...prevState, prevState.length + 1]);
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text: 'สามารเพิ่มรูปภาพ/วิดีโอ ได้สูงสุด 4 รูปเท่านั้น',
                //textColor:'#ff5733',
                confirmButtonColor: '#00ab55',
            });
        }
    };
    const deleteImagePlaceholder = (index: Number) => {
        const updatedPlaceholders = imagePlaceholders.filter(item => item !== index);
        setImagePlaceholders(updatedPlaceholders);
    };

    return (
        <>
        <PerfectScrollbar className="w-full h-[calc(100vh-80px)] relative">
            <div className="flex flex-col px-4 w-full bg-[#FFFFFF] pb-4">
                <div className="flex flex-row justify-between w-full mt-6">
                    <div className="flex items-center justify-center ">
                        <p className='text-lg font-nunito font-extrabold'>แบนเนอร์&nbsp;</p>
                        <p className='text-lg font-nunito font-bold'>Carousel</p>
                    </div>
                    <button className="flex">
                        <IconX className="w-5 h-5" />
                    </button>
                </div>
                <div className='flex font-nunito text-sm text-[#8d8d8f] break-words mt-4 mb-2'>
                    แนะนำโปรโมชั่นที่ดีที่สุดหรือแสดงสินค้าและหมวดหมู่สินค้ายอดนิยมในร้านคุณด้วยแบนเนอร์ที่ลูกค้าสามารถเลื่อนดูได้
                </div>
                <div className='flex-col'>
                {imagePlaceholders.map(index => (
                    <ImagePlaceholder
                        key={index}
                        onDelete={() => deleteImagePlaceholder(index)} // ส่งฟังก์ชัน deleteImagePlaceholder ไปยัง ImagePlaceholder
                    />
                ))}
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="flex flex-row border-dashed border-[3px] border-[#4361EE] p-4 w-full rounded-lg justify-center"
                    onClick={addImagePlaceholder}
                    role="button">
                        <IconPlus className='mt-[3px] text-[#4361EE]'/>
                        <span className="font-notosans text-lg text-[#4361EE] ml-2">เพิ่มรูปภาพ/วิดีโอ ({imagePlaceholders.length}/4)</span>
                    </div>
                </div>
            </div>
            </PerfectScrollbar>
        </>
    )
}

export default BannerPanel;