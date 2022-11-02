import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useTheme } from '@mui/material';

import { useStyles } from './styles';


const Header: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  
  return (
    <div style={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" sx={classes.menuButton} color="inherit" aria-label="menu">
            <CurrencyExchangeIcon fontSize='large'/>
          </IconButton>
          <Typography variant="h6" sx={classes.title}>
            Controle de dinheiro
          </Typography>
          <Typography variant="h6">
            Saldo atual R$
            {' '}
            0,00
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;