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
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid"

const Single = ({ setIsOpen }) => {
  const { handleFolderClick, fetchFilesForFolder } = useContext(FolderContext);
  const { id } = useContext(AuthContext);
  const {isAdmin} = useContext(AuthContext);
  const { folderName } = useParams();
  const [localFiles, setLocalFiles] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [ dataGrid, setDataGrid ] = useState([]) 
  const [isActive, setIsActive] = useState(false);
  const [hidden, setHidden] = useState({
    display: "none",
  });
  const [alert, setAlert] = useState(false);

  const [message, setMessage] = useState({
    text: "",
    info: "",
  });
  
  const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'uploader_name', headerName:'Author'},
    {field: 'created_at', headerName:'Date'},
    {field: 'doctype', headerName:'Type'},
    {field: 'department', headerName: 'Department'},
    {field: 'document_number', headerName: 'Nos'},
    {field: 'division', headerName:'Division'},
    {field: 'docclass', headerName:'Class'},
    {feild: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          // <GridActionsCellItem
          //   icon={<DownloadIcon />}
          //   label="Edit"
          //   className="textPrimary"
          //   // onClick={handleEditClick(id)}
          //   color="inherit"
          // />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            // onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ]
   
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
      setMessage({ text: "", info: ""});
    }, 1000);
  };
  
  const faq = useRef(null);
  const feature = useRef(null);
  


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
  useEffect(() => {
    const fetchFilesForFolder = async () => {
      try {
        if (!folderName) {
          console.log('Folder name is not provided.');
          return;
        }
  
        // Fetch files for the specified folder
        const response = await axios.get(`http://localhost:8080/api/v1/document/${folderName}`);
        const filesData = response.data.data;
        console.log('Files data:', filesData);
        if (!filesData || filesData.length === 0) {
          console.log('No files in this folder.');
          return;
        }
  
        setDataGrid(filesData);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
  
    fetchFilesForFolder();  // Call the function directly
  
  }, [folderName]);
  

  return (
    <div className="terms-container">
      <div style={hidden}>
        <Modal setIsOpen={handleActive} />
      </div>
      <div className="terms-nav">
        <Nav faq={faq} feature={feature} handleActive={handleActive} />
        
        <div className="terms-contents" style={{display:"flex", flexDirection: "column", marginBottom:"240px", margin:'auto'}}>
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
        <Box
          sx={{
            height: 500,
            width: '100%',
            '& .actions': {
              color: 'text.secondary',
            },
            '& .textPrimary': {
              color: 'text.primary',
            },
          }}
        >
          <DataGrid
          rows={dataGrid}
          columns={columns}
          pageSizeOptions={10}
          checkboxSelection
          />
      </Box>
        </div>
         </div>
        <Footer faq={faq} feature={feature} />
      </div>
    </div>
  );
};

export default Single;

