import React from 'react'

import Table from 'react-bootstrap/Table'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
const Profile = () => {

  const { authState: { user } } = useContext(AuthContext)
 
    return (
        
        <div className = 'mt-4 container'>
             <Table striped bordered hover className = "container">
  <thead>
    <tr>
      <th>#</th>
      <th>full Name</th>
      <th>_id</th>  
              <th>password</th>
              <th>createdAt</th>

              
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
              <td>{user.username}</td>
              <td>{user._id}</td>
            <td></td>
            <id>{user.createdAt}</id>
    </tr>

  </tbody>
</Table>
            
            
           </div>
            
        
      
    )
}

export default Profile
