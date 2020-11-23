import React from "react";
// import "../style.css";

// function Risklevel() {
//   let { score } = this.state;
//   if (score === 1 + 2) {
//     return (document.getElementById("risklevel").innerHTML = "Agreesive");
//   }
// }

// const renderRisklevel = () => {
//   if (this.state.score === 4) {
//     return <p>Agressive</p>;
//   } else if (this.state.score === 3) {
//     return <p>Moderate</p>;
//   }
// };

const Result = ({ score, playAgain, renderRisklevel }) => (
  <div className="score-board">
    <div className="score"> Your score is {score} / 5 correct answer ! ! ! </div>
    <p>{renderRisklevel}</p>
    <button className="playBtn" onClick={playAgain}>
      Play Again
    </button>
  </div>
);

export default Result;
