import React from "react";
import logo from "../img/Routepay-Logo-1.svg"
import InfoSucess from "../components/infoSucess";
import InfoDanger from "../components/infoDanger";
import Password from "antd/lib/input/Password";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default RegisterPage;

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [alert, setAlert] = useState("")
  // const [isOpen, setIsOpen] = useState("")
  const [message, setMessage] = useState({
    text: "",
    info: "",
  });
  
  const [inputMessage, setInputMessage] = React.useState({
    "name": name,
    "telephone": telephone,
    "email": email,
    "password": password,
    "confirmPassword": confirmPassword,
  })

  const handleNameChange = (e) => {
    const selectedUsername = e.target.value 
    // setSelectedFileName(selectedFileName);
      if (e.target.value.trim().length === 0) {
        setInputMessage({ ...inputMessage, filename: "User name field is required" });
      } else {
        setInputMessage({ ...inputMessage, filename: "" });
      }
    
    const userName = selectedUsername;
    setName(userName);
  }; 
  
  const handlePhoneChange = (e) => {
    const selectedTelephone = e.target.value 
    // setSelectedFileName(selectedFileName);
      if (e.target.value.trim().length === 0) {
        setInputMessage({ ...inputMessage, telephone: "Phone number field is required" });
      } else {
        setInputMessage({ ...inputMessage, telephone: "" });
      }
    
    const telephone = selectedTelephone;
    setTelephone(telephone);
  }; 

  const handleEmailChange = (e) => {
    const selectedEmail = e.target.value 
    // setSelectedFileName(selectedFileName);
      if (e.target.value.trim().length === 0) {
        setInputMessage({ ...inputMessage, email: "Email field is required" });
      } else {
        setInputMessage({ ...inputMessage, email: "" });
      }
    
    const email = selectedEmail;
    setEmail(email);
  }; 
  
  const handlePasswordChange = (e) => {
    const selectedPassword = e.target.value 
    // setSelectedFileName(selectedFileName);
      if (e.target.value.trim().length === 0) {
        setInputMessage({ ...inputMessage, Password: "Password field is required" });
      } else {
        setInputMessage({ ...inputMessage, Password: "" });
      }
    
    const email = selectedPassword;
    setPassword(email);
  }; 
  
  const handleConfirmPassword = (e) => {
    const selectedConfirmPassword = e.target.value 
    // setSelectedFileName(selectedFileName);
      if (e.target.value.trim().length === 0) {
        setInputMessage({ ...inputMessage, Password: "Password field is required" });
      } else {
        setInputMessage({ ...inputMessage, Password: "" });
      }
  
    const conPassword = selectedConfirmPassword;
    setConfirmPassword(conPassword);
  }; 
  
  const handleOnSubmit = async (event) => {
        event.preventDefault();
        
        if (name.trim().length === 0) {
          setInputMessage({ ...inputMessage, username: "Username field is required" });
          return;
        }
        
        if (telephone.trim().length === 0) {
          setInputMessage({ ...inputMessage, telephone: "Telephone field is required" });
          return;
        }
        
        if (email.trim().length === 0) {
          setInputMessage({ ...inputMessage, email: "Email field is required" });
          return;
        }

        if (password.trim().length === 0) {
          setInputMessage({ ...inputMessage, password: "Password field is required" });
          return;
        }

        if (confirmPassword.trim().length === 0) {
          setInputMessage({ ...inputMessage, confirmPassword: "Confirm password field is required" });
          return;
        }
        
        if (password !== confirmPassword) {
          setInputMessage({ ...inputMessage, confirmPassword: "Password does not match" });
          return;
        }
        
        const displayMessage = (text, info) => {
          setAlert(true);
          setMessage({ text: text, info: info });
          setTimeout(() => {
            setAlert(false);
            setMessage({ text: "", info: "" });
            // setIsOpen();
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
      
        console.log("username", name);
        console.log("telephone", typeof(telephone));
        console.log("email", email);
        
        const userData = {
          name: name,
          telephone: telephone,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        };
        
        try {
          const response = await axios.post('https://upload-api-74qq.onrender.com/api/v1/auth/signup', userData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          console.log("rdata", response.data);
      
        setAlert(true)
          
          setTimeout(() => {
            displayMessage("File saved successfully", "success");
          }, 500);
          navigate('/login');
        } catch (error) {
          console.error('reg error:', error);
          console.error('Type of error:', typeof(error));
          setTimeout(() => {
            displayErrorMessage(error.message, "danger");
          }, 300);
        }
  };
      
  return (
   <>
         <div class="bg-gray-100 flex items-center justify-center h-screen">
         <InfoSucess alert={alert} message={message} />
         <InfoDanger alert={alert} message={message} />
            <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                
                <div class="logo mb-4"><img src={logo} alt="logo" style={{width:"130px"}}/></div>
                <h1 class="text-2xl font-semibold mb-4">Register</h1>
                <form onSubmit={handleOnSubmit}>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Name</label>
                        <input onChange={handleNameChange} value={name} type="text" id="name" name="name" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required />
                        <p class="mt-1 text-red-600 text-sm">{inputMessage.username}</p>
                    </div>
                    <div class="mb-4">
                        <label for="phoneNumber" class="block text-gray-600 text-sm font-medium mb-2">Phone Number</label>
                        <input onChange={handlePhoneChange} value={telephone} type="tel" id="phoneNumber" name="telephone" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required/>
                        <p class="mt-1 text-red-600 text-sm">{inputMessage.telephone}</p>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input onChange={handleEmailChange} value={email} type="email" id="email" name="email" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required/>
                        <p class="mt-1 text-red-600 text-sm">{inputMessage.email}</p>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input onChange={handlePasswordChange} type="password" id="password" name="password" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required/>
                        <p class="mt-1 text-red-600 text-sm">{inputMessage.Password}</p>
                    </div>
                    <div class="mb-4">
                        <label for="confirmPassword" class="block text-gray-600 text-sm font-medium mb-2">Confirm Password</label>
                        <input onChange={handleConfirmPassword} type="password" id="confirmPassword" name="confirmPassword" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required />
                        <p class="mt-1 text-red-600 text-sm">{inputMessage.confirmPassword}</p>
                    </div>
                    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Register</button>
                </form>
                <p className="mt-4 text-sm text-gray-600">
                    If you are registered,{' '}
                    <a href="/login" className="text-blue-500 hover:underline">
                        login
                    </a>
                </p>
            </div>
        </div> 
    </>
  );
}
