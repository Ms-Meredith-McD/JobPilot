import React, { useEffect, useState, memo } from "react";
import ResumeSent from "../components/ResumeSent";
import Interview from "../components/Interview";
import InterviewThanks from "../components/InterviewThanks";
import InterviewFollowUp from "../components/InterviewFollowUp";
import DeleteJob from "../components/DeleteJob";
import Note from "../components/Note";

const Tracker = memo(function Tracker({ job, getJobs }) {
  const [trackerdata, setTrackerData] = useState({});
  const { _id, user, company, website, jobTitle, tracker } = job;
  console.log("job", job);

  // Define an array of components
  const components = [
    ResumeSent,
    Interview,
    InterviewThanks,
    InterviewFollowUp,
    Note,
  ];

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
        {/* <div className="tracker__row tracker__row--end">
          <DeleteJob jobId={_id} getJobs={getJobs} />
        </div> */}

        <div className="tracker__row">
          {components.map((Component, index) => (
            <div className="tracker__button" key={index}>
              <Component tracker={tracker} trackerdata={trackerdata} />
            </div>
          ))}
        </div>
        <DeleteJob jobId={_id} getJobs={getJobs} />
      </section>
    </>
  );
});

export default Tracker;
