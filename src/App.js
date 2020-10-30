import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import data from './Apprentice_TandemFor400_Data.json';

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [userSelected, setUserSelected] = useState(false);

  useEffect(() => {
    setQuestions(data);
  }, []);

  const handleAnswer = (answer) => {
    //setQuestionIndex(questionIndex + 1);
    
    //we don't want user to be able to choose more than one choice for a question
    
    if(!userSelected) {
      if(answer === questions[questionIndex].correct) {
        setScore(score + 1);
      }
    }
    //user made a choice, now answer is locked in and we can see the correct/incorrect answers
    setUserSelected(true);

  }

  //need to wait for the questions to load in
  return questions.length > 0 ? (
    <div className='container'>
      {
        questionIndex >= questions.length ? (
          <h1 className='text-3xl text-white font-bold'>
            Your score is {score}
          </h1>
        ) :(
          <Question questionData={data[questionIndex]} handleAnswer={handleAnswer} userSelected={userSelected} />
        )}
    </div>
  ): (
    <h2 className='text-2xl tetx-white font-bold'>Loading Questions...</h2>
  );
}

export default App;
