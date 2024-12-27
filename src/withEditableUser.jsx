import { useState, useEffect } from 'react';
import axios from 'axios';


export const withEditableUser = (WrappedComponent, userId) => {
    return (props) => {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                try {
                    const response = await axios.get(`api/users/${userId}`);
                    setOriginalUser(response.data);
                    setUser(response.data);
                } catch (e) {
                    console.error(e);
                }
            })();
        }, []);

        const handleUpdateUser = (updatedUser) => {
            setUser({ ...user, ...updatedUser });
        };

        const onSaveUser = async () => {
            try {
                const response = await axios.post(`api/users/${userId}`, { user });
                setOriginalUser(response.data);
                setUser(response.data);
            } catch (e) {
                console.error(e);
            }
        };

        const onResetUser = () => {
            setUser(originalUser);
        };

        return <WrappedComponent
            {...props}
            user={user}
            updateUser={handleUpdateUser}
            onSaveUser={onSaveUser}
            onResetUser={onResetUser} />;
    };
};