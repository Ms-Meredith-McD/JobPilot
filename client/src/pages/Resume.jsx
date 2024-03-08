const Resume = () => {
    return (
        <div>
            <h1>Resumes</h1>
            <div>
            <a href={process.env.PUBLIC_URL + '../assets/entrylevelResume.pdf'} download>Download Entry Level Resume</a>
            </div>
            <div>
            <a href={process.env.PUBLIC_URL + '../assets/midlevelResume.pdf'} download>Download Mid Level Resume</a>
            </div>
        </div>
    );
};

export default Resume;