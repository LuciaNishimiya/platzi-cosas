import { useEffect, useState, useMemo } from 'react';

function Api(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();

    }, []);

    const apiData = useMemo(() => ({ data, isLoading, error }), [data, isLoading, error]);

    return apiData;
}

export default Api;
