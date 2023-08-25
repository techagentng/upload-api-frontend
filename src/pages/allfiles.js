import React, { useState, useEffect } from 'react';
import folder from "../img/folder.png"
import Nav from "../components/nav";
import Footer from "../components/footer";
import axios from 'axios';
import { useRef } from "react";
import Modal from "../components/modal";

const FileList = () => {
//   const [fileList, setFileList] = useState([]);
//   const [folderList, setFolderList] = useState([]);
  const [folders, setFolders] = useState(['Folder1', 'Folder2', 'Folder3', 'Folder4']);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [files, setFiles] = useState([]);
  
  const [isActive, setIsActive] = useState(false);
  const [hidden, setHidden] = useState({
    display: "none",
  });
  
  function handleActive() {
    if (!isActive) {
      setIsActive((c) => (c = true));
      setHidden((c) => (c = { display: "block" }));
      console.log("here " + isActive);
    } else {
      setIsActive((c) => (c = false));
      setHidden((c) => (c = { display: "none" }));
      console.log("here " + isActive);
    }
  }

  const faq = useRef(null);
  const feature = useRef(null);
  
  const handleFolderClick = async (folderName) => {
    setSelectedFolder(folderName);
    try {
        const response = await axios.get(`http://localhost:8080/folders/${folderName}/filelist`);
        setFiles(response.data.files);
        console.log("hello obj", response.data)
    } catch (error) {
        console.error('Error fetching folder files:', error);
    }
};

  useEffect(() => {
    // handleFolderClick()
    // Fetch the list of files from the backend
    // axios.get('http://localhost:8080/files')
    //   .then(response => {
    //     setFileList(response.data.files);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching file list:', error);
    //   });
  }, []);

  const handleDownload = async (filename) => {  //onclick download
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
    <div className="terms-container">
      <div style={hidden}>
        <Modal setIsOpen={handleActive} />
      </div>
      <div className="terms-nav">
        <Nav faq={faq} feature={feature} handleActive={handleActive} />
        
        <div className="terms-contents" style={{display:"flex", flexDirection: "column", marginBottom:"240px"}}>
        <h1 class="text-3xl mb-4 text-center">Folder list</h1>
        <section className='mx-auto'>
        <ul className="flex space-x-4">
          {folders.map((folderName, index) => (
            <li
              key={index}
              className="overflow-hidden transition-transform transform border rounded-lg cursor-pointer hover:scale-105"
            >
              <img
                src={folder}
                alt="Image1"
                className="w-full"
                onClick={() => handleFolderClick(folderName)}
              />
              <p>{folderName}</p>
            </li>
          ))}
        </ul>
            {selectedFolder && (
                <div>
                    <h2 class="text-1xl mt-5 mb-3">Files in {selectedFolder}:</h2>
                    <div className="flex overflow-x-auto">
                      {files.map((fileName, index) => (
                          <div key={index} className="flex-shrink-0 p-4 mr-4 border border-gray-300 rounded-lg">
                              <p className="text-lg font-semibold">File Name: {fileName.fileName}</p>
                              <p>Creation Time: {fileName.creationTime}</p>
                              <p>Modification Time: {fileName.modificationTime}</p>
                              <button
                                  onClick={() => handleDownload(fileName.fileName)} // Assuming you pass the filename to the handler
                                  className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                              >
                                  Download
                              </button>
                          </div>
                      ))}
                  </div>

                </div>
            )}
        </section>
         </div>
        <Footer faq={faq} feature={feature} />
      </div>
    </div>
  );
};

export default FileList;

