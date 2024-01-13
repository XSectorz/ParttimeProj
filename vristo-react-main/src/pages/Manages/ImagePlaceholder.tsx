import { useState, useRef, useEffect } from 'react';
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
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setCategoriesPhoto, setCategoriesTitle, setUploadedPhoto } from './photoSlice';
import Index from '../Index';
import { number } from 'yup';
import IconEdit from '../../components/Icon/IconEdit';

interface ImagePlaceholderProps {
    onDelete: () => void;
    currentIndex: number;
    imageArray: string[][]
    linkArray: string[][]
    setImageArray: (mode: string[][]) => void;
    setLinkArray: (mode: string[][]) => void;
    currentModeType: string
}

interface InfoDataItem {
    description: string
    index: number
    maxSize: number
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ currentIndex, onDelete, imageArray, setImageArray,linkArray,setLinkArray,currentModeType }) => {

    const infoData = [
        {
            description: "เพิ่มลิงค์ (ไม่จำเป็น)",
            index: 0,
            maxSize: 4
        },
        {
            description: "ตั้งชื่อหมวดหมู่",
            index: 1,
            maxSize: 14
        },
    ]

    const [showDropdown, setShowDropdown] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const fileInputVideoRef = useRef<HTMLInputElement | null>(null);
    const [descriptionData,setDescriptionData] = useState<InfoDataItem>(infoData[0]);

    const dispatch = useDispatch();
    const onEdit = () => {
        setShowDropdown(!showDropdown);
    };


    useEffect(() => {
        // ตรวจสอบเมื่อ currentMode เปลี่ยนแปลง
        if (currentModeType === 'categories') {
            setDescriptionData(infoData[1]);
        } else {
            setDescriptionData(infoData[0]);
        }
      }, [currentModeType]);

    const onPencil = () => {
        Swal.fire({
            title: 'ยืนยันการลบ',
            html: '<div class="text-center" style="padding: 0em;">คุณแน่ใจที่จะลบรูปนี้ออกใช่หรือไม่?</div>',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00ab55',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ยืนยัน',
            cancelButtonText: 'ยกเลิก',
            customClass: {
                title: 'text-center'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                //console.log("DELETE");
                //console.log(currentIndex)
                
                var tempImgArray = imageArray.filter((_, data) => data !== currentIndex);
                //console.log(tempImgArray)
                setImageArray(tempImgArray)
                onDelete();
            }
        });
    }

    useEffect(() => {
        dispatch(setUploadedPhoto(imageArray[0].filter((img) => (img !== '' && img !== 'test'))));
    }, [imageArray[0]]);

    useEffect(() => {
        //console.log("Update photo")
        dispatch(setCategoriesPhoto(imageArray[1]))
    }, [imageArray[1]]);

    useEffect(() => {
        dispatch(setCategoriesTitle(linkArray[1]))
    }, [linkArray[1]]);


    const handleImageUp = () => {
        if(descriptionData) {
            if(currentIndex >= 1) {
                var tempImgArray = imageArray.map(row => [...row]);
                var tempLinkArray = linkArray.map(row => [...row]);
                const tempImg = tempImgArray[descriptionData.index][currentIndex] 
                const tempLink = tempLinkArray[descriptionData.index][currentIndex]
                tempImgArray[descriptionData.index][currentIndex] = tempImgArray[descriptionData.index][currentIndex-1]
                tempLinkArray[descriptionData.index][currentIndex] = tempLinkArray[descriptionData.index][currentIndex-1]
                tempImgArray[descriptionData.index][currentIndex-1] = tempImg
                tempLinkArray[descriptionData.index][currentIndex-1] = tempLink
                setImageArray(tempImgArray)
                setLinkArray(tempLinkArray)
            }
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(descriptionData) {
            var tempLinkArray = linkArray.map(row => [...row]);
            tempLinkArray[descriptionData.index][currentIndex] = event.target.value;
            setLinkArray(tempLinkArray)
            dispatch(setCategoriesTitle(tempLinkArray[descriptionData.index]))
            console.log("Change!!!")
            console.log(tempLinkArray[descriptionData.index])
        }
      };

    const handleImageDown = () => {
        //console.log(imageArray.length)
        //console.log(imageArray)

        //console.log(imagePlaceholders)

        if(descriptionData) {
            if(imageArray[descriptionData.index].length > 1) {
                if(imageArray[descriptionData.index].length !== currentIndex+1) {
                    if(currentIndex < descriptionData.maxSize-1) {
                        var tempImgArray = imageArray.map(row => [...row]);
                        var tempLinkArray = linkArray.map(row => [...row]);
                        const tempImg = tempImgArray[descriptionData.index][currentIndex] 
                        const tempLink = tempLinkArray[descriptionData.index][currentIndex]
                        tempImgArray[descriptionData.index][currentIndex] = tempImgArray[descriptionData.index][currentIndex+1]
                        tempLinkArray[descriptionData.index][currentIndex] = tempLinkArray[descriptionData.index][currentIndex+1]
                        tempLinkArray[descriptionData.index][currentIndex+1] = tempLink
                        tempImgArray[descriptionData.index][currentIndex+1] = tempImg
                        setImageArray(tempImgArray)
                        setLinkArray(tempLinkArray)
                    }
                }
            }
        }
    }

  // var type = reader.result as string
  //console.log(type.split(';')[0])

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const image = new Image();
                image.src = reader.result as string;
                const width = image.width;
                const height = image.height;
                const sizeInBytes = file.size;
                const sizeInKb = sizeInBytes / 1024;
                //console.log(`Width: ${width}px`);
                //console.log(`Height: ${height}px`);
                console.log(`Size: ${sizeInKb} KB`);

                if(sizeInKb > 2 * 1024 * 1024) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        html: '<div class="text-center" style="padding-left: 2em;">ขนาดไฟล์ไม่ตรงตามเงื่อนไข</div>',
                        //textColor:'#ff5733',
                        confirmButtonColor: '#00ab55',
                    });
                    return
                }

                if(descriptionData)  {
                    //console.log("Uploaded")
                    const newArray = imageArray.map(row => [...row]);
                    //console.log(newArray)
                    newArray[descriptionData.index][currentIndex] = reader.result as string;
                    setImageArray(newArray);
                    if(descriptionData.index === 0) {
                        dispatch(setUploadedPhoto(newArray[0]));
                    }
                }
            };
            
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="bg-[#F6F6F6] border border-8d8d8f w-full p-4 shadow rounded-lg mb-4 flex">
                <div className="flex flex-col justify-between mr-4">
                    <button className="text-gray-600 hover:bg-gray-300 rounded-full p-2 mb-2"
                    onClick={handleImageUp}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>

                    </button>
                    <button className="text-gray-600 hover:bg-gray-300 rounded-full p-2" onClick={handleImageDown}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>

                    </button>
                </div>
                <div className="flex-grow">
                    <div className="flex rounded-lg items-center justify-between mb-3 border border-8d8d8f">
                    <div className="w-full h-48 bg-[#FFFFFF] rounded-md relative" style={{ backgroundImage: 
                        ( descriptionData && imageArray[descriptionData.index][currentIndex] !== "test") ?  
                        `url(${imageArray[descriptionData.index][currentIndex]})` : 
                        'url(https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png)',
                        
                        backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className="flex bg-[#808080] opacity-75 absolute bottom-0 left-0 right-0 justify-around px-2">
                                <div className='flex justify-center w-1/4 py-2' onClick={onPencil} style={{ cursor: 'pointer' }}>
                                    <button className="text-gray-600">
                                        <IconPencil className='text-white' />
                                    </button>
                                </div>
                                <div className='flex border-l-2 justify-center w-1/4 cursor-pointer' onClick={() => fileInputRef.current?.click()}>
                                    <input
                                        type="file"
                                        accept="image/jpeg, image/png, image/gif"
                                        onChange={handleImageUpload}
                                        style={{ display: 'none' }}
                                        ref={fileInputRef}
                                    />
                                    <div className="text-gray-600">
                                        <IconLaptop className='mt-[6.8px] text-white' />
                                    </div>
                                </div>
                                <div className='flex border-l-2 justify-center w-1/4' onClick={() => fileInputRef.current?.click()}>
                                    <input
                                        type="file"
                                        accept="image/jpeg, image/png, image/gif"
                                        onChange={handleImageUpload}
                                        style={{ display: 'none' }}
                                        ref={fileInputRef}
                                    />
                                    <button className="text-gray-600">
                                        <IconFolder className='text-white' />
                                    </button>
                                </div>

                                <div className='flex border-l-2 justify-center w-1/4'  onClick={() => fileInputVideoRef.current?.click()}>
                                    <input
                                        type="file"
                                        accept="video/mp4"
                                        onChange={handleImageUpload}
                                        style={{ display: 'none' }}
                                        ref={fileInputVideoRef}
                                    />
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
                                placeholder={descriptionData?.description}
                                className="w-full p-2 outline-none"
                                value={linkArray[descriptionData.index][currentIndex]}
                                onChange={handleChange}
                            />
                            {
                                (currentModeType==="categories") ? (<IconEdit/>) : (<IconLink />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImagePlaceholder;