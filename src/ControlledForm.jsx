import { useState, useEffect, Fragment } from "react";

const ControlledForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hairColor, setHairColor] = useState('');
    const [errors, setErrors] = useState({ show: false, message: '' });

    useEffect(() => {
        if (name.length < 2) {
            setErrors({ show: true, message: 'Name must be at least 2 characters long' });
        } else {
            setErrors({ show: false, message: '' });
        }
    }, [name]);

    return (
        <Fragment>
            {errors.show && <p>{errors.message}</p>}
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    name="hairColor"
                    placeholder="Hair Color"
                    value={hairColor}
                    onChange={(e) => setHairColor(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </Fragment>
    );
};

export default ControlledForm;