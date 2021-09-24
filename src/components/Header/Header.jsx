

import React from 'react';
import { AppBar, IconButton, SvgIcon, Toolbar, Typography } from '@material-ui/core';
import { HomeOutlined, SportsSoccer } from '@material-ui/icons';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography sx={{ flexGrow: 1, display: 'flex', alignItems: 'center'}} variant="h5">
          <SvgIcon sx={{ mr: 1 }}>
            <SportsSoccer />
          </SvgIcon>
          My Awesome Project
        </Typography>
        <IconButton color="inherit">
          <HomeOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
