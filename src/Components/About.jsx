/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/cl-bg.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Discover the future of AI at our Microsoft Build After Party event. Join us at Obafemi Awolowo University for an immersive gathering centered on Azure OpenAI service, ML, and Cognitive Services. Engage with two inspiring speakers and three esteemed panelists, alongside 70 passionate attendees. Don't miss this exceptional opportunity to expand your knowledge, network, and be part of the AI revolution.";
const description2 = "Sign up today to secure your spot!";
const description3 = "Sign up today to start learning!";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Azure OpenAI service",
  "Azure ML",
  "Azure Cognitive Services",
];

const schedule = [
  "10:00am to 10:30am - Registration",
  "10:30am to 11:00am - Welcome and Introduction",
  "11:00am to 11:30am - Keynote Speaker",
  "11:30am to 12:30pm - Panel Discussion",
  "12:30pm to 1:00pm - Speaker Session",
  "1:00pm to 1:30pm - Networking and Open Discussion",
  "1:30pm to 2:00pm - QnA and Closing Remarks",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Event</h2>
        <p className="large">{description}</p>
        <hr />
        <h2>Highlights</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <h2>Schedule</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {schedule.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <p style={{ padding: "1rem 3rem 0" }}>{description2}</p>
        <a href="https://forms.office.com/r/TckmfjmkaR">
          <button type="button">Register Now!</button>
          </a>
        <hr />
        <h2>Cloud Skills Challenge</h2>
        <p style={{ padding: "1rem 3rem 0" }}>{description3}</p>
        <a href="https://aka.ms/msbuild-lc-h192">
          <button type="button">Register Here</button>
          </a>
      </div>
    </section>
  );
};

export default About;
