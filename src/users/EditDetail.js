import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link,useNavigate, useParams } from 'react-router-dom';

function EditDetail() {


    let navigate=useNavigate();

    const {id}=useParams();

    const [detail,setDetail]=useState({

        name:"",
        area:"",
        amount:"",
        location:"",
        phone:""

    });


    const {name,area,amount,location,phone}=detail;

    const onInputChange=(e)=>{

        setDetail({...detail,[e.target.name]:e.target.value});
    };


        useEffect(()=>{

                loadDetail();

        },[]);

    const onSubmit=async(e)=>{


        e.preventDefault();


        let valid = true;
  
        if (name === "" || area === "" || amount === ""||location === ""||phone === "") {
          alert("Please fill in all the required fields");
          valid = false;
        }
        
        else {


            const a = Number(amount);
          if (!Number.isInteger(a)) {
            alert("enter like 10000 ");
            valid = false;
          }
      
          const b = Number(phone);
          if (phone.length !==10||!Number.isInteger(b)) {
            alert("Enter like 0761234567 ");
            valid = false;
          }
        }

        if(valid){
            await axios.put(`http://localhost:8080/detail/${id}`,detail);
            navigate("/adminview");
        }
     
    };


const loadDetail=async()=>{

    const result =await axios.get(`http://localhost:8080/detail/${id}`);
    setDetail(result.data);
};





  return (

    <div className='back'>
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-7 border rounded p-4 mt-2">
            <h2 className="text-center m-4">Edit Details</h2>

            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
                <label htmlForfor="Name" className="form-label">Name of the property</label>
                <input type={"text"} 
                className="form-control"
                 name="name"
                 value={name}
                 onChange={e=>onInputChange(e)}
                placeholder="Enter your Name" />
        </div>



        <div className="mb-3">
                <label htmlForfor="Area" className="form-label">Starting Location</label>
                <input 
                type={"text"} 
                className="form-control"
                 name="area"
                 value={area}
                 onChange={e=>onInputChange(e)}

                placeholder="Enter location" />
        </div>




        <div className="mb-3">
                <label htmlForfor="Amount" className="form-label">Amount</label>
                <input 
                type={"text"} 
                className="form-control"
                 name="amount"
                 value={amount}
                 onChange={e=>onInputChange(e)}

                placeholder="Enter Amount" />
        </div>


        <div className="mb-3">
                <label htmlForfor="Location" className="form-label"> Depature Location</label>
                <input 
                type={"text"} 
                className="form-control"
                 name="location"
                 value={location}
                 onChange={e=>onInputChange(e)}

                placeholder="Enter Location" />
        </div>



        <div className="mb-3">
                <label htmlForfor="Phone" className="form-label">Phone No</label>
                <input 
                type={"text"} 
                className="form-control"
                 name="phone"
                 value={phone}
                 onChange={e=>onInputChange(e)}

                placeholder="Enter Phone No " />
        </div>


        <button type='submit' className='btn btn-outline-primary' >
            Submit
            </button>
            
            <Link className='btn btn-outline-danger mx-2' to="/adminview">
            Cancel
            </Link>
            
            </form>
</div>
    </div>  

</div>
</div>

    )
}

export default EditDetail