"use client";

import Image from "next/image";
import styles from "./page.module.css";
import HideAppBar from "../../components/AppDawer";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useMemo } from "react";

export default function Home() {
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "inherit",
        },
      }),
    []
  );
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box>
          <Box
            sx={{
              height: isMobileView ? 300 : 600,
              width: "100%",
              backgroundImage:
                "url(https://images.pexels.com/photos/11596973/pexels-photo-11596973.jpeg?auto=compress&cs=tinysrgb&w=1200)",
              backgroundSize: "cover", // Initially set for larger screens
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              color: "white",
              pl: 10,
            }}
          >
            <Typography fontWeight={700} variant="button">
              With over 1.8 billion young people on the planet
            </Typography>

            <Typography
              fontWeight={700}
              variant={isMobileView ? "h6" : "h5"}
              sx={{
                textAlign: "center",
              }}
            >
              Majority of them, particularly forcibly displaced youth have
              limited access to opportunities.
            </Typography>
          </Box>{" "}
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}
