import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

export default useApi = (apiFunc, getReducerState) => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    let data;
    if (getReducerState) {
        data = useSelector(getReducerState);
    }

    const Request = async (...args) => {
        setLoading(true);
        await dispatch(apiFunc(...args));
        setLoading(false);
    }

    return { Request, loading, data }

}