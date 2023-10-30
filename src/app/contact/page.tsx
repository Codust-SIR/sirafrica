"use client";

import React, { useState } from "react";

import HideAppBar from "../../../components/AppDawer";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  Button,
  TextField,
  Divider,
  Toolbar,
} from "@mui/material";

export default function OurBoard() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // TODO: Add logic to submit the form data
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box p={isMobileView ? 1 : 15} pt={1}>
          <Typography variant="h3">Contact Us</Typography>
          <Toolbar />
          <Box sx={{ display: isMobileView ? "block" : "flex", gap: 2 }}>
            <iframe
              width={isMobileView ? "100%" : "50%"}
              height={isMobileView ? "400" : "500"}
              src="https://www.mapillary.com/embed?map_style=Mapillary%20streets&image_key=839325410993363&x=0.9867725620561345&y=0.5666600824527152&style=classic"
              style={{
                flex: 0.6,
              }}
            ></iframe>
            <Box sx={{ flex: 0.4, p: 2 }}>
              <Typography variant="h5">Get in touch</Typography>
              <br />
              <Divider />
              <br />
              <Typography variant="body1">
                If you wish to reach out to us to learn more, join our
                organisation, or offer support in any way, feel free to use this
                contact form or any of our social media links.
              </Typography>
              <br />
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={name}
                  color="success"
                  onChange={(event) => setName(event.target.value)}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={email}
                  color="success"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  color="success"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <Button color="success" variant="contained" type="submit">
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}
