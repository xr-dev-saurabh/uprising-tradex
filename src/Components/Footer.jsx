import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#252B42",
        p: 6,
      }}
    >
      <Container maxWidth="full" >
      <Typography variant="h4" align="left" fontWeight="bold" color="white">
          UP RISING
        </Typography>
        <Grid container justifyContent="space-between" py={0} px={40} mt={12}  spacing={2}>
          
        <Grid>
            <Typography variant="h6" color="white" gutterBottom>
            Solutions
            </Typography>
            <Typography variant="body2" color="white">
            Analytics
            </Typography>
            <Typography variant="body2" color="white">
            Marketing
            </Typography>
            <Typography variant="body2" color="white">
            Commerce
            </Typography>
            <Typography variant="body2" color="white">
            Insights
            </Typography>
          </Grid>
          <Grid >
            <Typography variant="h6" color="white" gutterBottom>
            Company
            </Typography>
            <Typography variant="body2" color="white">
            About Us
            </Typography>
            <Typography variant="body2" color="white">
            Carrier
            </Typography>
            <Typography variant="body2" color="white">
            We are hiring
            </Typography>
            <Typography variant="body2" color="white">
            Blog
            </Typography>
          </Grid>
          <Grid >
            <Typography variant="h6" color="white" gutterBottom>
            Support
            </Typography>
            <Typography variant="body2" color="white">
            Pricing
            </Typography>
            <Typography variant="body2" color="white">
            Documentation
            </Typography>
            <Typography variant="body2" color="white">
            Guides
            </Typography>
            <Typography variant="body2" color="white">
            API Status
            </Typography>
          </Grid>
          <Grid >
            <Typography variant="h6" color="white" gutterBottom>
            Legal
            </Typography>
            <Typography variant="body2" color="white">
            Claim
            </Typography>
            <Typography variant="body2" color="white">
            Policy
            </Typography>
            <Typography variant="body2" color="white">
            Terms
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}