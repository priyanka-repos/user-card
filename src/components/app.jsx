import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserForm from './userform';
import UserList from './userlist';
import './app.css'
import DashBoard from './dashboard';
import {useState} from 'react'
function App() {
    const [userList, setUserList] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [searchItem, setSearchItem] = useState("")
  return (
    <BrowserRouter >
      <nav className='nav'>
        <ul className='list'>
          <li>
            <Link to="/">User Form</Link>
          </li>
          <li>
            <Link to="/users">User List</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
     { console.log("Search results",searchResults)}

      <Routes>
        <Route path="/" exact element={<UserForm setUserList={setUserList}/>} />
        <Route path="/users" element={<UserList userList={userList} searchResults={searchResults} setSearchResults={setSearchResults} searchItem={searchItem} setSearchItem={setSearchItem}/>} />
        <Route path='/dashboard' element={<DashBoard userList={userList}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;