import { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import Tracker from "../components/Tracker";
import FormModal from "../components/Modal";
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
      const jobs = await fetch("/api/job/user/" + userData._id);
      const { payload } = await jobs.json();
      setUserJobs(payload);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (userData) getJobs();
  }, [userData]);
  return (
    <>
      <section className="page-section bg-stars">
        <div className="container">
          <Welcome />
          <h2 className="mb-4">Choose your mission</h2>
          <FormModal>
            <FormAddJob />
          </FormModal>

          {userJobs.map((job) => (
            <Tracker key={job._id} job={job} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Jobs;
