import React from "react";

function TechnicalSkills(){
    return(
        <div>
            <hr></hr>
            <section>
                <div className="container">
                    <h3 className="align-center">Technical Skills</h3>
                </div>
                <div className="ALIGN-ITEMS" >
                    <p>HTML</p>
                    <div className="container1">
                        <div className="skills html">90%</div>
                    </div>

                    <p>CSS</p>
                    <div className="container1">
                    <div className="skills css">80%</div>
                    </div>

                    <p>JavaScript</p>
                    <div className="container1">
                    <div className="skills js">50%</div>
                    </div>

                    <p>C</p>
                    <div className="container1">
                    <div className="skills c">70%</div>
                    </div>

                    <p>Python</p>
                    <div className="container1">
                    <div className="skills py">50%</div>
                    </div>

                    <p>Java</p>
                    <div className="container1">
                    <div className="skills java">80%</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TechnicalSkills;