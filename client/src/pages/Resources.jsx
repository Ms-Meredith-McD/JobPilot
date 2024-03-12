import { Link } from 'react-router-dom';
import '../styles/components/_resources.scss';
import React, { useEffect, useState } from 'react';



const Resources = () => {

    const [jokeImageUrl, setJokeImageUrl] = useState('');

useEffect(() => {
    fetch('https://icanhazdadjoke.com/j/R7UfaahVfFd.png', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        setJokeImageUrl(data.url);
    })
    .catch(error => {
        console.error('Error fetching dad joke:', error);
    });
}, []);

    return (
        <section className="page-section bg-stars">
            <div className="container">
                <div className="row">
                    <div className="resume-column">
                        <h2>Resumes:</h2>
                        <ul className="list">
                        <li><Link to="https://www.adobe.com/express/templates/resume"target="_blank" rel="noopener noreferrer">Adobe</Link></li>
                        <li><Link to="https://resume.io/resume-templates"target="_blank" rel="noopener noreferrer">Resume.io</Link></li>
                        <li><Link to="https://www.indeed.com/profile/resume-templates"target="_blank" rel="noopener noreferrer">Indeed</Link></li>
                        <li><Link to="https://resumegenius.com/resume-templates"target="_blank" rel="noopener noreferrer">Resume Genius</Link></li>
                        </ul>
                    </div>
                    <div className="resume-column">
                        <h2>Cover Letters:</h2>
                        <ul className="list">
                            <li><Link to="https://www.indeed.com/career-advice/resumes-cover-letters/free-cover-letter"target="_blank" rel="noopener noreferrer">Indeed</Link></li>
                            <li><Link to="https://resumegenius.com/cover-letter-templates/basic-simple-templates"target="_blank" rel="noopener noreferrer">Resume Genius</Link></li>
                            <li><Link to="https://www.canva.com/create/cover-letters/"target="_blank" rel="noopener noreferrer">Canva</Link></li>
                            <li><Link to="https://docs.google.com/document/d/1a4yU8rWtT1DWTS7H_c9EguUyFt49B2qU92demxvozTQ/edit" target="_blank" rel="noopener noreferrer">Google Docs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="row"></div>
                    <div className="resume-column">
                        <h2>Job Search:</h2>
                        <ul className="list">
                            <li><Link to="https://www.indeed.com/"target="_blank" rel="noopener noreferrer">Indeed</Link></li>
                            <li><Link to="https://www.linkedin.com/"target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
                            <li><Link to="https://www.dice.com"target="_blank" rel="noopener noreferrer">Tech Jobs: Dice</Link></li>
                            <li><Link to="https:/www.ziprecruiter.com" target="_blank" rel="noopener noreferrer">Zip Recruiter</Link></li>
                            <li><Link to="https:/www.glassdoor.com" target="_blank" rel="noopener noreferrer">Jobs & Reviews: Glassdoor</Link></li>
                            <li><Link to="https:/www.monster.com" target="_blank" rel="noopener noreferrer">Monster</Link></li>
                            <li><Link to="https:/www.careerbuilder.com" target="_blank" rel="noopener noreferrer">Career Builder</Link></li>
                            <li><Link to="https:/www.simplyhired.com" target="_blank" rel="noopener noreferrer">SimplyHired</Link></li>
                        </ul>
                    </div>
                    <div className="resume-column">
                        <h2>Contracts:</h2>
                        <ul className="list">
                            <li><Link to="https://www.roberthalf.com/"target="_blank" rel="noopener noreferrer">Robert Half</Link></li>
                            <li><Link to="https://www.aerotek.com"target="_blank" rel="noopener noreferrer">Aerotek</Link></li>
                            <li><Link to="https://www.adecco.com"target="_blank" rel="noopener noreferrer">Adecco</Link></li>
                            <li><Link to="https:/www.kellyservices.com" target="_blank" rel="noopener noreferrer">Kelly Services</Link></li>
                            <li><Link to="https:/www.kforce.com" target="_blank" rel="noopener noreferrer">Kforce</Link></li>
                            <li><Link to="https:/www.TEKsystems" target="_blank" rel="noopener noreferrer">TEKsystems</Link></li>
                            <li><Link to="https:/www.randstad.com" target="_blank" rel="noopener noreferrer">Randstad</Link></li>
                            </ul>
                    </div>
                    <div className="resume-column">
                        <h2>Freelance:</h2>
                        <ul className="list">
                            <li><Link to="https:/www.upwork.com" target="_blank" rel="noopener noreferrer">Upwork</Link></li>
                            <li><Link to="https:/www.freelancer.com" target="_blank" rel="noopener noreferrer">Freelancer</Link></li>
                            <li><Link to="https:/www.toptal.com" target="_blank" rel="noopener noreferrer">Toptal</Link></li>
                            <li><Link to="https://www.linkedin.com/services" target="_blank" rel="noopener noreferrer">Linked In Pro Services</Link></li>
                        </ul>
                    </div>
                    <div className="resume-column">
            <h2>Random Dad Joke</h2>
            <ul className="list">
                {jokeImageUrl && <img src={jokeImageUrl} alt="Random Dad Joke" />}
            </ul>
        </div>
                    </div>
                </div>
            
        </section>
    );
};


export default Resources;