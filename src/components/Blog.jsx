import React from "react";

function Blog(){
    return(
        <div>
            <section className=" para" style={{"width": "90%" ,"margin": "0 auto"}}>
                <h3 className="align-center" id="Blog">Blog</h3><br/><br/><br/>
                <div className="container1">
                    <div className="blog font">
                        <a href="https://medium.com/@sanjanamurugesan06/how-i-was-able-to-design-a-page-in-paytm-from-zero-8c1b1dba3cec"><img width="90%" style={{"border-radius": "10px"}} src="/images/learn-web.jpg" /></a>
                        <a style={{"width": "100%", "margin-top":"10px", "text-decoration": "none", "color": "white"}}  href="https://medium.com/@sanjanamurugesan06/how-i-was-able-to-design-a-page-in-paytm-from-zero-8c1b1dba3cec">How I was able to design a page in paytm from zero?</a>
                    </div>
                    <div className="blog font">
                        <a href="https://medium.com/@sanjanamurugesan06/few-best-creative-and-attractive-websites-b476a191e756"><img width="90%" style={{"border-radius": "10px"}} src="/images/creativeweb.png" /></a>
                        <a style={{"width": "100%", "margin-top":"10px", "text-decoration": "none", "color": "white"}} href="https://medium.com/@sanjanamurugesan06/few-best-creative-and-attractive-websites-b476a191e756">Few best creative and attractive websites.</a>
                    </div>
                </div>
            </section><br/>
            <hr></hr>
        </div>
    )
}

export default Blog;