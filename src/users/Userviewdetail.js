import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function Userviewdetail() {

    const [detail,setDetail]=useState({

        name:"",
        area:"",
        amount:"",
        location:"",
        phone:""

    });

    const  {id}=useParams();

    useEffect(()=>{

        loadDetail();
    },[]);



    const loadDetail=async()=>{

            const result=await axios.get(`http://localhost:8080/detail/${id}`)
            setDetail(result.data);

    }

  return (


    <div className="view-detail-container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4"> Full Details</h2>

            <div className="card">
                <div className="card-header">
                    <ul className="list-group list-group-flush">
                       
                        <li className="list-group-item">
                            
                           <b>Name of the property : </b> 
                           {detail.name}

                
                        </li>


                        <li className='list-group-item'>
                            
                           <b>Starting Location : </b> 
                           {detail.area}
                
                        </li>


                        <li className='list-group-item'>
                            
                           <b>Amount : </b> 
                           {detail.amount}
                
                        </li>


                        <li className='list-group-item'>
                            
                           <b>Depature Location : </b> 
                           {detail.location}
                
                        </li>

                        <li className='list-group-item'>
                            
                           <b>Phone : </b> 
                           {detail.phone}
                
                        </li>


                     </ul>
                </div>

            </div>
                <Link className='btn btn-primary my-2' to={"/afterlogin"}>Back </Link>
            </div>
            </div>
            </div>

  )  

}

export default Userviewdetail