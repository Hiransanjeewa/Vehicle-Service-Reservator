import React from 'react';

function UserProfile() {
  const userData = {
    username: 'exampleUser',
    name: 'John Doe',
    email: 'johndoe@example.com',
    contactNumber: '+1234567890',
    country: 'United States',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px',marginLeft : '29%' }}>
        <div style={{ textAlign: 'center' , width: 500, backgroundColor :'lavender' }}>

        
      <h1>Your Profile</h1>
      <div>
        <table style={{ textAlign: 'left' , marginLeft : 100}}>
            <tr>
                <td><strong>Username:</strong></td>
                <td>{userData.name}</td>
            </tr>
            <tr>
                <td><strong>Email:</strong></td>
                <td>{userData.email}</td>
            </tr>
            <tr>
                <td><strong>Contact Number:</strong></td>
                <td>{userData.contactNumber}</td>
            </tr>
            <tr>
                <td><strong>Country:</strong></td>
                <td>{userData.country}</td>
            </tr>
        </table>
       
      
      </div>
      </div>
    </div>
  );
}

export default UserProfile;
