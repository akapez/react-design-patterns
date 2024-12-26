import { useRef } from "react";


const UncontrolledForm = () => {
    const nameInputRef = useRef(null);
    const ageInputRef = useRef(null);
    const hairColorInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        const hairColor = hairColorInputRef.current.value;

        console.log({ name, age, hairColor });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" ref={nameInputRef} />
            <input type="number" name="age" placeholder="Age" ref={ageInputRef} />
            <input type="text" name="hairColor" placeholder="Hair Color" ref={hairColorInputRef} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UncontrolledForm

