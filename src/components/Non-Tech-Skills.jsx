import React from "react";

function NonTechSkills(){
    return(
        <div>
            <hr></hr>
            <section>
                <div className="container">
                    <h3 className="align-center">Non-Technical Skills</h3>
                </div>
    
                <div className="dropdown">
                    <button className="dropbtn">Click me to view!</button>
                    <div className="dropdown-content">
                        <a style={{"margin-top": "10px"}} className="color">Critical Thinking</a>
                        <hr className="dropdwn-line"/>
                        <a>Emotional intelligence</a>
                        <hr className="dropdwn-line"/>
                        <a>Communication</a>
                        <hr className="dropdwn-line"/>
                        <a>Time Management</a>
                        <hr className="dropdwn-line"/>
                        <a>Adaptability</a>
                    </div>
                </div>
             </section>
        </div>
    )
}



export default NonTechSkills;