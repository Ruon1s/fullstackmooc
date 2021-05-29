import React from 'react';
import Part from './Part';

const Content = ({course}) => {
    const parts = course.parts;
    console.log('props for Content', course)
    return (
        <>
        {parts.map(part => <Part key={part.id} parts={part}/>)}
        </>
    );
};

export default Content;