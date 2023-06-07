import React, {useState} from 'react'

function UserCard({item}) {
    const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="card" onClick={toggleDetails}>
    <p>Name: {item.name}</p>
    <p>Phone Number: {item.phoneNumber}</p>
    {showDetails &&(
      <div>
        <p>City: {item.city}</p>
        <p>State: {item.state}</p>
        <p>Gender: {item.gender}</p>
      </div>
    )}
    
    
  </div>
  )
}

export default UserCard