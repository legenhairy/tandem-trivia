import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import data from './Apprentice_TandemFor400_Data.json';

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(data);
  }, []);

  const handleAnswer = (answer) => {
    setQuestionIndex(questionIndex + 1);
    
    //add to the score
    if(answer === questions[questionIndex].correct) {
      setScore(score + 1);
    }
  }
  //need to wait for the questions to load in
  return questions.length > 0 ? (
    <div className='container'>
      <Question questionData={data[questionIndex]} handleAnswer={handleAnswer} />
    </div>
  ): (
    <h2 className='text-2xl tetx-white font-bold'>Loading Questions...</h2>
  );
}

export default App;
