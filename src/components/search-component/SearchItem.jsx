import React from "react";

const SearchItem = ({ data }) => {
  return (
    <div>
      <div className="searchitem-container">
        {data.map((curr) => {
          return (
            <table className="search-box">
              <td className="name">{curr.name}</td>
              <tr className="location">{curr.location}</tr>
              <tr className="role">{curr.jobRole}</tr>
            </table>
          );
        })}
      </div>
      <div className="name"></div>
      <div className="location"></div>
      <div className="role"></div>
    </div>
  );
};

export default SearchItem;
