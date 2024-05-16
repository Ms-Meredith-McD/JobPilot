import { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import JobsAccordion from "../components/JobsAccordion";
import Profile from "../components/Profile";
import FormAddJob from "../components/FormAddJob";

import useVerifyUser from "../hooks/useVerifyUser";

// Establsh who is logged in: user:  Context will have username, email, _id
// Query me backend: look for context.user._id from auth.js
// Fetch the jobs this user is applying for

function Jobs() {
  const { isLoggedIn, userData } = useVerifyUser();
  const [userJobs, setUserJobs] = useState([]);

  async function getJobs() {
    try {
      const jobs = await fetch(`/api/user/${userData._id}`);
      const { payload } = await jobs.json();
      setUserJobs(payload.jobs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (userData) getJobs();
  }, [userData]);

  return (
    <>
      <section className="jobs page-section bg-stars">
        <Profile profile={userJobs.profile} />
        <div className="jobs__container container">
          <div className="jobs__page-top">
            <Welcome />
            <h2 className="mb-4">Choose your mission</h2>
            <FormAddJob />
          </div>
          <JobsAccordion />
        </div>
      </section>
    </>
  );
}

export default Jobs;
