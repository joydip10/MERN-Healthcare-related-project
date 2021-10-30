import { useContext } from 'react';
import { context } from './../AuthProvider/AuthProvider';


const GetAuth = () => {
    return useContext(context);
};

export default GetAuth;