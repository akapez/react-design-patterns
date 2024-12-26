import React, { useState, useEffect, Fragment } from 'react';
import axios from "axios";

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
    const [data, setData] = useState(null);


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`api/${resourceUrl}`);
                setData(response.data);

            } catch (error) {
                console.error(error);
            }
        })();
    }, [resourceUrl]);

    return (
        <Fragment>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: data });
                }

                return child;
            })}
        </Fragment>
    );
};

export default ResourceLoader;