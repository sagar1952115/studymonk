import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div>
      <div className="testimonial-container">
        <h1>OUR TESTIMONIALS</h1>
        <div className="testimonial-list">
          <div className="testimonial-items">
            <div className="info">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident commodi vero, exercitationem ipsam molestias odit Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae.
              dolore, quos distinctio dicta, iure at nulla sed?"
            </div>
            <div className="name">Sagar Kumar</div>
            <div className="desig">Full stack developer</div>
          </div>
          <div className="testimonial-items">
            {" "}
            <div className="info">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident commodi vero, exercitati Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Odio, cum. onem ipsam molestias odit
              dolore, quos distinctio dicta, iure at nulla sed?"
            </div>
            <div className="name">Sagar Kumar</div>
            <div className="desig">Full stack developer</div>
          </div>
          <div className="testimonial-items">
            {" "}
            <div className="info">
              "Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur, tempora. consectetur
              adipisicing elit. Provident commodi vero, exercitationem ipsam
              molestias odit dolore, quos distinctio dicta, iure at nulla sed?"
            </div>
            <div className="name">Sagar Kumar</div>
            <div className="desig">Full stack developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
