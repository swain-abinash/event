import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const ExploredButton = ({ onClick }) => {
  return (
    <ExploreButton variant="contained" onClick={onClick}>
      Explore
    </ExploreButton>
  );
};


const ExploreButton = styled(Button)({
  backgroundColor: '#3b5998',
  color: '#ffffff',
  textTransform: 'none',
  fontWeight: 'bold',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#334d84',
  },
  '&:focus': {
    outline: 'none',
  },
});
export default ExploredButton;