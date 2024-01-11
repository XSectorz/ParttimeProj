
import IconX from '../../components/Icon/IconX';

const BannerPanel = () => {
    return (
        <>
            <div className="flex flex-col w-full bg-[#FFFFFF]">
                <div className='flex flex-col w-full px-4'>
                    <div className="flex flex-row justify-between w-full mt-6">
                        <div className="flex font-nunito font-bold items-center justify-center ">
                            แบนเนอร์ Carousel
                        </div>
                        <button className="flex">
                            <IconX className="w-5 h-5"/>
                        </button>
                    </div>
                    <div className='flex font-nunito text-sm text-[#8d8d8f] break-words mt-4'>
                        แนะนำโปรโมชั่นที่ดีที่สุดหรือแสดงสินค้าและหมวดหมู่สินค้ายอดนิยมในร้านคุณด้วยแบนเนอร์ที่ลูกค้าสามารถเลื่อนดูได้
                    </div>
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
            </div>
            
        </>
    )
}

export default BannerPanel;