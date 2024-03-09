import '../styles/components/_resume.scss';
import '../components/FileLinkForm'

const Resume = () => {
    return (
        <section className="page-section bg-stars">
        <section className="resume-section">
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
                    <FileLinkForm/>
                    <FileLinkForm/>
                    <FileLinkForm/>
                    <FileLinkForm/>
                    <FileLinkForm/>
                    <FileLinkForm/>
                </ul>
            </div>
        </section>
        </section>
    );
};

export default Resume;