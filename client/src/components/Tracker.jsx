import React from "react";
import FormModal from "../components/Modal";
import ResumeSent from "../components/ResumeSent";
import Interview from "../components/Interview";
import InterviewThanks from "../components/InterviewThanks";
import InterviewFollowUp from "../components/InterviewFollowUp";

function Tracker({ job }) {
  const { _id, company, website, jobTitle } = job;

  // Define an array of components
  const components = [
    ResumeSent,
    Interview,
    InterviewThanks,
    InterviewFollowUp,
  ];

  return (
    <>
      <div className="d-flex justify-content-end tracker">
        <h3 className="tracker__title">{company}</h3>
        <h4 className="tracker__title">{jobTitle}</h4>
        <h4 className="tracker__website">{website}</h4>
        <h4 className="tracker__notes">Notes</h4>
      </div>
      <div className="row">
        {components.map((Component, index) => (
          <div className="col" key={index}>
            <FormModal>
              <Component />
            </FormModal>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tracker;
