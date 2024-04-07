import React from "react";

function Home(){
    return(
        <div>
            <nav>
                <ul id="home"  style={{paddingTop:"20px", margin:"0 auto"}}>
                    <li><a style={{textDecoration: "none" ,"color": "white"}} className="font"  href="#home"><strong>Home</strong></a></li>
                    <li><a style={{textDecoration: "none", "color": "#D0B214"}} className="font"  href="#about"><strong>About</strong></a></li>
                    <li><a style={{textDecoration: "none", "color": "#D0B214"}} className="font"  href="#skills"><strong>Skills</strong></a></li>
                    <li><a style={{textDecoration: "none", "color": "#D0B214"}} className="font"  href="#project"><strong>Projects</strong></a></li>
                    <li><a style={{textDecoration: "none", "color": "#D0B214"}}  className="font" href="#Blog"><strong>Blog</strong></a></li>
                    <li><a style={{textDecoration: "none", "color": "#D0B214"}} className="font" href="#contact"><strong>Contact</strong></a></li>
                </ul>
            </nav>
            <section>
                <div className="container margin-top-cont">
                <div className="subcon">
                        <p className="head">Hii, I’m</p><p className="name">Sanjana Murugesan</p>
                        <p className="subcont2">I’m a budding front end developer with an adaptive nature who can grasp and apply things easily.</p>
                    </div>
                    <div className="pic">
                        <img className="photo" src="./images/WhatsApp Image 2023-05-13 at 5.53.55 PM.jpeg" />
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Home;