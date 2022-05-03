import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (method, endpoint, data, { successCode, successMessage, errorMessage }) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    const url = import.meta.env.VITE_BACKEND_ENDPOINT.concat(endpoint);
    console.log('url', url);

    useEffect(() => {
        console.log('axios being called');

        axios({ method, url, data/*, withCredentials: true*/ })
            .then((response) => {
                console.log('response', response);

                if (response.status !== successCode) {
                    throw new Error(errorMessage);
                }
                console.log(successMessage);

                setState({
                    loading: false,
                    error: null,
                    data: response.data
                })
            })
            .catch((err) => {
                console.log(errorMessage, err);
            });
    }, [url]);

    return state;
}

export default useAxios;