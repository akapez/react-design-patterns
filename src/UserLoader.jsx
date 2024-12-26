import React, { useState, useEffect, Fragment } from 'react';
import axios from "axios";

const UserLoader = ({ userId, children }) => {
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`api/users/${userId}`);

                const user = response.data;
                console.log(user);
                setCurrentUser(user);

            } catch (error) {
                console.error(error);
            }
        })();
    }, [userId]);

    return (
        <Fragment>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { currentUser });
                }

                return child;
            })}
        </Fragment>
    );
};

export default UserLoader;