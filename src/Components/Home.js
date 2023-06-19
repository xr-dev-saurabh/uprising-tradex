import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import play from "../Components/assets/images/play-circle.png";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    // Other typography settings...
  },
});

const Home = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  //   height: 224.0455322265625px;
  //   width: 337.756103515625px;
  //   left: 36px;
  //   top: 214px;
  //   border-radius: 0px;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container sx={{ fontFamily: "Inter" }}>
          <Box sx={{ width: isSmallScreen ? "400px" : "338px" }}>
            <Typography
              variant="h1"
              component="h5"
              sx={{
                fontSize: isSmallScreen ? "53px" : "45px",
                fontWeight: "800",
                lineHeight: isSmallScreen ? "73px" : "61px",
                mb: 2,
              }}
            >
              Workspace that inspire
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontSize: isSmallScreen ? "13px" : "11px",
                // margin: "12px 0",
                fontWeight: "400",
                lineHeight: "24px",
                mb: 2,
              }}
            >
              We work for people and make their dream come in to there life or
              in there home.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: 175,
                justifyContent: "space-between",
              }}
            >
              <img src={play} alt="play" />

              <Box
                sx={{ width: 59, height: 0, border: "1px solid black" }}
              ></Box>
              <Typography
                variant="h1"
                component="p"
                sx={{ fontSize: "12px", fontWeight: 700 }}
              >
                DISCOVER
              </Typography>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};
export default Home;
