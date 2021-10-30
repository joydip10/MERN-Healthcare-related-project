import { useEffect, useState } from 'react';

const useHooks = (url,specifier) => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(dt=>{
            setData(dt.filter(d=>d.job===specifier));
        });
    },[url,specifier])
    return [data,setData]
};

export default useHooks;