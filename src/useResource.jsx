import { useState, useEffect } from "react";
import axios from "axios";

export function useResource(resourceUrl) {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/api/${resourceUrl}`);
                setResource(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [resourceUrl]);

    return resource;
}
