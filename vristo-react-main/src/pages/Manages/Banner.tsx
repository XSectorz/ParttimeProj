import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import Publish from '../Components/Publish';
import BannerPanel from './BannerPanel';

const ManageBanner = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Banner Manage'));
    });

    return (
        <>
            <div className='flex flex-row w-full h-full'>
                <div className='flex flex-col w-3/5'>
                    <div className='flex font-nunito text-md'>
                        Banner / All Banner 
                    </div>
                </div>
                <div className='flex w-2/5 flex-col'>
                    <div className='flex w-full'>
                        <Publish />
                    </div>
                    <div className='flex w-full mt-2'>
                        <BannerPanel/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ManageBanner;