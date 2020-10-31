import React from 'react';
import Answer from './Answer';

//before, i would have to write data[questionIndex].correct, now i can just write correct
//since i can dereference object props, every question component should just take in the object
const Question = ({ userSelected, handleAnswer, getNextQuestion, questionData: { question, correct, incorrect }, }) => {
  //shuffle the order of the answers so that i wont have the same order every time
  const shuffledAnswers = [correct, ...incorrect].sort(() => Math.random() - 0.5);  
  return (
      <div>
          <div className='bg-white text-black p-10 rounded-lg shadow-md'>
          <h2 className='text-2xl'>
            {question}
          </h2>
        </div>
        <div className='flex flex-col mt-8'>
          <Answer className={userSelected 
            ? shuffledAnswers[0] === correct 
              ? 'bg-green-400': 'bg-red-400'
            : 'bg-white'} 
            handleAnswer={() => handleAnswer(shuffledAnswers[0])} 
            answer={shuffledAnswers[0]} />
          <Answer className={userSelected 
            ? shuffledAnswers[1] === correct 
              ? 'bg-green-400': 'bg-red-400'
            : 'bg-white'}
            handleAnswer={() => handleAnswer(shuffledAnswers[1])} 
            answer={shuffledAnswers[1]} />
          <Answer className={userSelected 
            ? shuffledAnswers[2] === correct 
              ? 'bg-green-400': 'bg-red-400'
            : 'bg-white'} 
            handleAnswer={() => handleAnswer(shuffledAnswers[2])} 
            answer={shuffledAnswers[2]} />
          <Answer className={userSelected 
            ? shuffledAnswers[3] === correct 
              ? 'bg-green-400': 'bg-red-400'
            : 'bg-white'}
            handleAnswer={() => handleAnswer(shuffledAnswers[3])} 
            answer={shuffledAnswers[3]} />
          {userSelected && <button onClick={getNextQuestion} className='bg-purple-500 text-black p-4 mt-6 
            font-semibold rounded'>Next Question
            </button>
          }
        </div>
      </div>
    );
};

export default Question;

