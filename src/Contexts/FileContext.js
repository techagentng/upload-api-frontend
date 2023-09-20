// // FileContext.js
// import React, { createContext, useContext, useState } from "react";

// const FileContext = createContext();

// export const FileProvider = ({ children }) => {
//     const [files, setFiles] = useState([]);

//     return (
//         <FileContext.Provider value={{ files, setFiles }}>
//             {children}
//         </FileContext.Provider>
//     );
// };

// export const useFileContext = () => useContext(FileContext);
import { createContext, useState } from 'react';

const FolderContext = createContext();

const FolderProvider = ({ children }) => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderClick = (folderName) => {
    console.log('Folder clicked:', folderName);
    setSelectedFolder(folderName);
    // Navigate or do other actions as needed
  };

  return (
    <FolderContext.Provider value={{ selectedFolder, handleFolderClick }}>
      {children}
    </FolderContext.Provider>
  );
};

export { FolderContext, FolderProvider };
