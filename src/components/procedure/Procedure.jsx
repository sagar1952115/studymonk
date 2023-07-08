import React from "react";
import shortlist from "../../asset/candidate.png";
import interview from "../../asset/interview.png";
import hire from "../../asset/tick.png";
import "./Procedure.css";

const Procedure = () => {
  return (
    <div>
      <div className="procedure-container">
        <h1>OUR PROCEDURE</h1>
        <div className="procedure-list">
          <div className="procedure-items">
            <img src={shortlist} alt="" />
            <div className="info">Shortlist Candidate</div>
          </div>
          <div className="procedure-items">
            <img src={interview} alt="" />
            <div className="info">Interview Candidate</div>
          </div>
          <div className="procedure-items">
            <img src={hire} alt="" />
            <div className="info">Hire Candidate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
