import React from "react";
import FormModal from "../components/Modal";
import ResumeSent from "../components/ResumeSent";
import Interview from "../components/Interview";
import InterviewThanks from "../components/InterviewThanks";
import InterviewFollowUp from "../components/InterviewFollowUp";
import { Link } from "react-router-dom";

function Tracker({ job }) {
  const { _id, company, website, jobTitle, tracker } = job;

  console.log(`${jobTitle}: ${tracker}`);
  // Define an array of components
  const components = [
    ResumeSent,
    Interview,
    InterviewThanks,
    InterviewFollowUp,
  ];

  return (
    <>
      <section className="tracker">
        <h3 className="tracker__title">{company}</h3>
        <div className="tracker__row tracker__row--end">
          <h4 className="tracker__title">{jobTitle}</h4>
          <Link className="tracker__joblink" to={website}>
            <h4 className="tracker__website">{website}</h4>
          </Link>
          <h4 className="tracker__notes">Notes</h4>
        </div>
        <div className="tracker__row">
          {components.map((Component, index) => (
            <div className="tracker__button" key={index}>
              <Component tracker={tracker} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Tracker;
