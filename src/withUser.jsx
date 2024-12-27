import { useState, useEffect } from 'react';
import axios from 'axios';

export const withUser = (WrappedComponent, userId) => {
    return (props) => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                try {
                    const response = await axios.get(`api/users/${userId}`);
                    setUser(response.data);
                } catch (e) {
                    console.error(e);
                }
            })();
        }, []);


        return <WrappedComponent {...props} user={user} />;

    };
};