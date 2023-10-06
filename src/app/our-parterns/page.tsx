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
  Link,
  Card,
  CardMedia,
  CardContent,
  useTheme,
  Avatar,
  CircularProgress,
} from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useEffect, useMemo, useState } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { BoardMember, getBoardMember } from "../../../services/sentry";

export default function OurBoard() {
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
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getBoardMember("Kenya").then((teams) => {
      setBoardMembers(teams);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box p={isMobileView ? 1 : 15} pt={1}>
          <Typography variant="h3">Our Partners</Typography>
          <br />
          <Box
            sx={{
              p: 2,
            }}
          >
            {loading ? (
              <Box
                display={"grid"}
                sx={{
                  placeItems: "center",
                  heigh: "100%",
                }}
              >
                <CircularProgress
                  color="success"
                  size={isMobileView ? 20 : 30}
                />
              </Box>
            ) : (
              <Box></Box>
            )}
          </Box>
          <br />
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}
