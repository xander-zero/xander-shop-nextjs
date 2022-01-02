import Head from "next/head";
import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Xander Shop</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Xander Shop</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved Xander Shop</Typography>
      </footer>
    </div>
  );
};

export default Layout;
