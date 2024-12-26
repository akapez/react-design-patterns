import React, { useState, useEffect, Fragment } from 'react';


const DataSource = ({ getDataFunc = () => { }, resourceName, children }) => {
    const [data, setData] = useState(null);


    useEffect(() => {
        (async () => {
            try {
                const response = await getDataFunc();
                setData(response);

            } catch (error) {
                console.error(error);
            }
        })();
    }, [getDataFunc]);

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

export default DataSource;