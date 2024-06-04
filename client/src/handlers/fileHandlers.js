export const handleResumeUpload = (setProfileData, profileData) => (e) => {
    const selectedFile = e.target.files[0];
    setProfileData({ ...profileData, resumeFile: selectedFile });
};

export const handleCoverLetterUpload = (setProfileData, profileData) => (e) => {
    const selectedFile = e.target.files[0];
    setProfileData({ ...profileData, coverLetterFile: selectedFile });
};