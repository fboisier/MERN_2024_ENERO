import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [url]);
    return { data, isLoading, error };

}

export default useAxios