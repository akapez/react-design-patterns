import { useState, useEffect } from "react";

export function useDataSource(getResourceFunc) {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getResourceFunc();
                setResource(result);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return resource;
}
