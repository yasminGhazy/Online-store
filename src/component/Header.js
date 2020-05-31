import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RefreshIcon from '@material-ui/icons/Refresh';
import Logout from './Logout';
import { useHistory } from 'react-router-dom'

export default function Header(props) {
  const history = useHistory();

  const { classes, open } = props;

  const doLogout = () => {
    // navigate to login page
    Logout(history)
  }

  return (

    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.onClick}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          home
          </Typography>
        <div className={classes.grow} />

        <IconButton
          style={{ color: '#fff' }}
          component="span">
          <RefreshIcon />
        </IconButton>

        <IconButton
          onClick={doLogout}
          style={{ color: '#fff' }}
          component="span">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

  );
}
