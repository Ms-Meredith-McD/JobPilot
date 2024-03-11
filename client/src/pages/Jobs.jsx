import { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import Tracker from "../components/Tracker";
import Modal from "../components/Modal";
import FormAddJob from "../components/FormAddJob";
import useVerifyUser from "../hooks/useVerifyUser";

// Establsh who is logged in: user:  Context will have username, email, _id
// Query me backend: look for context.user._id from auth.js
// Fetch the jobs this user is applying for

function Jobs() {
  const { isLoggedIn, userData } = useVerifyUser();

  async function getJobs() {
    try {
      console.log(userData._id);
      const jobs = await fetch("/api/job/user/" + userData._id);
      const result = await jobs.json();
      console.log("result", result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userData && getJobs();
  }, [userData]);
  return (
    <>
      <section className="page-section bg-stars">
        <div className="container">
          <Welcome />
          <h2 className="mb-4">Choose your mission</h2>
          <Tracker />
          {/* <FormAddJob /> */}
          <Modal />
        </div>
      </section>
    </>
  );
}

export default Jobs;
