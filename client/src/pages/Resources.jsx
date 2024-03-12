import '../styles/components/_resources.scss';
import FileLinkForm from '../components/FileLinkForm'

const Resume = () => {
    return (
        <section className="page-section bg-stars">
            <div className="container">
                <div className="row">
                    <div className="resume-column">
                        <h2>Resume Templates:</h2>
                        <ul className="list">
                            <li><a href="../assets/entrylevelResume.pdf" download>Entry Level Resume</a></li>
                            <li><a href="../assets/midlevelResume.pdf" download>Mid Career Resume</a></li>
                            <li><a href="../assets/advancedResume.pdf" download>Advanced Career Resume</a></li>
                        </ul>
                    </div>
                    <div className="resume-column">
                        <h2>My Resumes:</h2>
                        <ul className="list">
                            <li>cover letter link placeholder</li>
                            <li>cover letter link placeholder</li>
                            <li>cover letter link placeholder</li>
                            <li>cover letter link placeholder</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;