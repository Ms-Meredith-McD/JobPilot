import { Link } from 'react-router-dom';
import '../styles/components/_resources.scss';

const Resources = () => {
    return (
        <section className="page-section bg-stars">
            <div className="container">
                <div className="row">
                    <div className="resume-column">
                        <h2>Resume Templates:</h2>
                        <ul className="list">
                            <li><Link to="../assets/entrylevelResume.pdf" target="_blank" download>Entry Level Resume</Link></li>
                            <li><Link to="../assets/midlevelResume.pdf" target="_blank" download>Mid Career Resume</Link></li>
                            <li><Link to="../assets/advancedResume.pdf" target="_blank" download>Advanced Career Resume</Link></li>
                        </ul>
                    </div>
                    <div className="resume-column">
                        <h2>Cover Letter Resources:</h2>
                        <ul className="list">
                            <li><Link to="https://www.indeed.com/career-advice/resumes-cover-letters/free-cover-letter">Indeed</Link></li>
                            <li><Link to="https://resumegenius.com/cover-letter-templates/basic-simple-templates">Resume Genius</Link></li>
                            <li><Link to="https://www.canva.com/create/cover-letters/">Canva</Link></li>
                            <li><Link to="https://docs.google.com/document/d/1a4yU8rWtT1DWTS7H_c9EguUyFt49B2qU92demxvozTQ/edit">Google Docs</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resources;