import { Fragment } from "react";

const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;
    return (
        <Fragment>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map((hobby, index) => (<li key={index}>{hobby}</li>))}
            </ul>
        </Fragment>
    );
};

export default LargePersonListItem;