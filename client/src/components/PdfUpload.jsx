import React, { useState } from "react";

const PdfUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(""); // State to store the file name
  const [isUploading, setIsUploading] = useState(false); // State to track upload status

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name); // Update file name state
    console.log("File selected:", selectedFile);
  };

  const handleUpload = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Upload triggered");

    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setIsUploading(true); // Set uploading state to true

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "pdfupload"); // Replace with your actual upload preset

    try {
      console.log("Uploading file...");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dfsxvz9xk/auto/upload", // Replace 'dfsxvz9xk' with your Cloudinary cloud name
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        console.error("Error with Cloudinary response:", response.statusText);
        throw new Error("Failed to upload file. Check Cloudinary settings.");
      }

      const data = await response.json();
      if (data.error) {
        console.error("Error from Cloudinary:", data.error.message);
        throw new Error(data.error.message);
      }

      const uploadedFileUrl = data.secure_url; // URL of the uploaded PDF
      console.log("File uploaded successfully:", uploadedFileUrl);
      onUpload(uploadedFileUrl, fileName); // Pass the uploaded file URL and file name back to the parent component
    } catch (error) {
      console.error("Error uploading file:", error.message || error);
      alert("Failed to upload file. Please try again.");
    } finally {
      setIsUploading(false); // Reset uploading state
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button type="button" onClick={handleUpload} disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload PDF"}
      </button>
      {fileName && <p>Selected File: {fileName}</p>}{" "}
      {/* Display selected file name */}
    </div>
  );
};

export default PdfUpload;
