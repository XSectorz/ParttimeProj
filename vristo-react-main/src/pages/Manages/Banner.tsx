import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';

const ManageBanner = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Banner Manage'));
    });

    return (
        <div>
            Hello World 
        </div>
    )

}

export default ManageBanner;