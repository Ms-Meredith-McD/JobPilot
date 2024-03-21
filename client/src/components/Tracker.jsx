import React, { useEffect, useState } from "react";
import FormModal from "../components/Modal";
import ResumeSent from "../components/ResumeSent";
import Interview from "../components/Interview";
import InterviewThanks from "../components/InterviewThanks";
import InterviewFollowUp from "../components/InterviewFollowUp";
import { Link } from "react-router-dom";
import Note from "../components/Note";

function Tracker({ job }) {
  const [trackerdata, setTrackerData] = useState({});
  const { _id, user, company, website, jobTitle, tracker } = job;
  console.log("job", job);

  // console.log(`${jobTitle}: ${tracker}`);
  // Define an array of components
  const components = [
    ResumeSent,
    Interview,
    InterviewThanks,
    InterviewFollowUp,
    Note,
  ];

  async function deleteJob() {
    console.log("DELETE JOB CLICKED");
    try {
      // delete the tracker associated with the job
      await fetch(`/api/tracker/${tracker}`, {
        method: "DELETE",
      });
      // PUT - remove the job from the user
      await fetch(`/api/user/${user}/job/${_id}`, {
        method: "PUT",
      });
      // await delete the job
      await fetch(`/api/job/${job}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getTracker() {
      try {
        const rawTrackerData = await fetch(`/api/tracker/${tracker}`);
        console.log(tracker);
        const { payload } = await rawTrackerData.json();
        setTrackerData(payload);
      } catch (error) {
        console.log(error);
      }
    }
    getTracker();
  }, []);

  return (
    <>
      <section className="tracker">
        <h3 className="tracker__title">{company}</h3>
        <button className="btn btn-light" onClick={deleteJob}>
          Delete Job
        </button>
        <div className="tracker__row tracker__row--end">
          <h4 className="tracker__title">{jobTitle}</h4>
          <a className="tracker__joblink" href={website} target="_blank">
            <h4 className="tracker__website">{website}</h4>
          </a>
        </div>
        <div className="tracker__row">
          {components.map((Component, index) => (
            <div className="tracker__button" key={index}>
              <Component tracker={tracker} trackerdata={trackerdata} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Tracker;
