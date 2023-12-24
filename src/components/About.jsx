import React from "react";

function About(){
    return(
        <div>
            <section id="about">
                <h3 className="align-center wid" >About</h3>
                <div className="container">
                    <div>
                        <img className="logo" src="/images/businesswoman.png" /></div>
                        
                        <div className="marleft">
                            <p className="para">I'm a future web developer currently pursuing an undergraduate degree in
                                the discipline of Computer Science and engineering. Student at Spotknack
                                community. Love to learn new things. Girl with quick grasping power. Being
                                a budding engineer I wish to contribute my talent to serve the people and
                                provide them with a better lifestyle. I look forward to exploring many things
                                and developing myself every day. 
                            </p>
                            <h4 className="para color">“The future belongs to those who believe in the beauty of their dreams"</h4>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default About;