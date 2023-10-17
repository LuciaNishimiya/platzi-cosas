import { useState, useEffect } from "react";

function useLocalStorage({ itemName, initialValue }) {
    const [loadingStatus, setLoadingStatus] = useState("Loading");

    const [item, setItem] = useState(initialValue);
    useEffect(() => {

        try {
            setTimeout(() => {


                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;

                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem)
                }
                setLoadingStatus("Ready")
            }, 2000);
        } catch (error) {
            setLoadingStatus("Error")
        }

    }, [])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return { item, loadingStatus, saveItem, };
}



export { useLocalStorage }