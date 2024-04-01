export default function AnswerSection({question, onAnswerClick}){
    return (
        <div className='answer-section'>
            {question.options.map(option => <button onClick={() =>     onAnswerClick(option)}>{option.answer}</button>)}
        </div>
    );
}