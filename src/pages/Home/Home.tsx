/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { DataTable } from '../../components/Data-Table/DataTable';
import { Incomes } from '../Register/Register';
import { useAppSelector } from '../../store/modules/hooks';


export default function Home() {
  const navigate = useNavigate();
  const incomeInGlobal = useAppSelector((estadoGlobal) => estadoGlobal.incomeIn);
  const incomeOutGlobal = useAppSelector((estadoGlobal) => estadoGlobal.incomeOut);
  

  const handleClick = () => {
    navigate({ pathname: '/register'})
  };

  return (
    <Grid item>
      <Grid item container spacing={2}>
        <Grid item xs={12} md={6}>
          <DataTable title="Entradas" data={incomeInGlobal} /> 
        </Grid>

        <Grid item xs={12} md={6}>
          <DataTable title="Saídas" data={incomeOutGlobal} />
        </Grid>
      </Grid>

      <Fab color="primary" aria-label="add" onClick={() => handleClick()}>
        <Add />
      </Fab>
    </Grid>
  );
}