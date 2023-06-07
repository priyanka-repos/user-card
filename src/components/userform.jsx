import React, { useState } from "react";
import UserList from "./userlist";
import './cssFiles/userform.css'
// import './userform.css'

const UserForm = (props) => {
    const [user,setUser] = useState({
        name: '',
        city: '',
        state: '',
        gender: '',
        phoneNumber: ''
    })


const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, such as saving the user data
    const abc = {
        "name": (user.name),
        "city": (user.city),
        "state": (user.state),
        "gender": (user.gender),
        "phoneNumber": (user.phoneNumber)
    }
    setUser({
      name: "",
      city: "",
      state: "",
      gender: "",
      phoneNumber: "",
    });
    // <UserList abc= {abc}/>
    console.log(abc);
    
    props.setUserList((prev)=>{
      return [...prev, abc]
    })

  };

  return (
    <div className="user-form">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
        <div >
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={user.state}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={user.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" >Enter</button>
 
        </div>
             </form>
    </div>
  );
};

export default UserForm;