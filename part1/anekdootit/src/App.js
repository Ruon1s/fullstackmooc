import React, {useState} from 'react';

const AnecdoteOfDay = ({ratings, anecdotes}) => {
let sum = 0;

for(let i = 0; i<ratings.length; i++){
sum += ratings[i];
}

const maxNumber = Math.max.apply(Math, ratings);
console.log('maxnumber', maxNumber);
const index = ratings.indexOf(maxNumber);
console.log('indexof', index);

if(sum !== 0) {
    return(
<div>
    <div>
        <h1>Anecdote with most votes</h1>
    </div>
    <div>
        <p>{anecdotes[index]}</p>
    </div>
</div>
    );
}
else {
    return null
}



};


const App = (props) => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const [selected, setSelected] = useState(getRandomInt(anecdotes.length));

  //state at first is an array of 0:s at length of anecdotes array
  const [ratings, setRatings] = useState(new Array(anecdotes.length).fill(0));

  console.log(ratings);

  const handleRandomClick = () => {
    //gets random integer from 0 to anecdotes.length
    setSelected(getRandomInt(anecdotes.length));
  };

  const handleVoteClick = () => {
    const copy = [...ratings];
    //sets +1 value to the right item in the array
    copy[selected] += 1;
    setRatings(copy);

  };

    return (
        <div>
          {anecdotes[selected]}
          <div>
          has {ratings[selected]} votes
          </div>
          <div>
                <button onClick={handleRandomClick}>next anecdote</button>
                <button onClick={handleVoteClick}>vote</button>
          </div>
            <AnecdoteOfDay ratings={ratings} anecdotes={anecdotes}/>
        </div>
    );
};


export default App;
