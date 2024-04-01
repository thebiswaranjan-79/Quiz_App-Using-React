import { useState } from 'react';

import './App.css'

function App() {

  const [currentQuestion,setCurrentQuestion] = useState(0);
 
  const quizQuestions = [
    {
      question:"What is the Complexity of Binary Search ? ",
      options: [
        {answer: 'O(n)', isCorrect : false},
        {answer: 'O(logn)', isCorrect : true},
        {answer: 'O(nlogn)', isCorrect : false},
        {answer: 'O(1)', isCorrect : false},
      ]

    },
    {
      question:"What is the Complexity of Linear Search ? ",
      options: [
        {answer: 'O(n)', isCorrect : true},
        {answer: 'O(logn)', isCorrect : false},
        {answer: 'O(nlogn)', isCorrect : false},
        {answer: 'O(1)', isCorrect : false},
      ]

    },

    {
      question:"What is the Complexity of MergeSort ? ",
      options: [
        {answer: 'O(n)', isCorrect : false},
        {answer: 'O(logn)', isCorrect : false},
        {answer: 'O(nlogn)', isCorrect : true},
        {answer: 'O(1)', isCorrect : false},
      ]

    },

  ];

  // Go to Next Question 
  function onNextClick(){
    if(currentQuestion == quizQuestions.length -1) return;
    setCurrentQuestion(currentQuestion + 1);
  }

  // Check the Answer is Correct Or Not 
  function checkAnswer(){
    
  }

  return (
    <div className='card-wrapper'>
        <div className='app'>  
        <div className='question-section'>

            <div className='question-count'>
                <span>Question {currentQuestion + 1}</span> / {quizQuestions.length}
            </div>

            <div className="question-text">
              {quizQuestions[currentQuestion].question}
            </div>
        </div>

        <div className='answer-section'>
            {quizQuestions[currentQuestion].options.map(option => <button onClick={checkAnswer}>{option.answer}</button>)}
        </div>
      </div>
       {/* Button to Show Next Questions */} 
       {/* Onclick is a HOF and onNextClick is a Callback function */}
       <button onClick={onNextClick}>Next</button>
    </div>
  )
}

export default App


// 1.8hr