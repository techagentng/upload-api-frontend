import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FileList = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    // Fetch the list of files from the backend
    axios.get('http://localhost:8080/files')
      .then(response => {
        setFileList(response.data.files);
      })
      .catch(error => {
        console.error('Error fetching file list:', error);
      });
  }, []);

  const handleDownload = async (filename) => {
    try {
      const response = await fetch(`http://localhost:8080/download/${filename}`);
      const blob = await response.blob();

      // Create a temporary URL to download the file
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();

      // Clean up the temporary objects
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <h2>List of Files</h2>
      <ul>
        {fileList.map((filename, index) => (
            <li key={index} download onClick={() => handleDownload(filename)}>{filename}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;

// {<li key={file}>
// <Link to={`/download/${file}`}>{file}</Link>
// </li> }