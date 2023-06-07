import { React, useState } from "react";
import SearchSection from "./search";
import "./cssFiles/userlist.css";
import UserCard from "./UserCard";
const UserList = (props) => {
  return (
    <div>
      <SearchSection
        userList={props.userList}
        setSearchResults={props.setSearchResults}
        setSearchItem={props.setSearchItem}
      />
      <div className="card-container">
        {props.searchItem === ""
          ? props.userList.map((item) => {
              return <UserCard item={item} key={item.name} />;
            })
          : props.searchResults.map((item) => {
              return <UserCard item={item} key={item.name} />;
            })}
      </div>

    </div>
  );
};

export default UserList;
