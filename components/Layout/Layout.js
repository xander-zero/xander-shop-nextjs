import Head from "next/head";
import React from "react";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
// useStyles
import useStyles from "../../utils/styles";

const Layout = ({ title, children, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title> {title ? `${title - "Xander Shop"}` : "Xander Shop"}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Xander Shop</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <div className={classes.navLink}>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </div>
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
