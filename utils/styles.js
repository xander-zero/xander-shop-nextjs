import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#FFFFFF",
      marginLeft: "10px",
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
    marginTop: "10px",
  },
  section: {
    marginTop: "10px",
    marginBottom: "10px",
  },
});

export default useStyles;
