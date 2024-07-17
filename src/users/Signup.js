import axios from 'axios';
import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';

import './Signup.css';

function Signup()  {
  
  let navigate=useNavigate();

  const [signup,setSignup]=useState({

      username:"",
      email:"",
      password:""

  });


  const {username,email,password}=signup;

  const onInputChange=(e)=>{

      setSignup({...signup,[e.target.name]:e.target.value});
  };



  const onSubmit = async (e) => {
    e.preventDefault();
  
    let valid = true;
  
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all the required fields");
      valid = false;
    } else {
      if (username.length < 4) {
        alert("Enter a different username (at least 4 characters");
        valid = false;
      }
  
      if (password.length < 8) {
        alert("Enter a valid password (at least 8 characters)");
        valid = false;
      }
  
      if (email.length < 10) {
        alert("Enter a valid email ");
        valid = false;
      }
    }
  
    if (valid) {
      const usernameCheck = await axios.get("http://monorail.proxy.rlwy.net:18314/signups",signup);
      
      if (usernameCheck.data.exist) {
        alert("Username is already in use. Please choose another one.");
      } else {
        await axios.post("http://monorail.proxy.rlwy.net:18314/signup", signup);
        navigate("/login");
      }
    }
  };
  


  return(

    <div className='back'>
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-7 border rounded p-4 mt-2">
            <h2 className="text-center m-5"><b><u>Signup</u></b>  </h2>

            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
                <label htmlForfor="Username" className="form-label"></label>
                <input type={"text"} 
                className="form-control"
                 name="username"
                 value={username}
                 onChange={e=>onInputChange(e)}
                placeholder="Enter your username" />
            </div>



          <div className="mb-3">
                <label htmlForfor="Email" className="form-label"></label>
                <input 
                type={"text"} 
                className="form-control"
                 name="email"
                 value={email}
                 onChange={e=>onInputChange(e)}

                placeholder="Enter your Email" />
           </div>


          <div className="mb-4">
                <label htmlForfor="Password" className="form-label"></label>
                <input 
                type={"password"} 
                className="form-control"
                 name="password"
                 value={password}
                 onChange={e=>onInputChange(e)}
                
                placeholder="Enter your Password" />
           </div>


       
         <button type='submit' className='btn btn-outline-primary'>
            Sign in
            </button>

            <Link className='btn btn-outline-danger mx-2' to="/">
            Cancel
            </Link>
            
            </form>
        </div>
    </div>  
    </div>

</div>
  
  )

  
      
}

export default Signup;
