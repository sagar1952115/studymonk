import React, { useState } from "react";
import "./SearchComponent.css";
import data from "../../data";
import SearchItem from "./SearchItem";

const SearchComponent = () => {
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [res, setRes] = useState([]);
  const [searched, setSearched] = useState(false);
  function filterData(data, location, jobRole) {
    return data.filter((item) => {
      return (
        (location === "" || item.location === location) &&
        (jobRole === "" || item.jobRole === jobRole)
      );
    });
  }

  const getData = () => {
    setSearched(true);
    const info = filterData(data, location, role);
    setRes(info);
  };

  return (
    <div>
      <div className="dropdown-container">
        <div className="dropdown-info">
          Please enter your prefrences for the candidate.
        </div>
        <div className="dropdown-item">
          <select
            onChange={(e) => setLocation(e.target.value)}
            name="Location"
            id="location"
          >
            <option value="">Any Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hydrabad">Hydrabad</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Pune">Pune</option>
          </select>
          <select
            onChange={(e) => setRole(e.target.value)}
            name="Role"
            id="role"
          >
            <option value="">Any Role</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Human Resources Manager">
              Human Resources Manager
            </option>
            <option value="Sales Representative">Sales Representative</option>
            <option value="Marketing Manager">Marketing Manager</option>
            <option value="Financial Analyst">Financial Analyst</option>
          </select>
        </div>
        <button className="search-button" onClick={getData}>
          Search
        </button>
        {/* {res.length > 0 && <SearchItem data={res} />}
        {res.length === 0 && <div>Candidate not available</div>} */}
        {searched && res.length === 0 && (
          <div className="nodata">Candidate not available !!!</div>
        )}
        {searched && res.length > 0 && <SearchItem res={res} />}
      </div>
    </div>
  );
};

export default SearchComponent;
