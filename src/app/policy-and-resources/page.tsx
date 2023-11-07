"use client";

import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import HideAppBar from "../../../components/AppDawer";
import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  Toolbar,
  styled,
  Link,
} from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useMemo } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { teal } from "@mui/material/colors";

export default function Donate() {
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
            p={2}
            sx={{
              display: isMobileView ? "block" : "flex",
              p: isMobileView ? 1 : 12,
            }}
            bgcolor={teal[800]}
          >
            <CenteredBox alignItems={"center"} flex={0.5}>
              <Typography variant={isMobileView ? "h4" : "h3"} color={"white"}>
                Policy and Resources
              </Typography>
              <br />
              <Typography
                color={"white"}
                variant={isMobileView ? "subtitle2" : "subtitle1"}
              >
                Our policies define what we do and guide our work. They are
                designed to help us achieve our mission and vision.
              </Typography>
            </CenteredBox>
            <CenteredBox flex={0.7}>
              <br />
            </CenteredBox>
          </Box>

          <Box
            sx={{
              display: isMobileView ? "block" : "grid",
              p: isMobileView ? 1 : 12,
              gridTemplateColumns: isMobileView
                ? "1fr"
                : "repeat(minmax(0, 1fr), 2)",
            }}
          >
            <Box
              sx={{
                boxShadow: 1,
                width: isMobileView ? "100%" : 500,
                p: isMobileView ? 1 : 3,
                borderRadius: 1,
                "&:hover": {
                  boxShadow: 3,
                  cursor: "pointer",
                  borderRadius: 2,
                  transition: "all 0.3s ease-in-out",
                },
              }}
              component={Link}
              underline={"none"}
              href={"/policy-and-resources/safeguarding-policy"}
              color={"inherit"}
            >
              <Typography variant={isMobileView ? "subtitle1" : "h6"}>
                Solidarity Initiative for Refugees (SIR) Safeguarding Policy
              </Typography>
            </Box>
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

const CenteredBox = styled(Box)`
  display: grid;
  height: auto;
  justify-content: center;
`;
