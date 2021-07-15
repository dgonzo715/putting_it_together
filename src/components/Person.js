import React, {useState} from 'react';

const Person = (props) => {
const [age, setAge] = useState(props.age)
    return (
        <div>
            <h2>{ props.name }</h2>
            <p>Age: {age}</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ (event) => setAge(age + 1)}>
                Birthday Button 
            </button>
        </div>
    );
}

export default Person;