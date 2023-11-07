import React from "react";
import about from "../assets/about.avif"
import "./About.css"

const About = () => {
  return (
    <div>
      <div className="container mt-5 about">
        <h1 className="text-center mb-4">About Us</h1>
        <div className="row">
          <div className="col-md-6">
            <img src={about} className="img-fluid" alt="Team Image" />
          </div>
          <div className="col-md-6 my-5">
            <p className="about-text">
              Welcome to <strong>Your Website Name</strong>! We are a passionate team dedicated to supporting students in their educational journey.
            </p>
            <p className="about-text">
              Our mission is to provide resources, guidance, and expert assistance to help students excel in their studies and achieve academic success in a variety of subjects.
            </p>
            <p className="about-text">
              Whether you're looking for subject-specific tutoring, study materials, or interactive learning experiences, we're here to make your learning journey more enjoyable and effective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
