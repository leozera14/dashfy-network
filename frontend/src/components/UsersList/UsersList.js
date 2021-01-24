import React from 'react';
import { useHistory } from 'react-router-dom'; 
import { MdInsertPhoto } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import './users-style.css';


export default function UsersList(props) {
  const users = props.users;

  const history = useHistory();
  

  async function goToUser(id) {
     localStorage.setItem('user-id', id);
    try {
       setTimeout(() => {
        toast.success("Redirecting to User Profile");
        history.push(`/profile/${id}`)
      }, 2000)
    } catch (error) {
      toast.error(`${error}`);
    }
  }

  return (
    <div className="container-users">  
      <div className="titles">

        <div className="titles-content">
          <MdInsertPhoto 
          size={40}
          color='rgb(252,121,71)'
          />
        </div>

        <div className="titles-content">
          <p>Name</p>
        </div>

        <div className="titles-content">
          <p>Current Position</p>
        </div>

        <div className="titles-content">
          <p>City</p>
        </div>

        <div className="titles-content">
          <p>Country</p>
        </div>
      </div>

      {users.map(user => (
        <div className="users" key={user.id} onClick={() => goToUser(user.id)}>

          <div className="users-content">
            <img src={user.avatar} alt=""/>
          </div>

          <div className="users-content">
            <p>{user.name}</p>
          </div>

          <div className="users-content">
            <p>{user.current_position}</p>
          </div>

          <div className="users-content">
            <p>{user.city}</p>
          </div>

          <div className="users-content">
            <p>{user.country}</p>
          </div>               
        </div>
      ))}
      <ToastContainer />
    </div>
  )
}