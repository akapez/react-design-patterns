import { Fragment } from "react";


const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
    return (
        <Fragment>
            {items.map((item, index) => (<ItemComponent key={index} {...{ [resourceName]: item }} />))}
        </Fragment>
    );
};

export default RegularList;