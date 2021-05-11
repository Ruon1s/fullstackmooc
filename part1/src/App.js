import React from 'react';


const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    );
};

const Content = (props) => {
    return (
        <>
            <Part partName={props.part1} exerciseName={props.exercises1}/>
            <Part partName={props.part2} exerciseName={props.exercises2}/>
            <Part partName={props.part3} exerciseName={props.exercises3}/>
        </>
    );
};

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </>
    );
};


const Part = (props) => {
    return (
        <p>
            {props.partName} {props.exerciseName}
        </p>
    );
};


const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div>
            <Header course={course}/>
            <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2}
                     exercises3={exercises3}/>
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        </div>
    );
};


export default App;
