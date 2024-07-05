import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

const CreateAccountPageToggleButtons = () => {
  const [alignment, setAlignment] = React.useState('monthly');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="daily" aria-label="daily">
        <Typography variant='p'>Daily</Typography>
      </ToggleButton>
      <ToggleButton value="monthly" aria-label="monthly">
        <Typography variant='p'>Monthly</Typography>
      </ToggleButton>
      <ToggleButton value="quarterly" aria-label="quarterly">
        <Typography variant='p'>Quarterly</Typography>
      </ToggleButton>
      <ToggleButton value="yearly" aria-label="yearly">
        <Typography variant='p'>Annually</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default CreateAccountPageToggleButtons;