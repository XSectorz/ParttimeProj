
import IconX from '../../components/Icon/IconX';

const BannerPanel = () => {
    return (
        <>
            <div className="flex flex-col px-4 w-full bg-[#FFFFFF]">
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
        </>
    )
}

export default BannerPanel;