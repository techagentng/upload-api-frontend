// FileContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FolderContext = createContext();

const FolderProvider = ({ children }) => {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [files, setFiles] = useState([]);

//   const fetchFilesForFolder = async (folderName) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/v1/folders/${folderName}/filelist`);
//       setFiles(response.data.files);
//     } catch (error) {
//       console.error('Error fetching files:', error);
//     }
//   };

  const handleFolderClick = (folderName) => {
    console.log('Folder clicked:', folderName);
    setSelectedFolder(folderName);
  };

  return (
    <FolderContext.Provider value={{ selectedFolder, handleFolderClick, files, }}>
      {children}
    </FolderContext.Provider>
  );
};

export { FolderContext, FolderProvider };
