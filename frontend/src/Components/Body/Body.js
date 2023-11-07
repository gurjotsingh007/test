import React from "react";
import work from "../assets/work.avif";
import "./Body.css";
import Card from "./Card";

const cardsData = [
  {
    iconSrc: "https://image.ibb.co/cFV8mR/monitoring.png",
    title: "Expert Tutors",
    description:
      "Connect with expert tutors in a variety of subjects to receive personalized guidance and excel in your studies.",
  },
  {
    iconSrc: "https://image.ibb.co/jfmg6R/cloud_firewalls.png",
    title: "Comprehensive Study Resources",
    description:
      "Access a wealth of study materials and resources, including textbooks, notes, and practice exams, to support your learning journey.",
  },
  {
    iconSrc: "https://image.ibb.co/fcnzt6/team_management.png",
    title: "Subject Specialization",
    description:
      "Explore specialized programs and courses designed to help you focus on subjects that matter most to you.",
  },
  {
    iconSrc: "https://image.ibb.co/evyiLm/backups.png",
    title: "Interactive Learning",
    description:
      "Engage in interactive learning experiences, such as quizzes and online classes, to enhance your understanding of various subjects.",
  },
  {
    iconSrc: "https://image.ibb.co/g9bERR/snapshots.png",
    title: "Study Groups",
    description:
      "Join study groups and collaborate with peers to solve problems, discuss subjects, and boost your academic performance.",
  },
  {
    iconSrc: "https://image.ibb.co/cFV8mR/monitoring.png",
    title: "Subject Enrollment",
    description:
      "Streamline the subject enrollment process and get access to a wide range of courses and subjects offered by institutions.",
  },
];

const Body = () => {
  return (
    <div className="container body upper">
      <div className="row banner">
        <div className="col-lg-6">
          <img src={work} alt="work-img" className="img-fluid" />
        </div>
        <div className="col-lg-6 body-content">
          <h1>Welcome to Our Study Hub</h1>
          <p>
            At Study Hub, we are dedicated to helping students succeed in their
            academic journey. Whether you need assistance with homework, exam
            preparation, or understanding complex topics, we've got you covered.
          </p>
          <p>
            Our platform offers a wide range of resources, including tutorials,
            study guides, and expert advice. We believe that education should be
            accessible to all, and our mission is to make learning both fun and
            effective.
          </p>
          <p>
            Join us on this learning adventure, explore our content, and connect
            with a community of fellow learners. Together, we can achieve
            educational excellence.
          </p>
        </div>
      </div>
      <div className="container body-card">
        <div className="row">
          {cardsData.map((card, index) => (
            <div key={index} className="mb-30 col-md-6 col-lg-4">
              <Card
                iconSrc={card.iconSrc}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;