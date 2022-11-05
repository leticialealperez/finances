import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useTheme } from '@mui/material';

import { useStyles } from './styles';
import { useAppSelector } from '../../store/modules/hooks';
import { selectIncomeIn } from '../../store/modules/income-out/incomeOutSlice';


const Header: React.FC = () => {
  const [total, setTotal] = useState(0);
  const incomeInGlobal = useAppSelector(selectIncomeIn);
  const incomeOutGlobal = useAppSelector((estadoGlobal) => estadoGlobal.incomeOut);

  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    const somaEntradas = incomeInGlobal.reduce((acc, next) => {
      return acc + Number(next.value)
    }, 0)

    const somaSaidas = incomeOutGlobal.reduce((acc, next) => {
      return acc + Number(next.value)
    }, 0)

    setTotal(somaEntradas - somaSaidas);

  }, [incomeInGlobal, incomeOutGlobal])
  
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
            {total.toFixed(2)}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;