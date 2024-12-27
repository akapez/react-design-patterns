import { useState, useEffect } from "react";
import axios from "axios";

export function useUser(userId) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/api/users/${userId}`);
                setCurrentUser(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [userId]);

    return currentUser;
}
