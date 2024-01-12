
import IconPlus from '../../components/Icon/IconPlus';
import IconX from '../../components/Icon/IconX';
import ImagePlaceholder from './ImagePlaceholder';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React, { useState, useEffect  } from 'react';
import Swal from 'sweetalert2';

interface BannerPanelProps {
    currentMode: string;
    setCurrentMode: (mode: string) => void;
}


interface InfoDataItem {
    title_th: string;
    title_eng: string;
    description: string;
  }
  const BannerPanel: React.FC<BannerPanelProps> = ({ currentMode,setCurrentMode }) => {
    
    const [imagePlaceholders, setImagePlaceholders] = useState([1]);
    const [imageArray , setImageArray] = useState<string [] >([]);
    const [infoDescriptionData, setInfoDescriptionData] = useState<InfoDataItem | null>(null);

    const infoData = [
        {
            title_th: "แบนเนอร์",
            title_eng: "Carousel",
            description: "แนะนำโปรโมชั่นที่ดีที่สุดหรือแสดงสินค้าและหมวดหมู่สินค้ายอดนิยมในร้านคุณด้วยแบนเนอร์ที่ลูกค้าสามารถเลื่อนดูได้"
        },
        {
            title_th: "หมวดหมู่",
            title_eng: "Categories",
            description: "จัดเรียงหมวดหมู่รายการสินค้าเพื่อแนะนำสินค้าให้กับลูกค้าสามารถเลื่อนดูได้"
        },
    ]

    useEffect(() => {
        // ตรวจสอบเมื่อ currentMode เปลี่ยนแปลง
        if (currentMode === 'categories') {
            setInfoDescriptionData(infoData[1]);
        } else {
            setInfoDescriptionData(infoData[0]);
        }
      }, [currentMode]);

    const addImagePlaceholder = () => {
        if (imagePlaceholders.length < 4) {
            setImagePlaceholders(prevState => [...prevState, prevState.length + 1]);
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                html: '<div class="text-center" style="padding: 0em;">สามารถเพิ่มรูปภาพ/วิดีโอ ได้สูงสุด 4 รูปเท่านั้น</div>',
                //textColor:'#ff5733',
                confirmButtonColor: '#00ab55',
            });
        }
    };

    const changeMode = (typeMode: string) => {
        setCurrentMode(typeMode)
    }

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
                            <p className='text-lg font-nunito font-extrabold mr-2'>{infoDescriptionData?.title_th}</p>
                            <p className='text-lg font-nunito font-bold'>{infoDescriptionData?.title_eng}</p>
                        </div>
                        <button className="flex" onClick={() => setCurrentMode("")}>
                            <IconX className="w-5 h-5" />
                        </button>
                    </div>
                    <div className='flex font-nunito text-sm text-[#8d8d8f] break-words mt-4 mb-2'>
                        {infoDescriptionData?.description}
                    </div>
                    <div className='flex w-full h-[3px] bg-[#8d8d8f] mt-2' />
                    <div className='flex flex-col w-full px-4 mt-4'>
                        <div className="flex font-nunito font-bold">
                            อัปโหลดรูปภาพ/วิดีโอ
                        </div>
                        <div className='flex font-nunito text-sm text-[#8d8d8f] break-words my-2'>
                            รูปภาพ:
                        </div>
                        <div className='flex font-nunito text-sm text-[#8d8d8f] break-words mb-2'>
                            • ขนาดไฟล์: ไม่เกิน 2 MB; ขนาดวิดีโอ: ไม่เกิน 2000x2000 px
                        </div>
                        <div className='flex font-nunito text-sm text-[#8d8d8f] break-words mb-3'>
                            • นามสกุลไฟล์: JPG, JPEG, PNG, GIF
                        </div>
                        <div className='flex font-nunito text-sm text-[#8d8d8f] break-words my-2'>
                            วิดีโอ (ไม่รองรับวิดีโอจาก  YouTube):
                        </div>
                        <div className='flex font-nunito text-sm text-[#8d8d8f] break-words mb-2'>
                            • ขนาดไฟล์: ไม่เกิน 30 MB; ขนาดวิดีโอ: ไม่เกิน 1280x1280 px
                        </div>
                        <div className='flex font-nunito text-sm text-[#8d8d8f] break-words mb-2'>
                            • ระยะเวลา: 10-60 วินาที
                        </div>
                        <div className='flex font-nunito text-sm text-[#8d8d8f] break-words mb-2'>
                            • นามสกุลไฟล์: MP4
                        </div>
                    </div>
                    <div className='flex-col'>
                        {imagePlaceholders.map(index => (
                            <ImagePlaceholder
                                key={index}
                                index={index-1}
                                imageArray={imageArray}
                                imagePlaceholders={imagePlaceholders}
                                setImageArray={setImageArray}
                                onDelete={() => deleteImagePlaceholder(index)} // ส่งฟังก์ชัน deleteImagePlaceholder ไปยัง ImagePlaceholder
                            />
                        ))}
                    </div>
                    <div className="flex justify-center items-center h-full">
                        <div className="flex flex-row border-dashed border-[3px] border-[#4361EE] p-4 w-full rounded-lg justify-center"
                            onClick={addImagePlaceholder}
                            role="button">
                            <IconPlus className='mt-[3px] text-[#4361EE]' />
                            <span className="font-notosans text-lg text-[#4361EE] ml-2">เพิ่มรูปภาพ/วิดีโอ ({imagePlaceholders.length}/4)</span>
                        </div>
                    </div>
                </div>




            </PerfectScrollbar>
        </>
    )
}

export default BannerPanel;