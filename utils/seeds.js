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
      }
    ];    


const userSeeds = [
    {
          _id: "65eccc5ffc13ae7885cd367e",
          username: "aristotle",
          password: "password1",
          email: "philosphy@greece.com",
          jobs: ["65eccc5ffc13ae7885cd3689"]

      },
     {
         _id: "65eccc5ffc13ae7885cd36a6",
         username: "socrates",
        password: "password2",
        email: "athens@classical.com",
        jobs: ["65eccc5ffc13ae7885cd368d"]

     }
    ]

    const noteSeeds = [
        {
            body: "Speaking with Alexander The Great on 4/10",
            job: {
                job: "65eccc5ffc13ae7885cd3689"
            }
        },
        {
            body: "Meeting with a publisher for my republic book on tuesday",
            job: {
                job: "65eccc5ffc13ae7885cd368d"
            }
        }

    ]