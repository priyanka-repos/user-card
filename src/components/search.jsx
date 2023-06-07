import React, { useState } from 'react';
import './cssFiles/userlist.css'
function SearchSection({userList, setSearchResults,setSearchItem}) {


  const searchHandler = (e) =>{
    setSearchItem(e.target.value)
    const filteredResults = userList.filter((val)=> {

        if (e.target.value == "") {
          return val
        }  else if(val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          return val
        }
      }
  );
    setSearchResults(filteredResults)
  }
// console.log("Search results in search::",)

  return (
    <div className='search-bar'> 
      <input 
       type="text" 
       placeholder='Search'
       onChange={searchHandler}
      />
      </div>
  );
}

export default SearchSection;
