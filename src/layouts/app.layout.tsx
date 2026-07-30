import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as classes from './app.layout.styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { linkRoutes } from '#core/router/routes.js';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to={linkRoutes.characterCollection} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6">Character App - Ejercicio 02</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
