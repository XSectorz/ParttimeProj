

const Publish = () => {
    return (
        <div className="flex h-full w-full bg-[#FFFFFF] py-2">
            <div className="flex mx-2 flex-row w-full justify-between">
                <div className="flex" style={{
                    width: '28%'
                }}>
                    <button className="bg-transparent hover:bg-blue-500 text-black hover:text-white py-2 px-4 border border-[#E5E5E5] hover:border-transparent rounded duration-500 w-full">
                        ดูตัวอย่าง
                    </button>
                </div>
                <div className="flex" style={{
                    width: '28%'
                }}>
                    <button className="bg-transparent hover:bg-blue-500 text-black hover:text-white py-2 px-4 border border-[#E5E5E5] hover:border-transparent rounded duration-500 w-full">
                        บันทึกฉบับร่าง
                    </button>
                </div>
                <div className="flex" style={{
                    width: '28%'
                }}>
                    <button className="bg-[#4361EE] hover:bg-white hover:text-blue-700 text-white py-2 px-4 border hover:border-blue-500 rounded duration-500 w-full font-nunito">
                        เผยแผ่ทันที
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Publish;
