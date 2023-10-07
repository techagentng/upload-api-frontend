import React, { useState, useEffect, useContext } from 'react';
import folder from "../img/folder.png"
import Nav from "../components/nav";
import Footer from "../components/footer";
import axios from 'axios';
import { useRef } from "react";
import Modal from "../components/modal";
import { useParams } from 'react-router-dom';
import { FolderContext } from '../Contexts/FileContext';
import AuthContext from '../Contexts/AuthProvider';
import { MdOutlineDelete } from "react-icons/md";

const Single = ({ setIsOpen }) => {
  const { handleFolderClick, fetchFilesForFolder } = useContext(FolderContext);
  const { id } = useContext(AuthContext);
  const {isAdmin} = useContext(AuthContext);
  const { folderName } = useParams();
  const [localFiles, setLocalFiles] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [AdditionallData, setAdditionalData] = useState([]);

  
  const [isActive, setIsActive] = useState(false);
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
  
  const handleDelete = async (folderName, filename) => {
    const fileName = encodeURIComponent(filename);
    const url = `http://localhost:8080/api/v1/documents/${folderName}/${fileName}`;
    
    // const encodedFileName = encodeURIComponent(fileName);
    console.log('Deleting file:', folderName, fileName);
    // console.log('Encoded file name:', encodedFileName);
    try {
        await axios.delete(url);
        setLocalFiles(localFiles.filter((file) => file.fileName !== filename));
    } catch (error) {
        console.error('Error deleting file:', error);
    }
};
const generateTableRows = () => {
  const sortedDocuments = [...documents].sort((a, b) => {
    return new Date(b.dateCreated) - new Date(a.dateCreated);
  });

  return (
    <tbody className="text-sm font-light text-gray-600">
    {sortedDocuments?.length > 0 ? (
      sortedDocuments.map((file, index) => (
        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
          <td className="px-4 py-2 style={{ width: '25px' }} text-center">
            {isAdmin && (
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => isAdmin && handleDelete(folderName, file.id)}
              >
                <MdOutlineDelete />
              </button>
            )}      
          </td>
          <td className="px-4 py-3 text-left hover:cursor-pointer">{file.filename}</td>
          <td className="px-4 py-3 text-left hover:cursor-pointer">{file.uploader_name}</td>
          <td className="px-4 py-3 text-left hover:cursor-pointer">{file.document_number}</td>
          <td className="px-4 py-3 text-left hover:cursor-pointer">{file.department}</td>
          <td className="px-4 py-3 text-left hover:cursor-pointer">{file.division}</td>
          <td className="px-4 py-3 text-left hover:cursor-pointer">{file.docclass}</td>
          <td className="px-4 py-3 text-left hover:cursor-pointer">{file.status}</td>
          <td className="px-4 py-3 text-left hover:cursor-pointer">{file.dateCreated}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="10">No files available.</td>
      </tr>
    )}
  </tbody>
  
  );
};


useEffect(() => {
  const fetchFilesForFolder = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/folders/${folderName}/filelist`);
      const filesData = response.data.files;
      // setFiles(filesData);

      if (!filesData || filesData.length === 0) {
        console.log('No files in this folder.');
        // You can display a message or handle this case accordingly
        // For example, set a state to show a message to the user
        // setMessage('No files available for this folder.');
        return;
      }
      const additionalResponse = await axios.get('http://localhost:8080/api/v1/documents'); 
      setAdditionalData(additionalResponse.data.data);
      setDocuments(additionalResponse.data.data);
      console.log("docutype", additionalResponse.data.data)
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  if (folderName) {
    fetchFilesForFolder();
  }
}, [folderName]);

// const canDeleteFile = () => {
//   // Check if the user is an admin or the owner of the file
//   return isAdmin || id === files.id;
// };
// const generateTableRows = () => {
//   const rows = [];
  
//   Object.values(files).forEach((value, index) => {
//     rows.push(
//       <tr key={index}>
//         <td>{value.id}</td>
//         <td>{value.created_at}</td>
//         <td>{value.filename}</td>
//         <td>{value.folder}</td>
//         {/* Add more columns as needed */}
//       </tr>
//     );
//   });

//   return rows;
// };
  return (
    <div className="terms-container">
      <div style={hidden}>
        <Modal setIsOpen={handleActive} />
      </div>
      <div className="terms-nav">
        <Nav faq={faq} feature={feature} handleActive={handleActive} />
        
        <div className="terms-contents" style={{display:"flex", flexDirection: "column", marginBottom:"240px"}}>
        <h1 class="text-3xl mb-4 text-center">{folderName}</h1>
        <section className='mx-auto'>
        <ul>
            <li
              className="overflow-hidden transition-transform transform border border-none rounded-lg cursor-pointer hover:scale-05"
            >
              <img
                src={folder}
                alt="Image1"
                className="w-full"
                onClick={() => handleFolderClick(folderName)}
              />
              
            </li>
        </ul> 
     
        </section>
        <div className="container mx-auto mt-4">
        <div className="my-6 overflow-x-auto bg-white rounded shadow-md">
  <table className="w-full table-auto min-w-max">
    <thead>
      <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
        <th className="px-6 py-3 text-left"></th>
        <th className="px-6 py-3 text-left">File Name</th>
        <th className="px-6 py-3 text-left">Author</th>
        <th className="px-6 py-3 text-left">ID</th>
        <th className="px-6 py-3 text-left">Dept</th>
        <th className="px-6 py-3 text-left">Division</th>
        <th className="px-6 py-3 text-left">Class</th>
        <th className="px-6 py-3 text-left">Status</th>
      </tr>
    </thead>
    {generateTableRows()}
  </table>
</div>

</div>
         </div>
        <Footer faq={faq} feature={feature} />
      </div>
    </div>
  );
};

export default Single;

