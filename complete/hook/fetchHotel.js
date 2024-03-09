import { useState, useEffect } from "react";
import axios from "axios";

const fetchHotels = (places) => {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)


    const fetchData = async () => {
        setIsLoading(true)

        try {
            if (places === 1) {
                const response = await axios.get('https://ct-be.onrender.com/api/hotels/byCountry/65eb0981925564822e5bf1f9?limit=3');
                setHotels(response.data.hotels)
            } else {
                const response = await axios.get('https://ct-be.onrender.com/api/hotels/byCountry/64c62bfc65af9f8c969a8d04');
                setHotels(response.data.hotels)
            }

            setIsLoading(false)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }


    return { hotels, isLoading, error, refetch }
}

export default fetchHotels