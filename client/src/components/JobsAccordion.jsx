import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tracker from "./Tracker";
import Accordion from "react-bootstrap/Accordion";
import useVerifyUser from "../hooks/useVerifyUser";

const JobsAccordion = () => {
  const { isLoggedIn, userData } = useVerifyUser();
  const [userJobs, setUserJobs] = useState([]);

  async function getJobs() {
    try {
      const jobs = await fetch(`/api/user/${userData._id}`);
      const { payload } = await jobs.json();
      console.log("jobsPayload", payload);
      setUserJobs(payload.jobs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (userData) getJobs();
  }, [userData]);
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen flush>
      {userJobs.map((job, idx) => (
        <Accordion.Item key={idx} eventKey={idx}>
          <Accordion.Header>
            <h2>{job.company}</h2>
            <h3>{job.jobTitle}</h3>
            <Link to={job.website} target="_blank" rel="noopener noreferrer">
              open website
            </Link>
          </Accordion.Header>
          <Accordion.Body>
            <Tracker key={idx} job={job} getJobs={getJobs} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default JobsAccordion;
