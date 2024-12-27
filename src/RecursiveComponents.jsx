import { Fragment } from "react";

const isObject = x => typeof x === 'object' && x !== null;

const RecursiveComponents = ({ data }) => {
    if (!isObject(data)) {
        return <li>{data}</li>;
    }

    const pairs = Object.entries(data);

    return (
        <Fragment>
            {pairs.map(([key, value]) => (
                <li key={key}>
                    <strong>{key}</strong>
                    <ul>
                        <RecursiveComponents data={value} />
                    </ul>
                </li>
            ))}
        </Fragment>
    );
};

export default RecursiveComponents;