import React from "react";

function Tools(){
    return(
        <div>
        <div>
            <hr/>
        </div>
        <section>
            <div className="container" style={{"display": "block"}}>
                <h3 className="align-center">My knowledge on tools</h3>
                <div className="text">
                    <div className="imgtxt spacebtw  mobmar">
                        <div>
                            <img className="image" src="/images/visual-studio.png" />
                        </div>
                        <div style={{marginLeft: "20px"}}><p>Visual Studio Code</p></div>
                    </div><br/>
                    <div className="imgtxt  mobmar">
                        <div>
                            <img className="image" src="/images/github (2).png" />
                        </div>
                        <div style={{marginLeft: "20px"}}><p>GitHub</p></div>
                    </div><br/>
                    <div className="imgtxt  mobmar">
                        <div>
                            <img className="image" src="/images/merge.png" />
                        </div>
                        <div style={{marginLeft: "20px"}}><p>Git</p></div>
                    </div><br />
                    <div className="imgtxt  mobmar">
                        <div>
                            <img className="image" src="/images/figma.png" />
                        </div>
                        <div style={{marginLeft: "20px"}}><p>Figma</p></div>
                    </div><br />
                    <div className="imgtxt  mobmar">
                        <div>
                            <img className="image" src="/images/openelement.png" />
                        </div>
                        <div style={{marginLeft: "20px"}}><p>Open Element</p></div>
                    </div><br/>
                </div>
            </div>
        </section>
        </div>
    )
}


export default Tools;