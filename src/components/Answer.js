import React from 'react';

const Answer = ({ handleAnswer, answer, className }) => (
    <button className={`bg-white p-4 mt-8 w-full text-purple-800 font-semibold rounded shadow ${className}`} onClick={handleAnswer}>
        {answer}
    </button>
);

export default Answer;