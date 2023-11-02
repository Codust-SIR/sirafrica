"use client";

import Image from "next/image";
import HideAppBar from "../../../components/AppDawer";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useMemo } from "react";

export default function Donate() {
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
        <Box p={isMobileView ? 1 : 8} pt={1}>
          <Typography variant="h3">Mission and Vision</Typography>
          <br />
          <Box
            bgcolor={theme.palette.action.hover}
            sx={{
              p: 2,
              display: isMobileView ? "block" : "flex",
              flex: 1,
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box flex={0.5}>
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                  color: theme.palette.success.main,
                }}
                variant={isMobileView ? "h5" : "h4"}
              >
                Our Vision
              </Typography>
              <br />
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                }}
              >
                Our vision is a world where refugees, despite the challenges
                they face, have the opportunity to lead fulfilling lives,
                contribute to their communities, and reach their full potential.
              </Typography>
            </Box>
            <Box flex={0.5}>
              {" "}
              <br />
              <br />
              <br />
              <Image
                src={"/img21.jpeg"}
                height={1500}
                width={1200}
                style={{
                  width: isMobileView ? "100%" : "auto",
                  height: isMobileView ? "auto" : 500,
                  borderRadius: 15,
                }}
                alt="Image"
              />
            </Box>
          </Box>
          <br />
          <Box
            bgcolor={theme.palette.action.hover}
            sx={{
              p: 2,
              display: isMobileView ? "block" : "flex",
              flex: 1,
              alignItems: "center",
              gap: 4,
              flexDirection: isMobileView ? "column-reverse" : "unset",
            }}
          >
            {!isMobileView && (
              <Box flex={0.5}>
                {" "}
                <br />
                <br />
                <br />
                <Image
                  src={"/img22.jpeg"}
                  height={1500}
                  width={1200}
                  style={{
                    width: isMobileView ? "100%" : "auto",
                    height: isMobileView ? "auto" : 500,
                    borderRadius: 15,
                  }}
                  alt="Image"
                />
              </Box>
            )}
            <Box flex={0.5}>
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                  color: theme.palette.success.main,
                }}
                variant={isMobileView ? "h5" : "h4"}
              >
                Our Mission
              </Typography>
              <br />
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                }}
              >
                SIR is dedicated to empowering refugees and locals through
                innovative programs and advocacy efforts that enhance their
                access to quality education, and dignified livelihood
                opportunities.
              </Typography>
            </Box>
            {isMobileView && (
              <Box flex={0.5}>
                <br />
                <br />
                <br />
                <Image
                  src={"/img22.jpeg"}
                  height={1500}
                  width={1200}
                  style={{
                    width: isMobileView ? "100%" : "auto",
                    height: isMobileView ? "auto" : 500,
                    borderRadius: 15,
                  }}
                  alt="Image"
                />
              </Box>
            )}
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}
