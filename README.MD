 # JobPilot

## Description

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

JobPilot is a fully functional job tracker made in order to aid the user in search of a job. A user is able to sign up up an account, and keep track of all job applications they have sent out, and several features in regards to that. This project was made to show our technical skills creating a full MERN stack application

## Features
* Login/Signup: A user is able to make their own account by signing up, and login with the same credentials. All of the users data persits as well

* Job Tracker: Keep track of all of your job applications through use of the Job Tracker. You can keep notes about the dates of your interview, reminders to send thank you emails, schedule follow-ups, and more!

* Resources: Place orders directly through the website, which then redirects the user to a thank you page

* Meet The Team: A page to see the full team that designed and made JobPilot



## Tech Stack

* HTML
* CSS & Bootstrap
* JavaScript
* MongoDB
* Express
* React
* Node.js
* bcrypt
* Dotenv
* JWT


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

This project is running off of Heroku and can be found at `placeholder`

Interested in running the app locally instead? 

1. Clone the repository. First you must take the .env.example file and enter in a value for the `JWT_SECRET=`. Once that is done, rename this file to just .env, and save. Run `npm run install` within the console from the root of the project to install the dependencies required for both the client, and server side. Then, you can run `npm run build` in order to build the dist folder for Vite to use. Finally, you can use `npm run develop` to start the application

2. If you would like to additionally start with some pre-seeded data to play around with. Close the server and run `npm run seed`

## Usage

Navigate to the link above to reach the homepage of the site.

![Example Image of the site]()


In order to use all features of the site, you will need to create an account. Simply navigate to login within the navbar, and fill out the signup form

![Example Image of the site]()


Once logged in, the user will be automatically redirected to the job tracker page. Here you are able to create new trackers for your job interviews and applications

![Example Image of the site]()


You can reach the resources page by going to the navbar, and selecting resources. Here you can see helpful links and templates for resumes, and save your own resumes in here for reference.

![Example Image of the site]()


If you would like to see the full team behind JobPilot, as well as browse our teams portfolio's, please navigate to the 'Meet the team!' link within the footer of the application

![Example Image of the site]()


## Credits

This project would not have been possible if not for the team working on it. Special thanks to 

- Jonathon Blom [blomjonathon](https://github.com/blomjonathon) 
- Riley Burns [RB2277](https://github.com/RB2277) 
- Alex Geer [agDesignz](https://github.com/agDesignz)
- Meredith McDonald [Ms-Meredith-McD](https://github.com/Ms-Meredith-McD)  


## License

This project is licensed under the MIT license. License link: https://opensource.org/licenses/mit/