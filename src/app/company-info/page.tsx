"use client";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import HideAppBar from "../../../components/AppDawer";

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box></Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

const CenteredBox = styled(Box)`
  display: grid;
  height: auto;
  text-align: center;
`;
