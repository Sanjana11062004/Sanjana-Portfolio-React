import React from "react";

function TechnicalSkills() {
  return (
    <div>
      <hr></hr>
      <section>
        <div className="container">
          <h3 className="align-center">Technical Skills</h3>
        </div>
        <div className="ALIGN-ITEMS">
          <p>HTML</p>
          <div className="container1">
            <div className="skills html" style={{textAlign:"center"}}>Intermediate</div>
          </div>

          <p>CSS</p>
          <div className="container1">
            <div className="skills css" style={{textAlign:"center"}}>Intermediate</div>
          </div>

          <p>JavaScript</p>
          <div className="container1" >
            <div className="skills java" style={{textAlign:"center"}}>Intermediate</div>
          </div>

          <p>ReactJS</p>
          <div className="container1">
            <div className="skills java blu" style={{textAlign:"center"}}>Intermediate</div>
          </div>

          <p>Java</p>
          <div className="container1">
            <div className="skills java green" style={{textAlign:"center"}}>Intermediate</div>
          </div>

          <p>MySQL</p>
          <div className="container1" >
            <div className="skills c red" style={{textAlign:"center"}}>Intermediate</div>
          </div>

          <p>C</p>
          <div className="container1">
            <div className="skills c blu" style={{textAlign:"center"}}>Intermediate</div>
          </div>

          <p>Python</p>
          <div className="container1">
            <div className="skills py green" style={{textAlign:"center"}}>Beginner</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnicalSkills;
