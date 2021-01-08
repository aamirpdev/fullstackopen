import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(6));

  const votesCount = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const handleClick = () => {
    return setSelected(Math.floor(Math.random() * 6));
  };
  const findWinner = () => votes.indexOf(Math.max(...votes));

  return (
    <div>
      <Header text='Anecdote of the day' />
      <div>{props.anecdotes[selected]} </div>
      <div>has {votes[selected]} votes </div>
      <Button onClick={votesCount} text='votes' />
      <Button onClick={handleClick} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      <div>{props.anecdotes[findWinner()]}</div>
      <div>has {votes[findWinner()]} votes</div>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
