import React, { useState } from 'react';
import ArrayMethodGame from '../ArrayMethodGame';
import 'tailwindcss/tailwind.css';


const Game = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const [startingArray, setStartingArray] = useState([1, 3, 4, 5]);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState(null);

  const handleGuess = () => {
    const game = new ArrayMethodGame(questionCount, startingArray);
    const methodName = game[`method${questionCount}`]();

    if (methodName === guess) {
      setResult('Correct!');
    } else {
      setResult('Incorrect!');
    }
  };

  const handleStartingArrayChange = (event) => {
    const inputArray = event.target.value
      .split(',')
      .map((item) => Number(item.trim()));
    setStartingArray(inputArray);
  };

  const handleMethodButtonClick = (methodName) => {
    setGuess(methodName);
  };

  const renderMethodButtons = () => {
    const methodNames = [
      'map',
      'filter',
      'reduce',
      'some',
      'every',
      'find',
      'findIndex',
      'slice',
      'concat',
      'sort'
    ];

    return methodNames.map((methodName, index) => (
      <button
        key={index}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 mt-2"
        onClick={() => handleMethodButtonClick(methodName)}
      >
        {methodName}
      </button>
    ));
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">GUESS that JS Method</h1>
      <p className="mb-2">Question: {questionCount}</p>
      <p className="mb-4">
        Starting Array:{' '}
        <input
          type="text"
          value={startingArray.join(', ')}
          onChange={handleStartingArrayChange}
          className="border border-gray-400 px-2 py-1"
        />
      </p>
      <label htmlFor="guess" className="mr-2">
        Guess the method:
      </label>
      <input
        type="text"
        id="guess"
        className="border border-gray-400 px-2 py-1"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2"
        onClick={handleGuess}
      >
        Check
      </button>
      {result && <p className="mt-4">{result}</p>}

      <div className="mt-6">
        <h2 className="text-lg font-bold">Array Methods:</h2>
        <div className="flex flex-wrap mt-2">
          {renderMethodButtons()}
        </div>
      </div>
    </div>
  );
};

export default Game;
