import React from "react";

function Blog() {
  return (
    <div>
      <section className=" para" style={{ width: "90%", margin: "0 auto" }}>
        <h3 className="align-center" id="Blog">
          Blog
        </h3>
        <br />
        <br />
        <br />
        <div className="container1">
          <div className="blog font">
            <a href="https://medium.com/@sanjanamurugesan06/how-i-was-able-to-design-a-page-in-paytm-from-zero-8c1b1dba3cec">
              <img
                width="90%"
                height="80%"
                style={{ borderRadius: "10px", objectFit:"fill"}}
                src="/images/learn-web.jpg"
                
              />
            </a>
            <a
              style={{
                width: "90%",
                marginTop: "10px",
                textDecoration: "none",
                color: "white",
              }}
              href="https://medium.com/@sanjanamurugesan06/how-i-was-able-to-design-a-page-in-paytm-from-zero-8c1b1dba3cec"
            >
              How I was able to design a page in paytm from zero?
            </a>
          </div>
          <div className="blog font">
            <a href="https://medium.com/@sanjanamurugesan06/few-best-creative-and-attractive-websites-b476a191e756">
              <img
                width="90%"
                height="80%"
                style={{ borderRadius: "10px", objectFit:"fill" }}
                src="/images/webd.png"
              />
            </a>
            <a
              style={{
                width: "90%",
                marginTop: "10px",
                textDecoration: "none",
                color: "white",
              }}
              href="https://medium.com/@sanjanamurugesan06/few-best-creative-and-attractive-websites-b476a191e756"
            >
              Few best creative and attractive websites.
            </a>
          </div>
          <div className="blog font">
            <a href="https://medium.com/@sanjanamurugesan06/bridging-the-gap-the-current-education-system-vs-industry-expectations-eba1997c1a97">
              <img
                width="90%"
                height="70%"
                style={{ borderRadius: "10px", objectFit:"fill"}}
                src="/images/gap.jpeg"
              />
            </a>
            <a
              style={{
                width: "100%",
                marginTop: "10px",
                textDecoration: "none",
                color: "white",
              }}
              href="https://medium.com/@sanjanamurugesan06/bridging-the-gap-the-current-education-system-vs-industry-expectations-eba1997c1a97"
            >
              Bridging the Gap: The Current Education System vs. Industry Expectations
            </a>
          </div>
          <div className="blog font">
            <a href="https://medium.com/@sanjanamurugesan06/service-based-vs-product-based-companies-which-one-is-right-for-you-2f3156469f1">
              <img
                width="90%"
                style={{ borderRadius: "10px" }}
                src="/images/pvs.png"
              />
            </a>
            <a
              style={{
                width: "90%",
                marginTop: "10px",
                textDecoration: "none",
                color: "white",
              }}
              href="https://medium.com/@sanjanamurugesan06/mistakes-unveiled-the-gateway-to-growth-and-the-myths-we-bust-d5d36b2560b8"
            >
              Service-Based vs. Product-Based Companies: Which One Is Right for You?
Sanjana Murugesan

            </a>
          </div>
          <div className="blog font">
            <a href="https://medium.com/@sanjanamurugesan06/few-best-creative-and-attractive-websites-b476a191e756">
              <img
                width="90%"
                style={{ borderRadius: "10px" }}
                src="/images/Myths.png"
              />
            </a>
            <a
              style={{
                width: "90%",
                marginTop: "10px",
                textDecoration: "none",
                color: "white",
              }}
              href="https://medium.com/@sanjanamurugesan06/mistakes-unveiled-the-gateway-to-growth-and-the-myths-we-bust-d5d36b2560b8"
            >
             Mistakes Unveiled: The Gateway to Growth and the Myths We Bust
            </a>
          </div>
          
        </div>
      </section>
      <br />
      <hr></hr>
    </div>
  );
}

export default Blog;
