import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../Components/assets/images/logo.png";
import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  //   font-family: Roboto;
  // font-size: 16px;
  // font-weight: 400;
  // line-height: 18px;
  // letter-spacing: 0em;
  // text-align: left;

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary" elevation={0}>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              alignItems: "start",
              fontFamily: "Roboto",
              // flexWrap: "wrap",
              // flexDirection: isSmallScreen ? "row" : "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexGrow: 1,
                flexDirection: isSmallScreen ? "row" : "column",
              }}
            >
              <Toolbar disableGutters sx={{ flexGrow: 1 }}>
                <img
                  src={logo}
                  alt="logo"
                  sx={{
                    width: isSmallScreen ? "67px" : "44px",
                    height: isSmallScreen ? "48px" : "32px",
                  }}
                />
                <Typography
                  variant="h1"
                  component="h5"
                  sx={{
                    fontSize: isSmallScreen ? "24px" : "17px",
                  }}
                >
                  UPRISING
                </Typography>
              </Toolbar>

              <List
                sx={{
                  zIndex: 2,
                  display: isSmallScreen ? "flex" : "block",
                  maxHeight: open && !isSmallScreen ? "0px" : "400px",
                  overflow: open && !isSmallScreen ? "hidden" : null,

                  // overflow: isSmallScreen ? "none" : "hidden",

                  transition: "max-height 0.3s ease-in-out",
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary="HOME"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText
                    primary="SERVICES"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText
                    primary="ABOUT"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </ListItemButton>
              </List>
            </Box>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={handleToggle}
                sx={{ display: isSmallScreen ? "none" : "block" }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};
export default Navbar;
