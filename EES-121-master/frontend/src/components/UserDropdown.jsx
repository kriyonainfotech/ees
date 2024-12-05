import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function UserDropdown() {
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'))
  console.log(token, "token profil");

  const fetchData = async () => {
    const backend_API = "http://localhost:3000/auth/getuser"

    try {
      const response = await axios.get(backend_API, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const data = await response.data;
      setProfile(data.user)
      console.log(data, "data Edit");
      if (response.status === 200) {
        console.log("profile Successful...");
      }
    } catch (error) {
      console.log(error);
      return false;
    }

  }


  useEffect(() => {
    fetchData()
  }, [])


  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/login'); // Redirect to login
  };

  return (
    <>
      <div className="dropdown dropdown-end rounded-lg m-3 border bg-red">
        <div tabIndex={0} role="button" className="">
          <div class="img w-[60px] h-[50px] rounded-lg border bg-red overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-full h-full' />
          </div>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <h3>{profile.name}</h3>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={handleLogout}>logout</button>
          </li>
        </ul>
      </div>
      
     
      
    </>
  );
}

export default UserDropdown;
