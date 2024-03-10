import React, { useState } from 'react';

const FileLinkForm = () => {
    const [fileLink, setFileLink] = useState('');

    const handleInputChange = (e) => {
        setFileLink(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('File link submitted:', fileLink);
        // Save the file link to your web application
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fileLink">Enter File Link: </label>
            <input
                type="text"
                id="fileLink"
                value={fileLink}
                onChange={handleInputChange}
            />
            <button type="submit">Save Link</button>
        </form>
    );
};

export default FileLinkForm;