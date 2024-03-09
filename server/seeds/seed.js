const mongoose = require("mongoose");
const { Job, Notes, Tracker, User } = require("../Models");

//not using env variable while we are testing in development
mongoose.connect("mongodb://127.0.0.1:27017/jobpilot", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jobSeeds = [
  {
    _id: "65eccc5ffc13ae7885cd3689",
    company: "Lorem",
    jobTitle: "Lorem Employee",
    website: "https://www.lorem.com",
    user: "65eccc5ffc13ae7885cd367e",
    notes: "65eccc5ffc13ae7885cd367f",
  },
  {
    _id: "65eccc5ffc13ae7885cd368d",
    company: "Ipsum",
    jobTitle: "Ipsum Employee",
    website: "https://www.ipsum.com",
    user: "65eccc5ffc13ae7885cd36a6",
    notes: "65eccc5ffc13ae7885cd3681",
  },
];

const userSeeds = [
  {
    _id: "65eccc5ffc13ae7885cd367e",
    username: "aristotle",
    password: "password1",
    email: "philosphy@greece.com",
    jobs: ["65eccc5ffc13ae7885cd3689"],
  },
  {
    _id: "65eccc5ffc13ae7885cd36a6",
    username: "socrates",
    password: "password2",
    email: "athens@classical.com",
    jobs: ["65eccc5ffc13ae7885cd368d"],
  },
];

const noteSeeds = [
  {
    _id: "65eccc5ffc13ae7885cd36c1",
    body: "Speaking with Alexander The Great on 4/10",
    job: {
      job: "65eccc5ffc13ae7885cd3689",
    },
  },
  {
    _id: "65eccc5ffc13ae7885cd36c3",
    body: "Meeting with a publisher for my republic book on tuesday",
    job: {
      job: "65eccc5ffc13ae7885cd368d",
    },
  },
];

const trackerSeeds = [
  {
    resume: {
      sent: true,
      date: new Date("03-01-2024"),
      link: "https://resumeofgreece.com",
    },
    interviewDate: new Date("03-09-2024"),
    interviewThankYou: {
      email: "loremcontact@lorem.com",
      sent: true,
    },
    interviewFollowUp: {
      sent: false,
      date: new Date("03-16-2024"),
      email: "loremcontact@lorem.com",
    },
    other: {
      title: "whyisthisrequired",
      description: "whyisthisrequired",
      completed: false,
    },
    notes: {
      notes: ["65eccc5ffc13ae7885cd36c1"],
    },
    job: {
      job: "65eccc5ffc13ae7885cd3689",
    },
  },
  {
    resume: {
      sent: true,
      date: new Date("02-26-2024"),
      link: "https://socratesresume@example.com",
    },
    interviewDate: new Date("03-01-2024"),
    interviewThankYou: {
      email: "ipsumindustries@ipsum.com",
      sent: true,
    },
    interviewFollowUp: {
      sent: false,
      date: new Date("03-25-2024"),
      email: "ipsumindustries@ipsum.com",
    },
    other: {
      title: "whyisthisrequired",
      description: "whyisthisrequired",
      completed: false,
    },
    notes: {
      notes: ["65eccc5ffc13ae7885cd36c3"],
    },
    job: {
      job: "65eccc5ffc13ae7885cd368d",
    },
  },
];


const seedTheData = async () => {
    try {
        await Promise.all([
            Job.deleteMany({}),
            Notes.deleteMany({}),
            Tracker.deleteMany({}),
            User.deleteMany({}),
        ]);

        await Job.insertMany(jobSeeds);
        console.log("Job data seeded");

        await Notes.insertMany(noteSeeds);
        console.log("Notes data seeded");

        await Tracker.insertMany(trackerSeeds);
        console.log("Tracker data seeded");

        await User.insertMany(userSeeds);
        console.log("User data seeded");
    } catch(err) {
        console.log("Error seeding data:", err);
    } finally {
        mongoose.connection.close()
    }
}

seedTheData();