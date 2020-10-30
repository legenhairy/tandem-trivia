import React from 'react';
import Answer from './Answer';

//before, i would have to write data[questionIndex].correct, now i can just write correct
//since i can dereference object props, every question component should just take in the object
const Question = ({ handleAnswer, questionData: { question, correct, incorrect }, }) => {
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
          <Answer className={correct === shuffledAnswers[0] ? 'bg-purple-300' : ''} 
            handleAnswer={() => handleAnswer(shuffledAnswers[0])} 
            answer={shuffledAnswers[0]} />
          <Answer className={correct === shuffledAnswers[1] ? 'bg-purple-300' : ''}
            handleAnswer={() => handleAnswer(shuffledAnswers[1])} 
            answer={shuffledAnswers[1]} />
          <Answer className={correct === shuffledAnswers[2] ? 'bg-purple-300' : ''} 
            handleAnswer={() => handleAnswer(shuffledAnswers[2])} 
            answer={shuffledAnswers[2]} />
          <Answer className={correct === shuffledAnswers[3] ? 'bg-purple-300' : ''}
            handleAnswer={() => handleAnswer(shuffledAnswers[3])} 
            answer={shuffledAnswers[3]} />
        </div>
      </div>
    );
};

export default Question;

