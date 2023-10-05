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
} from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useMemo } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";

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
        <Box p={isMobileView ? 1 : 15} pt={1}>
          <Typography variant="h3">Our Board</Typography>
          <br />
          <Box
            sx={{
              p: 2,
              display: isMobileView ? "block" : "flex",
              flex: 1,
              gap: 4,
            }}
          >
            <Box flex={0.2}>
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                }}
                variant={isMobileView ? "h5" : "h4"}
              >
                Kenya Board
              </Typography>
              <br />
            </Box>
            <Box flex={0.8}>
              <Box>
                {/* Person */}
                <Box display={"flex"} gap={2}>
                  <Avatar
                    src={
                      "https://cdn.sanity.io/images/fzwmuftm/production/014300963f5264d2efbdb3e910b74eccb2421385-800x800.jpg"
                    }
                    sx={{
                      borderRadius: 0.5,
                      width: 100,
                      height: 100,
                    }}
                  />
                  <Box>
                    <Typography variant="h6">Bahana Hydrogen</Typography>
                    <Typography variant="caption" color={"text.secondary"}>
                      Board Chairperson
                    </Typography>
                  </Box>
                </Box>
                <br />
                <Typography variant="body1">
                  With a background in technology and a deep passion for refugee
                  rights, our founder has a track record of successful project
                  management and a strong understanding of the challenges faced
                  by refugee youth. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Vero veritatis quo minima. Sit deserunt amet
                  nulla saepe similique id libero maxime dolor voluptatibus
                  dolore? Facere incidunt ipsam natus voluptatem, autem cum aut
                  quos illo vero eligendi quia repellendus. Cum odit officiis
                  iste, ea dicta possimus velit, totam corrupti autem quisquam
                  dolores itaque eveniet magnam? Dicta tenetur natus
                  perspiciatis, sunt maxime perferendis voluptatibus, dolorum
                  quae quo laborum repellendus quisquam pariatur! Placeat nulla
                  saepe quidem sapiente quo dignissimos corrupti nihil aliquam
                  ducimus repudiandae dolorum corporis ea velit ratione facere,
                  veritatis amet sequi totam, id soluta culpa accusantium dicta.
                  Nesciunt at eaque sunt.
                </Typography>
              </Box>
            </Box>
          </Box>
          <br />
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}
