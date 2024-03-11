import Welcome from "../components/Welcome";
import Tracker from "../components/Tracker";
import Modal from "../components/Modal";
import FormAddJob from "../components/FormAddJob";

// Establsh who is logged in: user:  Context will have username, email, _id
// Query me backend: look for context.user._id from auth.js
// Fetch the jobs this user is applying for

function Jobs() {
  return (
    <>
      <section className="page-section bg-stars">
        <div className="container">
          <Welcome />
          <h2 className="mb-4">Choose your mission</h2>
          <Modal />
          <Tracker />
          <FormAddJob />
        </div>
      </section>
    </>
  );
}

export default Jobs;
