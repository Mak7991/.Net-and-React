import React, { Component } from "react";
// import "./style.css";
import questionAPI from "./QuestionApi";
import QuestionBox from "./QuestionBox";
import Result from "./ResultBox";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      score: 0,
	  responses: 0,
	  risklevel:[]
    };
  }


  renderRisklevel = (score) => {
	  
    if (score >= 1 && score <= 4) {
	  return <p>Agressive</p>
	 
    } else if(score >= 4 && score <= 7){
		return <p>Moderate</p>
	}
  };
  
  // Function to get question from ./question
  getQuestions = () => {
    questionAPI().then((question) => {
      this.setState({ questionBank: question });
    });
  };

  // Set state back to default and call function
  playAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
  };

  // Function to compute scores
  computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      this.setState({
		score: this.state.score + 1,
		
	  })
	  
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  // componentDidMount function to get question
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title">QuizOn</div>

        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(({ question, answers, correct, questionId }) => (
            <QuestionBox
              question={question}
              options={answers}
              key={questionId}
              selected={(answer) => this.computeAnswer(answer, correct)}
            />
          ))}

        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </div>
    );
  }
}
export default Quiz;


// constructor(props) {
// 	super(props);
// 	this.state = {text: '', inputText: '', mode:'view'};
	
// 	this.handleChange = this.handleChange.bind(this);
// 	this.handleSave = this.handleSave.bind(this);
// 	this.handleEdit = this.handleEdit.bind(this);
//   }
  
//   handleChange(e) {
// 	this.setState({ inputText: e.target.value });
//   }
  
//   handleSave() {
// 	this.setState({text: this.state.inputText, mode: 'view'});
//   }

//   handleEdit() {
// 	this.setState({mode: 'edit'});
//   }
  
//   renderInputField() {
// 	if(this.state.mode === 'view') {
// 	  return null;
// 	} else {
// 	  return (
// 		  <p>
// 			<input
// 			  onChange={this.handleChange}
// 			  value={this.state.inputText}
// 			/>
// 		  </p>
// 	  );
// 	}
//   }
  
//   renderButton() {
// 	if(this.state.mode === 'view') {
// 	  return (
// 		  <button onClick={this.handleEdit}>
// 			Edit
// 		  </button>
// 	  );
// 	} else {
// 	  return (
// 		  <button onClick={this.handleSave}>
// 			Save
// 		  </button>
// 	  );
// 	}
//   }
  
//   render () {
// 	return (
// 	  <div>
// 		<p>Text: {this.state.text}</p>
// 		{this.renderInputField()}
// 		{this.renderButton()}
// 	  </div>
// 	);
//   }
// }