import React from "react";
// import "../style.css";

// Function to question inside our app
const QuestionBox = ({ question, options, selected }) => {
  // const [answer, setAnswer] = useState(options.answer);
  return (
    <div className="questionBox">
      <div className="question">{`Q: ${question}`}</div>
      {options && options.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            // setAnswer();
            selected(text);
          }}>
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
