import { useEffect } from 'react';

function Api({ url, setData }) {
    useEffect(() => {
        setData({ data: [], isLoading: true, error: false });
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData({ data, isLoading: false, error: false });
            } catch (error) {
                setData({ isLoading: false, error });
            }
        };
        fetchData();

    }, [url]);
}

export default Api;
