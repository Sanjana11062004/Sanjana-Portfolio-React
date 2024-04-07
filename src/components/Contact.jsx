import React from "react";

function Contact(){
    return(
        <div>
            <h3 className="align-center"  id="contact">Contact</h3>
            <div>
                <div className="footer">
                    <div className="footcontainer">
                        <div className="abcontainer2">
                            <div className="marg">
                                <img className="images image"  src="/images/gmail.png" />
                            </div>
                            <div><p className="icon font">sanjanamurugesan06@mail.com</p></div>
                        </div>
                        <div className="abcontainer2">
                            <div className="marg">
                                <img className="images image" src="/images/instagram.png" />
                            </div>
                            <div><p className="icon"><a className="font" style={{textDecoration: "none", "color": "white"}}  href="https://www.linkedin.com/in/sanjana-murugesan">sanjana_murugesan_._</a></p></div>
                        </div>
                    </div>
                    <div className="footcontainer">
                        <div className="abcontainer2">
                            <div className="marg">
                                <img className="images image" src="/images/linkedin.png" />
                            </div>
                            <div>
                                <p className="icon "><a className="font" style={{textDecoration: "none", "color": "white"}} href="https://www.linkedin.com/in/sanjana-murugesan">Sanjana Murugesan</a></p>
                            </div>
                        </div>
                        <div className="abcontainer2 margin-bottom">
                            <div className="marg">
                                <img className="images image" src="./images/telegram.png" />
                            </div>
                            <div><p className="icon font">Sanjana Murugesan</p></div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div style={{textAlign: "center",fontSize: "10px", "color": "rgb(146, 143, 143)", margin:"0%", textDecoration: "underline"}}><a href="https://github.com/Sanjana11062004/paytm-clone">Code</a></div>
                <div style={{textAlign: "center",fontSize: "10px", "color": "rgb(146, 143, 143)", margin:"0%", textDecoration: "underline"}}><a href="https://www.figma.com/file/oVAqHZG293yoP2mo5JQ1P2/paytm?type=design&node-id=0-1&t=kLOZXZFu21JArmLk-0">Figma</a></div>
            </div>
        </div>

    )
}


export default Contact;