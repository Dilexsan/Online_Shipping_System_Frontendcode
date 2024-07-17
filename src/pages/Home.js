import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../App.css'

export default function Home() {

const [details, setDetails]=useState([]);

const {id} =useParams();

useEffect(()=>{

loadDetails ();

},[]);

const loadDetails=async()=>{

    const result= await axios.get("http://localhost:8080/details");
    setDetails(result.data);
};


const deleteDetail=async(id)=>{
    await axios.delete(`http://localhost:8080/detail/${id}`)
    loadDetails();
    

}

  return (

<div>




    <div className='sum1'>

<h1 className='heading mt-2'>Find your nearest shipping job</h1>


<Link class="but " to="/login" > Lets Started</Link>


</div>
    </div>
  );
}
