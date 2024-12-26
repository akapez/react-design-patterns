import { Fragment } from "react";

const NumberList = ({ items, resourceName, itemComponent: ItemComponent }) => {
    return (
        <Fragment>

            {items.map((item, index) => (
                <Fragment>
                    <h3>{index + 1}</h3>
                    <ItemComponent key={index} {...{ [resourceName]: item }} />
                </Fragment>
            ))}
        </Fragment>
    );
};

export default NumberList;