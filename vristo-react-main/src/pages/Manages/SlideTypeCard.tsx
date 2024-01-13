
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

interface slideTypeInterface {
    title: string,
    img: string | undefined,
    index: number
}

const SlideTypeCard: React.FC<slideTypeInterface> = ({ title,img,index }) => {

    const categoriesTitle = useSelector((state: IRootState) => state.photo.categoriesTitle);

    //console.log(`Index : ${index} value : ${categoriesTitle?.[index]}`)

    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex w-full bg-[#363a44] rounded-lg" style={{ height: "80%"}}>
                {img && img !== 'test' && <img src={img} alt={title} className="w-full h-full object-cover rounded-lg"/>}
            </div>
            <div className="flex justify-center items-center w-full mt-1" style={{ height: "20%"}}>
                <div className='flex truncate ...'>
                    <p className="flex truncate ...">
                            {(categoriesTitle && categoriesTitle?.[index] !== '' && categoriesTitle?.[index]) ? (
                                <div className='truncate'>{categoriesTitle?.[index]}</div>
                            ) : (
                                <div className='truncate'>{title}</div>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
} 

export default SlideTypeCard;