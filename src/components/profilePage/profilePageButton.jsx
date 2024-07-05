// import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

const ProfilePageButton = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // signup logic

    navigate('/dashboard');
  };


  return (
      <Button 
        onClick={handleSignup}
        variant="contained"
        style={{
            display: 'flex',
            marginTop: 3,
            marginBottom: 1,
            marginLeft: 2,
            marginRight: 2,
            width: "633px",
            height: "50px",
        }}>Confirm</Button>
  );
}

export default ProfilePageButton;