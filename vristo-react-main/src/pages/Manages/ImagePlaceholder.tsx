import { useState } from 'react';
import IconArrowBackward from '../../components/Icon/IconArrowBackward';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import IconFolder from '../../components/Icon/IconFolder';
import IconLaptop from '../../components/Icon/IconLaptop';
import IconLink from '../../components/Icon/IconLink';
import IconPencil from '../../components/Icon/IconPencil';
import IconVideo from '../../components/Icon/IconVideo';
import IconX from '../../components/Icon/IconX';
import PerfectScrollbar from 'react-perfect-scrollbar';
import IconTrash from '../../components/Icon/IconTrash';

interface ImagePlaceholderProps {
    onDelete: () => void;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ onDelete }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const onEdit = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <div className="bg-[#F6F6F6] border border-8d8d8f w-full p-4 shadow rounded-lg mb-4 flex">
                <div className="flex flex-col justify-between mr-4">
                    <button className="text-gray-600 hover:bg-gray-300 rounded-full p-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>

                    </button>
                    <button className="text-gray-600 hover:bg-gray-300 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>

                    </button>
                </div>
                <div className="flex-grow">
                    <div className="flex rounded-lg items-center justify-between mb-3 border border-8d8d8f">
                        <div className="w-full h-48 bg-[#FFFFFF] rounded-md relative" style={{ backgroundImage: "url('https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className="flex bg-[#808080] opacity-75 absolute bottom-0 left-0 right-0 justify-around px-2">

                                <div className='flex justify-center w-1/4 py-2'>
                                    <button className="text-gray-600">
                                        <IconPencil className='text-white' />
                                    </button>
                                </div>
                                <div className='flex border-l-2 justify-center w-1/4'>
                                    <button className="text-gray-600 ">
                                        <IconLaptop className='text-white' />
                                    </button>
                                </div>
                                <div className='flex border-l-2 justify-center w-1/4'>
                                    <button className="text-gray-600">
                                        <IconFolder className='text-white' />
                                    </button>
                                </div>

                                <div className='flex border-l-2 justify-center w-1/4'>
                                    <button className="text-gray-600">
                                        <IconVideo className='text-white' />
                                    </button>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 mt-[3px] p-2">
                                <button
                                    className="bg-[#808080] hover:bg-gray-800 opacity-75 rounded-md p-1 flex items-center"
                                    onClick={onEdit}
                                >
                                    <IconPencil className="text-white mr-1" />
                                    <span className="text-white">แก้ไข</span>
                                </button>

                                {showDropdown && (
                                    <div className="absolute top-0 right-0 mt-8 p-2">
                                        <button
                                            className="bg-[#FF0000] hover:bg-red-900 opacity-75 rounded-md p-1 flex items-center"
                                            onClick={onDelete}
                                        >
                                            <IconTrash className="text-white mr-1" />
                                            <span className="text-white">ลบ</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="bg-white rounded-lg p-2 w-full flex justify-between items-center border border-8d8d8f">
                            <input
                                type="text"
                                placeholder="เพิ่มลิงค์ (ไม่จำเป็น)"
                                className="w-full p-2 outline-none"
                            />
                            <button className="text-gray-600 hover:bg-gray-300 rounded-full p-2">
                                <IconLink />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImagePlaceholder;