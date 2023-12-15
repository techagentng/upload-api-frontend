import React, { useState, useContext, useEffect } from 'react';
import folder from "../img/folder.png"
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useRef } from "react";
import Modal from "../components/modal";
import { useNavigate } from 'react-router-dom';
// import { FolderContext } from '../Contexts/FileContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FileList = ({ setIsOpen }) => {
  const navigate = useNavigate()
  // const { handleFolderClick } = useContext(FolderContext);
  const { folderName } = useParams();
  const [folders, setFolders] = useState(['NDPR', 'PCIDSS', 'ISO-27001', 'Compliance', 'Organogram', 'Documentations', 'Service Level Agreement','TAT', 'People/culture','Info-Security-Management']);  
  const [isActive, setIsActive] = useState(false);
  const [files, setFiles] = useState([])
  const [hidden, setHidden] = useState({
    display: "none",
  });
  const [alert, setAlert] = useState(false);

  const [message, setMessage] = useState({
    text: "",
    info: "",
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

  const displayMessage = (text, info) => {
    setAlert(true);
    setMessage({ text: text, info: info });
    setTimeout(() => {
      setAlert(false);
      setMessage({ text: "", info: "" });
      setIsOpen();
    }, 1000);
  };
  
  const displayErrorMessage = (text, info) => {
    setAlert(true);
    setMessage({ text: text, info: info });
    setTimeout(() => {
      setAlert(false);
      setMessage({ text: "", info: "" });
    }, 1000);
  };
  
  const faq = useRef(null);
  const feature = useRef(null);
  
  const handleFolderClick = (folderName) => {
    console.log('Folder clicked:', folderName);
    setFolders(folderName);
    navigate(`/folder/${folderName}`);
};

  const handleDownload = async (filename) => {  //onclick download
    try {
      const response = await fetch(`https://upload-api-74qq.onrender.com/api/v1/download/${filename}`);
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
  
  const handleDelete = async (folderName, fileName) => {
    const encodedFileName = encodeURIComponent(fileName);
    const url = `https://upload-api-74qq.onrender.com/api/v1/documents/${folderName}/${encodedFileName}`;
  
    // Display a confirmation dialog before deletion
    const confirmDelete = window.confirm('Are you sure you want to delete this file?');
    if (!confirmDelete) {
      return; // Cancel deletion if the user clicks Cancel
    }
  
    try {
      // Send a DELETE request to delete the file
      await axios.delete(url);
  
      // Update the state to reflect the file deletion
      // setFiles(prevFiles => prevFiles.filter(file => file.fileName !== fileName));
    } catch (error) {
      console.error('Error deleting file:', error);
      // Handle error: Display an error message to the user
      // You can set an error state or show a notification to the user
    }
  };
  
  useEffect(() => {
    const fetchFilesForFolder = async () => {
      try {
        const response = await axios.get(`https://upload-api-74qq.onrender.com/api/v1/folders/${folderName}/filelist`);
        setFiles(response.data.files);
        const filesData = response.data.files;
        if (!filesData || filesData.length === 0) {
          console.log('No files in this folder.');
          // You can display a message or handle this case accordingly
          // For example, set a state to show a message to the user
          // setMessage('No files available for this folder.');
          return;
        }
       
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
  
    if (folderName) {
      fetchFilesForFolder();
    }
  }, [folderName]);
  return (
    <div className="terms-container">
      <div style={hidden}>
        <Modal setIsOpen={handleActive} />
      </div>
      <div className="terms-nav">
        <Nav faq={faq} feature={feature} handleActive={handleActive} />
        
        <div className="terms-contents" style={{display:"flex", flexDirection: "column", marginBottom:"240px"}}>
        <h1 class="text-3xl mb-4 text-center pb-8">Work Central Repository</h1>
        <section className='mx-auto'>
        <ul className="flex mb-5 space-x-4">
          {folders.map((folderName, index) => (
            <li
              key={index}
              className="overflow-hidden transition-transform transform border border-none rounded-lg cursor-pointer hover:scale-05"
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
        </section>
        <div className="container mx-auto mt-4">
        <div className="my-6 overflow-x-auto bg-white rounded shadow-md">
  <table className="w-full table-auto min-w-max">
    <thead>
      <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
        <th className="px-6 py-3 text-left"></th>
        <th className="px-6 py-3 text-left">File Name</th>
        <th className="px-6 py-3 text-left">Document Type</th>
        <th className="px-6 py-3 text-left">Document Number</th>
        <th className="px-6 py-3 text-left">Department</th>
        <th className="px-6 py-3 text-left">Division</th>
        <th className="px-6 py-3 text-left">Classification</th>
        <th className="px-6 py-3 text-left">Document Author</th>
        <th className="px-6 py-3 text-left">Date Created</th>
        <th className="px-6 py-3 text-left">Status</th>
      </tr>
    </thead>
    <tbody className="text-sm font-light text-gray-600">
    {files?.length > 0 ? (
    files.map((file, index) => (
      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
      <td className="px-2 py-3">
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => handleDelete(folderName, file.fileName)} 
        >
          Delete
        </button>
      </td>
      <td className="px-4 py-3 text-left">{file?.fileName}</td>
      <td className="px-4 py-3 text-left">{file?.dateCreated}</td>
      <td className="px-4 py-3 text-left">{file?.documentType}</td>
      <td className="px-4 py-3 text-left">{file?.documentNumber}</td>
      <td className="px-4 py-3 text-left">{file?.department}</td>
      <td className="px-4 py-3 text-left">{file?.division}</td>
      <td className="px-4 py-3 text-left">{file?.classification}</td>
      <td className="px-4 py-3 text-left">{file?.documentAuthor}</td>
      <td className="px-4 py-3 text-left">{file?.status}</td>
    </tr>
    ))
  ) : (
    <tr>
      <td colSpan="10">No files available.</td>
    </tr>
  )}
  
    </tbody>
  </table>
</div>

</div>


{/*         
{selectedFolder && (
                <div className="grid gap-4 grid1-cols-">
                
            <div className="flex flex-col">
              
            {files ? files.map((file, index) => (
                <div key={index} className="p-4 mb-4 text-left border-gray-300 rounded-lg bordere">
                    <p className="text-lg font-semibold">File Name: {file.fileName}</p>
                    <p>Date Created: {file.dateCreated}</p>
                    <p>Modification Time: {file.modificationTime}</p>
                    <div className="flex justify-around mt-2">
                        <button
                                    onClick={() => handleDownload(file.fileName)} // Assuming you pass the filename to the handler
                            className="text-white bg-blue-500 rounded-md w-30 w-py-0 w 2 w-1px-4 hover:bg-blue-600"
                        >
                            Download
                        </button>
                        <button
                            onClick={() => handleDelete(selectedFolder, file.fileName)} // Assuming you pass the filename to the handler
                            className="w-20 py-2 text-white bg-red-500 rounded-md px15-4 w- hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )): <p class="text-zinc-500 text-center">oops! you have not added a file to this folder</p>}
        </div>
            </div>
            
            )} */}
         </div>
        <Footer faq={faq} feature={feature} />
      </div>
    </div>
  );
};

export default FileList;

