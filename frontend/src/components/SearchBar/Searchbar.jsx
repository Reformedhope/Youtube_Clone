import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  function handleVideoSubmit(event) {
    event.preventDefault();
    console.log(search);
    props.searchInput(search);
  }

  return (
    <div className="searchbar">
      <div className="style">
        <form onSubmit={handleVideoSubmit}>
          <div className="">
          <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">💻</span>
          <input type="text" class="form-control" placeholder="Search a video" value={search}
              onChange={(event) => setSearch(event.target.value)}/> 
              <div className="searchbutton">
              <button type="submit">Search Videos</button>
              </div>
        </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
