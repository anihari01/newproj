import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor(props) {
    const {color} = props;
    
    return (
    <Stack sx={{ color: {color} }} spacing={2} direction="row">
      
      <CircularProgress color="inherit" />
    </Stack>
  );
}