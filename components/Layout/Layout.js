import Head from "next/head";
import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
// useStyles
import useStyles from "../../utils/styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Xander Shop</title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography>Xander Shop</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved Xander Shop</Typography>
      </footer>
    </div>
  );
};

export default Layout;
