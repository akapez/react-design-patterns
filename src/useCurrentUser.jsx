import { useState, useEffect } from "react";
import axios from "axios";

export function useCurrentUser() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/current-user");
                setCurrentUser(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return currentUser;
}

