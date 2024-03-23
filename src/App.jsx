
import './App.css'

function App() {

  const currentQuestion = 0;
 
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


  return (
    <div className='app'>  
      <div className='question-section'>

          <div className='question-count'>
              <span>Question {currentQuestion + 1}</span> / {quizQuestions.length}
          </div>

          <div className="question-text">
            {quizQuestions[0].question}
          </div>
      </div>

      <div className='answer-section'>
          {quizQuestions[0].options.map(option => <button>{option.answer}</button>)}
      </div>

      {/* Button to Show Next Questions */}

      <button>Next</button>
    </div>
  )
}

export default App


// 1.8hr