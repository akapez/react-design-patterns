import { useState, useEffect } from 'react';
import axios from 'axios';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);


export const withEditableResource = (WrappedComponent, resourcesPath, resourcesName) => {
    return (props) => {
        const [originalData, setOriginalData] = useState(null);
        const [data, setData] = useState(null);

        useEffect(() => {
            (async () => {
                try {
                    const response = await axios.get(`api/${resourcesPath}`);
                    setOriginalData(response.data);
                    setData(response.data);
                } catch (e) {
                    console.error(e);
                }
            })();
        }, []);

        const onChange = (updatedUser) => {
            setData({ ...data, ...updatedUser });
        };

        const onSave = async () => {
            try {
                const response = await axios.post(`api/${resourcesPath}`, { [resourcesName]: data });
                setOriginalData(response.data);
                setData(response.data);
            } catch (e) {
                console.error(e);
            }
        };

        const onReset = () => {
            setData(originalData);
        };

        const resourceProps = {
            [resourcesName]: data,
            [`onChange${capitalize(resourcesName)}`]: onChange,
            [`onSave${capitalize(resourcesName)}`]: onSave,
            [`onReset${capitalize(resourcesName)}`]: onReset,
        };

        return <WrappedComponent
            {...props}
            {...resourceProps} />;
    };
};