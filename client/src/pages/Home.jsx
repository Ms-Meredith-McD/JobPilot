import hero from "../assets/images/hero2.png";
function Home() {
  return (
    <>
      <div className="bg-stars homePage">
        <h1> Welcome to JobPilot</h1>
        <h2>Are you ready for liftoff?</h2>
      <div className="hero" style={{ backgroundImage: `url(${hero})` }}></div>
        <p>
          JobPilot features a fullly functional job tracker to aid you in your
          search for a job. JobPilot has features such as being able to remember
          your interview dates, reminders to send thank you emails to your
          interviewers, and so much more!{" "}
        </p>
      </div>
    </>
  );
}

export default Home;
