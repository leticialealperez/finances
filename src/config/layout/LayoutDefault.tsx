import React, { ReactNode } from 'react';

import { Container, Grid } from '@mui/material';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useStyles } from './styles';

interface LayoutProps{
    children: ReactNode,
    showHeader: boolean
}

const Layout = ({ children, showHeader }: LayoutProps) => {
  const classes = useStyles();
  
  return (
    <Grid container sx={classes.root}>
      {showHeader && (
        <Grid item xs={12} container sx={classes.header}>
          <Header />
        </Grid>
      )}
      <Grid item xs={12} container>
        <Container>{children}</Container>
      </Grid>

      <Grid item xs={12} container alignItems="flex-end">
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Layout;
