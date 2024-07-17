import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import './Signup.css';
import Footer from "../layout/Footer";


function Login() {
  let navigate = useNavigate();

  const [users, setusers] = useState([]);
  const [correctuser,setcorrectuser]= useState();
  const [loginUserName, setloginUserName] = useState();
  const [loginPassword, setloginPassword] = useState();

  const [showWrongMessage, setShowWrongMessage] = useState(false);




  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(
      "http://monorail.proxy.rlwy.net:18314/signups"
    );
    setusers(result.data);
  };

  const handleClick = () => {

    const foundUser = users.find((user) => user.username === loginUserName && user.password === loginPassword);
  
    if (foundUser) {

      if(loginUserName==="dilexsan"){

        setcorrectuser(foundUser);
        navigate(`/adminview`);

      }else{

        setcorrectuser(foundUser);
        navigate(`/afterlogin`);

      }

     
    }

    else{ 
  
      alert("Please enter the correct password")
      setShowWrongMessage(true);

     }

  };


  return (
    <div className="back">
    <div className="logindesign">
    <div className="container" >
      <div className="row">
        <div className="col-md-6 offset-md-7   border rounded p-4 mt-2">
        <form>
          <h3 className="m-4"><u><b>Login</b></u></h3>
          <br></br>
          <div className="mb-2">
            <label htmlFor="username"></label>
            <input
              type="username"
              placeholder="Enter UserName"
              className="form-control"
              name="loginUserName"
              value={loginUserName}
              onChange={(e) => setloginUserName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              name="loginPassword"
              value={loginPassword}
              onChange={(e) => setloginPassword(e.target.value)}
            />
          </div>
         
          <div className="d-grid">

            <button
              className='btn btn-outline-primary'
              onClick={handleClick}
            >
              SignIn
            </button>

            {showWrongMessage && (
                <p className="text-danger">Username and password are wrong.</p>
              )}

          </div>
        </form>
        </div>
      </div>

     
    </div>

    </div>
    </div>
  );
}

export default Login;
