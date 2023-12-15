import axios from "axios";
import { useState, useEffect } from "react";
import "../css/modal.css";
import styles from "../css/app.module.css";
import InfoSucess from "./infoSucess";
import InfoDanger from "./infoDanger";
import { Alert } from 'flowbite-react';

import SheetDB from "sheetdb-js";
// import toast from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"

// toast.configure()
const Modal = ({ setIsOpen }) => {

  // const notify = ()=> {
  //   toast("basic notification")
  // }
  const [selectedFile, setSelectedFile] = useState("")
  const [selectedFolder, setSelectedFolder] = useState('uploads'); 
  const [filenames, setFilenames] = useState([]);       
  const [close, setClose] = useState(false)
  const [folderName, setFolderName] = useState("");
  const [alert, setAlert] = useState(false);

  const [message, setMessage] = useState({
    text: "",
    info: "",
  });
  const [inputMessage, setInputMessage] = useState({
    filename: "",
    folder: "",
    documentType: "",
    department:"",
    division:"",
    docclass:"",
    file: "",
  });


  const [formData, setFormData] = useState({
    filename: '',
    folder: '',
    doctype: '',
    department: '',
    division: '',
    docclass: '',
    file: null, // To store the selected file
  });
  
  const handleClose = (index) => {
    setSelectedFile((prevSelectedFiles) => {
      const updatedSelectedFiles = [...prevSelectedFiles];
      updatedSelectedFiles.splice(index, 1);
      return updatedSelectedFiles;
    });
  };
   
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
    }, 500);
  };
  
  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    const { name, value } = e.target;

  // Handle validation here
  if (name === 'filename') {
    if (value.trim() === '') {
      setInputMessage({ ...inputMessage, filename: "File name field is required" });
    } else {
      setInputMessage({ ...inputMessage, filename: "" }); // Clear the error message
    }
  }

  if (name === 'folder') {
    if (value.trim() === '') {
      setInputMessage({ ...inputMessage, folder: "Folder field is required" });
    } else {
      setInputMessage({ ...inputMessage, folder: "" }); // Clear the error message
    }
  }

  if (name === 'documentType') {
    if (value.trim() === '') {
      setInputMessage({ ...inputMessage, documentType: "document typexxxx field is required" });
    } else {
      setInputMessage({ ...inputMessage, documentType: "" }); // Clear the error message
    }
  }

  if (name === 'department') {    
    if (value.trim() === '') {
      setInputMessage({ ...inputMessage, department: "Department field is required" });
    } else {
      setInputMessage({ ...inputMessage, department: "" }); // Clear the error message
    }
  }

  if (name === 'division') {    
    if (value.trim() === '') {
      setInputMessage({ ...inputMessage,  division: "Division field is required" });
    } else {
      setInputMessage({ ...inputMessage, division: "" }); // Clear the error message
    }
  }

  if (name === 'docclass') {    
    if (value.trim() === '') {
      setInputMessage({ ...inputMessage,  docclass: "Docclass field is required" });
    } else {
      setInputMessage({ ...inputMessage, docclass: "" }); // Clear the error message
    }
  }
  
  // Update formData
  setFormData({ ...formData, [name]: value });
  };
  
  const handleFileChange = (e) => {
    const mifile = e.target.files[0];
    if(mifile){
      const newFiles = [...selectedFile, mifile];
      setFilenames(newFiles);
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
      const fileName = mifile.name;
      setFilenames(fileName);
    }

    console.log("file", mifile);
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    
    setInputMessage({
      filename: "",
      folder: "",
      documentType: "",
      department: "",
      division: "",
      docclass: "",
      file: "",
    });
    
    const data2append = new FormData();
    data2append.append('filename', formData.filename);
    data2append.append('folder', formData.folder);
    data2append.append('doctype', formData.doctype);
    data2append.append('department', formData.department);
    data2append.append('division', formData.division);
    data2append.append('docclass', formData.docclass);
    data2append.append('file', formData.file)
    
      for(let i=0; i<formData.file.length; i++) {
    formData.append("file", formData.file[i])
  }
    console.log("folder", selectedFolder);
    console.log("tyofff", typeof(selectedFile));
    console.log("file-bf-postR", selectedFile);

const accessToken = localStorage.getItem('token'); 
console.log('Access Token:', accessToken);

const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${accessToken}`, 
  },
};
console.log('Authorization Header:', config.headers.Authorization);

    try {
      const response = await axios.post('https://upload-api-74qq.onrender.com//api/v1/upload', data2append, config);
  
      console.log("rdata", response.data);
  
      if (response.status === 200 || response.status === 201) {
        // Successful response
        displayMessage("File saved successfully", "success");
        console.log("File saved successfully");
      } else {
        // Handle error here
        console.error('Error response:', response);
      }
        // displayMessage("File saved successfully", "success");
    } catch (error) {
      console.error('Upload error:', error);
      console.error('Type of error:', typeof(error));
      if(!error.response){
        displayErrorMessage("No server response", "danger");
      } else if(error.response?.status === 400) {
        displayErrorMessage("missing user name or password", "danger");
      } else if(error.response?.status === 401) {
        displayErrorMessage("Unauthorized", "danger");
      } else if(error.response?.status === 403) {
        displayErrorMessage("Unauthorized access", "danger");
      } else if(error.response?.status === 404) {
        displayErrorMessage("Not found", "danger");
      }
    }
  };
  const handleRemoveFileName = (index) => {
    alert("something")
    const updatedFileNames = filenames.filter((_, i) => i !== index);
    setFilenames(updatedFileNames);
  };
  return (
    <div className="modal-general-container">
      <InfoSucess alert={alert} message={message} />
      <InfoDanger alert={alert} message={message} />
      <div className="modal-container">
        <div className="modal-wrapper">
          <div className="modal-header">
            <div className="modal-title">
              <p className={styles.root}>Upload a document</p>
              <i>
                <Cancel handleClick={setIsOpen} />
              </i>
            </div>
            <p className="modal-description">
              This platform allows for storing files for in house use only, the link or access to this site should not be exposed to non residents, failure to comply will attract a penalty.
            </p>
          </div>
          <div class="flex items-center justify-center">
          <form
                id="form"
                class="py-6 px-9 w-full"
                onSubmit={handleOnSubmit}
              >
            <div class="mx-auto w-full max-w-[550px] bg-white">
            <div>
                  <label
                    for="filename"
                    class="mb-1 block text-base font-medium text-[#07074D]"
                    name="file_name"
                  >
                    File name:
                  </label>
                  <div class="w-full">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Enter a file name"
                    name="filename"
                    onChange={handleInputChange}
                    value={filenames}
                    disabled
                  />
                    {/* <p className="mt-1 text-sm text-red-600">{inputMessage.filename}</p> */}
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Save file to:
                  </label>
                  <div class="w-full">
                    <select
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                      name="folder"
                      value={formData.folder}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a repository</option>
                      <option value="NDPR">NDPR</option>
                      <option value="PCIDSS">PCIDSS</option>
                      <option value="ISO-27001">ISO-27001</option>
                      <option value="Compliance">Compliance</option>
                      <option value="Organogram">Organogram</option>
                      <option value="Documentations">Documentation and forms</option>
                      <option value="SLA">Service level agreement</option>
                      <option value="TAT">TAT documentation</option>
                      <option value="culture">People and culture management</option>
                      <option value="Information security management">Information security management</option>
                    </select>
                    <p class="mt-1 text-red-600 text-sm">{inputMessage.folder}</p>
                  </div>
                </div>
                <div>
                  <label
                    for="doctype"
                    class="mb-1 block text-base font-medium text-[#07074D]"
                    id="doctype"
                  >
                    Document type:
                  </label>
                  <div class="w-full">
                    <select
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                      name="doctype"
                      value={formData.doctype}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a document type</option>
                      <option value="Standard Operations procedure">Standard Operations procedure</option>
                      <option value="Internal memo">Internal memo</option>
                      <option value="General documents">General document</option>
                    </select>
                    <p class="mt-1 text-red-600 text-sm">{inputMessage.documentType}</p>
                  </div>
                </div>
                <div>
                  <label
                    for="dept"
                    class="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Department:
                  </label>
                  <div class="w-full">
                    <select
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      id="dept"
                    >
                      <option value="">Select a department</option>
                      <option value="operations">Operations</option>
                      <option value="marketing">Marketing</option>
                      <option value="doc3">Enterprise</option>
                      <option value="doc4">VAS</option>
                    </select>
                    <p class="mt-1 text-red-600 text-sm">{inputMessage.department}</p>
                  </div>
                </div>
                <div>
                  <label
                    for="division"
                    class="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Division:
                  </label>
                  <div class="w-full">
                    <select
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                      name="division"
                      value={formData.division}
                      onChange={handleInputChange}
                      id="division"
                    >
                      <option value="">Select a division</option>
                      <option value="division1">division1</option>
                      <option value="division2">division2</option>
                      <option value="division3">division3</option>
                      <option value="division4">division4</option>
                    </select>
                    <p class="mt-1 text-red-600 text-sm">{inputMessage.division}</p>
                  </div>
                </div>
                <div>
                  <label
                    for="docclass"
                    class="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Document class:
                  </label>
                  <div class="w-full">
                    <select
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                      name="docclass"
                      value={formData.docclass}
                      onChange={handleInputChange}
                      id="docclass"
                    >
                      <option value="">Select a document class</option>
                      <option value="classA">class A</option>
                      <option value="classB">class B</option>
                      <option value="classC">class C</option>
                      <option value="classD">class D</option>
                    </select>
                    <p class="mt-1 text-red-600 text-sm">{inputMessage.docclass}</p>
                  </div>
                  
                </div>
                <div class="mb-6 pt-4">
                  <label class="block text-xl font-semibold text-[#07074D]">
                    Upload File
                  </label>

                  <div class="mb-8">
                    <input type="file" name="file" accept=".jpg,.jpeg,.png,.pdf" id="file" class="sr-only" onChange={handleFileChange} aria-required multiple/>
                    <label
                      for="file"
                      class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                    >
                      <div>
                        <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                          Drop files here
                        </span>
                        <span class="mb-2 block text-base font-medium text-[#6B7280]">
                          Or
                        </span>
                        <span
                          class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                        >
                          Browse
                        </span>
                      </div>
                    </label>
                  </div>
                  {filenames.length > 0 && (
                    <DismissableAlert filenames={filenames} setFilenames={setFilenames}/>
                  )}
                  {/* {filenames.map((file, index) => (
                      <div key={index} className="rounded-md bg-[#F5F7FB] py-4 px-8 mb-3">
                        <div className="flex items-center justify-between">
                          <span id={`filename-${index}`} className="truncate pr-3 text-base font-medium text-[#07074D]">
                            {file.name}
                          </span>
                          <button className="text-[#07074D]" onClick={() => handleClose(index)}>
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                                 <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                            fill="currentColor"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                            fill="currentColor"
                          />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))} */}
                
                </div>
                <div>
                  <button
                  // onClick={notify}
                  type="submit"
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Send File
                  </button>
                </div>
               
            </div>
            </form>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Modal;

function Cancel({ handleClick }) {
  return (
    <svg
      onClick={handleClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.35"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.382812 11.75C0.382812 5.26065 5.64347 0 12.1328 0C18.6222 0 23.8828 5.26065 23.8828 11.75C23.8828 18.2393 18.6222 23.5 12.1328 23.5C5.64347 23.5 0.382812 18.2393 0.382812 11.75Z"
        fill="#CCCCCC"
      />
      <path
        d="M17.7647 7.65638L17.2265 7.11823C17.077 6.96873 16.8347 6.96873 16.6852 7.11823L12.6328 11.1706L8.58042 7.11823C8.43092 6.96873 8.18854 6.96873 8.03904 7.11823L7.50089 7.65638C7.35139 7.80588 7.35139 8.04826 7.50089 8.19776L11.5533 12.2501L7.50089 16.3025C7.3514 16.452 7.3514 16.6944 7.50089 16.8439L8.03905 17.382C8.18854 17.5315 8.43093 17.5315 8.58043 17.382L12.6328 13.3296L16.6852 17.382C16.8347 17.5315 17.077 17.5315 17.2265 17.382L17.7647 16.8439C17.9142 16.6944 17.9142 16.452 17.7647 16.3025L13.7123 12.2501L17.7647 8.19776C17.9142 8.04826 17.9142 7.80588 17.7647 7.65638Z"
        fill="black"
        fill-opacity="0.65"
      />
    </svg>
  );
}

function Person() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9848 15.3462C8.11719 15.3462 4.81433 15.931 4.81433 18.2729C4.81433 20.6148 8.09624 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8734 15.3462 11.9848 15.3462Z"
        stroke="#494B83"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38858 4.8716 7.38858 7.40969C7.38001 9.93922 9.42382 11.9973 11.9524 12.0059H11.9848Z"
        stroke="#494B83"
        stroke-width="1.42857"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
function Email() {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9026 10.8511L13.4593 14.4642C12.6198 15.1302 11.4387 15.1302 10.5992 14.4642L6.11841 10.8511"
        stroke="#494B83"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.9089 23C19.9502 23.0084 22 20.5095 22 17.4384V10.57C22 7.49883 19.9502 5 16.9089 5H7.09114C4.04979 5 2 7.49883 2 10.57V17.4384C2 20.5095 4.04979 23.0084 7.09114 23H16.9089Z"
        stroke="#494B83"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
function Location() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 21.5C9.16917 21.499 9.33305 21.4409 9.465 21.335C9.75 21.08 17.25 15.035 17.25 8.75C17.25 6.56196 16.3808 4.46354 14.8336 2.91637C13.2865 1.36919 11.188 0.5 9 0.5C6.81196 0.5 4.71354 1.36919 3.16637 2.91637C1.61919 4.46354 0.75 6.56196 0.75 8.75C0.75 15.035 8.25 21.08 8.535 21.335C8.66695 21.4409 8.83083 21.499 9 21.5ZM2.25 8.75C2.25 6.95979 2.96116 5.2429 4.22703 3.97703C5.4929 2.71116 7.20979 2 9 2C10.7902 2 12.5071 2.71116 13.773 3.97703C15.0388 5.2429 15.75 6.95979 15.75 8.75C15.75 13.475 10.5975 18.3575 9 19.7675C7.4025 18.3575 2.25 13.475 2.25 8.75Z" fill="#494B83" />
    </svg>

  );
}
function Phone() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z"
        stroke="#494B83"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
}

export function DismissableAlert({filenames, setFilenames}) {
  return (
    
    <Alert
      color="success"
      onDismiss={()=>{setFilenames([])}}
    >
      <span>
        <p>
          {filenames}
        </p>
      </span>
    </Alert>
  )
}