import React from 'react';

const Part = ({parts}) => {
    console.log('props for Part', parts);
    return (
        <p>
            {parts.name} {parts.exercises}
        </p>
    );
};

export default Part;