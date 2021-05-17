
import React, {useState} from 'react';



const Button = ({handleClick, text}) => {
    return (
            <button onClick={handleClick}> {text} </button>
    );
};


const StatisticLine = (props) => {
    return (

        <tr>
            <td>{props.text} {props.value}</td>
        </tr>

    );
};


const Statistics = ({everything}) => {
    return (
        <table>
            <tbody>
            <StatisticLine text={'good'} value={everything.good}/>
            <StatisticLine text={'neutral'} value={everything.neutral}/>
            <StatisticLine text={'bad'} value={everything.bad}/>
            <StatisticLine text={'all'} value={everything.all}/>
            <StatisticLine text={'average'} value={everything.addition / everything.all}/>
            <StatisticLine text={'positive'} value={`${(everything.good / everything.all)*100}%`}/>
            </tbody>
        </table>
    );
};



const App = () => {
    const [everything, setEverything] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
        all: 0,
        addition: 0,
    });


    const handleGoodClick = () => {
      setEverything({
          ...everything,
          good: everything.good+1,
          addition: everything.addition+1,
          all: everything.all+1
      });
      console.log('Everything here', everything);
    };
    const handleBadClick = () => {
        setEverything({
            ...everything,
            bad: everything.bad+1,
            addition: everything.addition-1,
            all: everything.all+1,
        })
    };
    const handleNeutralClick = () => {
        setEverything({
            ...everything,
            neutral: everything.neutral+1,
            all: everything.all+1,
        })
    };


  return (
    <div>
      <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text={'Good'}/>
        <Button handleClick={handleNeutralClick} text={'Neutral'}/>
        <Button handleClick={handleBadClick} text={'Bad'}/>
        {everything.all !== 0 ?
        <Statistics everything={everything}/>
        : <p> No feedback given </p>
        }
    </div>
  );
};

export default App;
