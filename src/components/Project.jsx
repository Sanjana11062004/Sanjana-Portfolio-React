import React from "react";

function Project(){
    return(
        <div>
            <hr  id="project" />
            <section>
                <div className="container" style={{"display": "block"}}>
                    <h3 className="align-center" >My Projects</h3>
                    <h4 style={{"margin-left": "10px" ,"color": "#D0B214"}}>Paytm</h4>
                    <p className="para font">In this project the three unique pages of paytm has been designed using figma and code for the same has been implemented. The index page is contact page followed by About page and Investor Relation page.</p>
                <br/><div style={{"margin-left": "10px"}}>
                    <span><a href="https://github.com/Sanjana11062004/paytm-clone"><img width="40px" height="40px" src="/images/github (2).png" alt="github" /></a></span>
                    <span style={{"margin-left": "1%"}}><a href="https://www.figma.com/file/oVAqHZG293yoP2mo5JQ1P2/paytm?type=design&node-id=0-1&t=kLOZXZFu21JArmLk-0"><img width="40px" height="40px" src="/images/figma.png" alt="figma" /></a></span>
                    <span style={{"margin-left": "1%"}}><a href="https://paytm-clone-2beq.vercel.app/"><img width="40px" height="40px" src="/images/microsoft (2).png" alt="chrome" /></a></span>
                </div>
                </div><br/>
                <br/>
            </section><hr></hr>
        </div>
    )
}

export default Project;