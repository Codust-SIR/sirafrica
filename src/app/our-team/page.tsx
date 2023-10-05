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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box p={isMobileView ? 1 : 15} pt={1}>
          {/* Get involved */}
          <Typography variant="h3">Team</Typography>
          <BoardMember />
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

function BoardMember() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const partners: { name: string; url: string; image: string }[] = [
    {
      name: "Source Humanitarian Network",
      url: "https://source-network.org/",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Humanitarian OpenStreetMap Team",
      url: "",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "WUSC",
      url: "",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Don Bosco Kakuma",
      url: "",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Danish Refugees Council",
      url: "",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Cohere",
      url: "",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "GIZ",
      url: "",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={
          {
            // "--Grid-borderWidth": "1px",
            // borderTop: "var(--Grid-borderWidth) solid",
            // borderLeft: "var(--Grid-borderWidth) solid",
            // borderColor: "divider",
            // "& > div": {
            //   borderRight: "var(--Grid-borderWidth) solid",
            //   borderBottom: "var(--Grid-borderWidth) solid",
            //   borderColor: "divider",
            // },
          }
        }
      >
        {partners.map((item, index) => (
          <Grid
            key={index}
            {...{ xs: 12, sm: 6, md: 4, lg: 3, mt: 5 }}
            minHeight={200}
          >
            <Avatar
              src={item.image}
              sx={{
                borderRadius: 0.5,
                width: isMobileView ? "100%" : 200,
                height: isMobileView ? "100%" : 200,
              }}
            />
            <Typography variant="subtitle1" pt={1}>
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
