
import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Box } from '@mui/material';


interface AppAlertProps{
    type: 'error' | 'info' | 'success' | 'warning',
    message: string,
    show?: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

// ALERTA CRIADO PARA USO NO APP
const AppAlert = ({ type, message, show, setShow }: AppAlertProps) => {

  const handleClose = () => {
    setShow(false)
  }

  return (
    <Box>
      <Snackbar open={show} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}>
        <Alert elevation={6} variant="filled" severity={type} onClose={handleClose} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export { AppAlert };