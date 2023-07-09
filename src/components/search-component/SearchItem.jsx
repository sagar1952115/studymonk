import React from "react";

const SearchItem = ({ res }) => {
  return (
    <div>
      <table className="searchitem-container">
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Role</th>
        </tr>

        {res.map((curr) => {
          return (
            <tr className="search-box">
              <td>{curr.name}</td>
              <td>{curr.location}</td>
              <td>{curr.jobRole}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default SearchItem;
