import React from 'react';

const Total = ({parts}) => {
        console.log('Total', parts)
        const add = (a, b) => a + b;
        const addition = parts.map(part => part.exercises).reduce(add);

    return (
        <>
            <p>Number of exercises {addition}</p>
        </>
    );
};

export default Total;