import React, { useState } from "react";
import axios from "../api/axios"
import InfoSucess from "../components/infoSucess";
import InfoDanger from "../components/infoDanger";
import logo from "../img/Routepay-Logo-1.svg"
import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../Contexts/AuthContext";
// import useAuth from "../hooks/useAuth";

export default LoginPage;
const LOGIN_URL = "/auth/login";
function LoginPage() {
    // const { authUser, setAuthUser } = useAuthContext();
    // const { authUser, setAuthUser } = useAuthContext();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [alert, setAlert] = useState("")
    // const [isOpen, setIsOpen] = useState("")
    const [message, setMessage] = useState({
      text: "",
      info: "",
    });
    
    const [inputMessage, setInputMessage] = React.useState({
        "email": email,
        "password": password,
      })
const navigate = useNavigate();
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
      
      const handleOnSubmit = async (event) => {
        event.preventDefault();
        if (email.trim().length === 0) {
            setInputMessage({ ...inputMessage, email: "Email field is required" });
            return;
          }
          
          if (password.trim().length === 0) {
            setInputMessage({ ...inputMessage, password: "Password field is required" });
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

          const loginData = {
            email: email,
            password: password,
          };

          try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', loginData, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            console.log("rdata", response.data);
            // const { AccessToken, name } = response.data
            // setAuthUser({ AccessToken, name });
            // console.log("authUser", authUser);
          navigate("/lala")
            
            setTimeout(() => {
              displayMessage("File saved successfully", "success");
            }, 500);
            // navigate('/login');
          } catch (error) {
            console.error('reg error:', error);
            console.error('Type of error:', typeof(error));
            setTimeout(() => {
              displayErrorMessage(error.message, "danger");
            }, 300);
          }
      }
      
  return (
   <>
         <div class="bg-gray-100 flex items-center justify-center h-screen">
         <InfoSucess alert={alert} message={message} />
         <InfoDanger alert={alert} message={message} />
            <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                
                <div class="logo mb-4"><img src={logo} alt="logo" style={{width:"130px"}}/></div>
                <h1 class="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleOnSubmit}>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input onChange={handleEmailChange} type="email" id="email" name="email" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required/>
                        <p class="mt-1 text-red-600 text-sm">{inputMessage.email}</p>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input onChange={handlePasswordChange} type="password" id="password" name="password" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required/>
                        <p class="mt-1 text-red-600 text-sm">{inputMessage.password}</p>
                    </div>
                    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Login</button>
                </form>
                <p className="mt-4 text-sm text-gray-600">
                    If you are registered,{' '}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div> 
    </>
  );
}
