import React from 'react';

const Person = ({person, del}) => {

    return (
        <div>
        <p>{person.name} {person.number} <button onClick={del}>delete</button></p>
        </div>
    );

};

export default Person;