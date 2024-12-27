import { useResource } from "./useResource";

const UserInfo = ({ userId }) => {
    const currentUser = useResource(`users/${userId}`);
    const { name, age, hairColor, hobbies } = currentUser || {};
    console.log(currentUser);
    return currentUser ? (
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    ) : <p>Loading...</p>;
};

export default UserInfo;