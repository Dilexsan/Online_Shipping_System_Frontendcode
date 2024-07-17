import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
import './Login.js';

function Adminview() {
  const [details, setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    const result = await axios.get('http://localhost:8080/details');
    setDetails(result.data);
  };

  const deleteDetail = async (id) =>{
    const shouldDelete = window.confirm('Please confirm the delete operation');

    if (shouldDelete) {
      await axios.delete(`http://localhost:8080/detail/${id}`);
      loadDetails();
    }
  }

  const searchDetails = () => {
    const filteredDetails = details.filter((detail) =>
      detail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      detail.area.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDetails(filteredDetails);
  }

  return (
    <div className='back'>

<Link type="button" className="btn btn-outline-dark  navbutton m-5 " to="/">
          Logout
        </Link>

<div>

        <Link type="button" className="btn btn-outline-dark add " to="/adddetails">
          Add Details
        </Link>
      </div>

      

      <div className="mb-3 mt-5 offset-md-7">

            <input
              type="text"
              className="form-control input"
              placeholder="You can search here  "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="btn btn-primary mt-2 add search" onClick={searchDetails}>
              Search
            </button>
        
          </div>

      <div className="container">
        <div className='py-4'>
          

          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name of the property</th>
                <th scope="col">Starting Location</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail, index) => (
                <tr key={detail.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{detail.name}</td>
                  <td>{detail.area}</td>
                  <td>{detail.amount}</td>
                  <td>
                   
                    <Link className="btn btn-info m-2 " style={{ width: '60px', padding:'10px'  }}  to={`/editdetail/${detail.id}`}>
                      Edit
                    </Link>
                    <button className="btn btn-info  m-2"  style={{ width: '60px', padding:'10px'  }} onClick={() => deleteDetail(detail.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
    </div>
  );
}

export default Adminview;
