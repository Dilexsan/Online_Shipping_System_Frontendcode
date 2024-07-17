import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import "./Login.js";
import "./Userviewdetail";

function Afterlogin() {
  const [details, setDetails] = useState([]);
  const [displayedDetails, setDisplayedDetails] = useState([]);
  const [searchArea, setSearchArea] = useState("");   const [showAllDetails, setShowAllDetails] = useState(false);

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    const result = await axios.get("http://localhost:8080/details");
    setDetails(result.data);
  };

  useEffect(() => {
    if (showAllDetails) {
      setDisplayedDetails(details);
    } else {
      setDisplayedDetails(details.slice(0, 6)); 
    }
  }, [details, showAllDetails]);

  

  const filteredDetails = details.filter((detail) =>
    detail.area.toLowerCase().includes(searchArea.toLowerCase())
  );

  return (
    <div className="back">
      <Link type="button" className="btn btn-outline-dark navbutton m-5 " to="/">
        Logout
      </Link>

      <div className="search-container offset-md-7">
        <input
          type="text"
          placeholder="Search by Area"
          value={searchArea}
          onChange={(e) => setSearchArea(e.target.value)}
        />
      </div>

      <div className="grid-container">
        {filteredDetails.map((detail, index) => (
          <div class="card boxx grid-item" key={detail.id}>
            <div class="card-body detail">
              <h5 class="card-title">{detail.name}</h5>
              <div>
                <p class="card-text">Area: {detail.area}</p>
              </div>
              <p class="card-text">Amount: {detail.amount}</p>
              <Link
                className="btn btn-info m-2"
                style={{ width: "100px", padding: "10px" }}
                to={`/viewdetail/${detail.id}`}
              >
                Full Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Afterlogin;
