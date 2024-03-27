import React from "react";
import { Typography, TextField, Button, Container } from "@mui/material";

export default function App() {
  return (
    <div>
      <section className="text-gray-700 body-font relative" />
      <Container maxWidth="md" sx={{ py: 24 }}>
        <div sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 12 }}>
          <Typography variant="h4" align="center" component="h1" fontWeight="medium" sx={{ mb: 4, color: "text.primary" }}>
            Contact Us
          </Typography>
          <Typography variant="body1" component="p" align="center" sx={{ maxWidth: "lg", mb: 8, color: "text.primary" }}>
            We work for people and make their dreams come true in their life or in their home.
          </Typography>
        </div>
        <div sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" size="large">
              SEND
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
