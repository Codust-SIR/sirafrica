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
        <Box>
          {/* Get involved */}
          <Box>
            <Box
              sx={{
                height: isMobileView ? 300 : 400,
                width: isMobileView ? "100%" : "100%",
                backgroundImage:
                  "url(https://images.pexels.com/photos/7386009/pexels-photo-7386009.jpeg?auto=compress&cs=tinysrgb&w=1200)",
                // backgroundSize: "", // Initially set for larger screens
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                color: "white",
                pl: 6,
                objectFit: "cover",
              }}
            >
              <Typography
                fontWeight={700}
                variant={isMobileView ? "subtitle2" : "subtitle1"}
                sx={{
                  // textAlign: "center",
                  width: isMobileView ? "100%" : "40%",

                  color: (theme) => theme.palette.success.main,
                  fontWeight: 700,
                  letterSpacing: 3,
                }}
              >
                SIR - Learn, Earn, Innovate
              </Typography>
              <br />
              <Typography
                fontWeight={700}
                sx={{
                  width: isMobileView ? "100%" : "40%",
                }}
                variant={isMobileView ? "h5" : "h4"}
              >
                Get Involved
              </Typography>
              <br />
              <Typography
                variant={isMobileView ? "body1" : "subtitle1"}
                sx={{
                  width: isMobileView ? "100%" : "30%",
                }}
              >
                At SIR, we&rsquo;re committed to empowering Kakuma&rsquo;s youth
                through digital education and training, founded by young
                refugees in 2016.
              </Typography>
              <Typography
                variant={isMobileView ? "body1" : "subtitle1"}
                sx={{
                  width: isMobileView ? "100%" : "30%",
                }}
              >
                But we need your help
              </Typography>
              <br />
              <Button
                variant="contained"
                color="success"
                sx={{
                  textTransform: "none",
                  borderRadius: 5,
                }}
                size="large"
                href="/donate"
                startIcon={<VolunteerActivismRoundedIcon />}
              >
                Donate
              </Button>
            </Box>
          </Box>
          {/* Volunteering */}
          <Toolbar />
          <Toolbar />
          <Box
            p={2}
            sx={{
              display: "flex",
              flexDirection: isMobileView ? "column" : "row",
              gap: 2,
            }}
            bgcolor={theme.palette.action.hover}
          >
            <Box flex={0.5}>
              <Typography variant="h3">Volunteering</Typography>
              <br />
              <Typography variant="body1">
                There should be no room for hunger in our world, and we all can
                play a part. WFP relies entirely on voluntary donations, so
                every contribution counts. You can also try Freerice, the trivia
                game that allows you to raise 10 grains of rice to support WFP
                with every right answer, or download the ShareTheMeal app to
                feed someone with just US$.80 and a few taps on your phone.
              </Typography>
              <Button
                color="success"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  mt: 3,
                }}
                variant="contained"
                endIcon={<EastRoundedIcon />}
              >
                Learn more
              </Button>
            </Box>
            <Image
              src={
                "https://images.pexels.com/photos/6647012/pexels-photo-6647012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              width={isMobileView ? 400 : 800}
              height={isMobileView ? 300 : 300}
              alt={"Image"}
              style={{
                height: isMobileView ? "100%" : 300,
                width: "100%",
                objectFit: "contain",
                flex: 0.5,
                marginTop: isMobileView ? 0 : -55,
              }}
            />
          </Box>
          {/* Donate */}
          <Toolbar />
          <Toolbar />
          <Box
            p={2}
            sx={{
              display: "flex",
              flexDirection: isMobileView ? "column" : "row",
              gap: 2,
            }}
          >
            <Image
              src={
                "https://images.pexels.com/photos/6591164/pexels-photo-6591164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              width={isMobileView ? 400 : 800}
              height={isMobileView ? 300 : 300}
              alt={"Image"}
              style={{
                height: isMobileView ? "100%" : 300,
                width: "100%",
                objectFit: "contain",
                flex: 0.5,
                marginTop: isMobileView ? 0 : -55,
              }}
            />{" "}
            <Box flex={0.5}>
              <Typography variant="h3">Fundraise</Typography>
              <br />
              <Typography variant="body1">
                There should be no room for hunger in our world, and we all can
                play a part. WFP relies entirely on voluntary donations, so
                every contribution counts. You can also try Freerice, the trivia
                game that allows you to raise 10 grains of rice to support WFP
                with every right answer, or download the ShareTheMeal app to
                feed someone with just US$.80 and a few taps on your phone.
              </Typography>
              <Button
                color="success"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  mt: 3,
                }}
                variant="contained"
                endIcon={<EastRoundedIcon />}
              >
                Learn more
              </Button>
            </Box>
          </Box>
          {/* Carrer */}
          <Toolbar />
          <Toolbar />
          <Box
            p={2}
            sx={{
              display: isMobileView ? "block" : "flex",
              flexDirection: isMobileView ? "column-reverse" : "row",
              gap: 2,
            }}
            bgcolor={theme.palette.action.hover}
          >
            <Box flex={0.5}>
              <Typography variant="h3">Carrer</Typography>
              <br />
              <Typography variant="body1">
                There should be no room for hunger in our world, and we all can
                play a part. WFP relies entirely on voluntary donations, so
                every contribution counts. You can also try Freerice, the trivia
                game that allows you to raise 10 grains of rice to support WFP
                with every right answer, or download the ShareTheMeal app to
                feed someone with just US$.80 and a few taps on your phone.
              </Typography>
              <Button
                color="success"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  mt: 3,
                }}
                variant="contained"
                endIcon={<EastRoundedIcon />}
              >
                Learn more
              </Button>
            </Box>
            <Image
              src={
                "https://images.pexels.com/photos/6591164/pexels-photo-6591164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              width={isMobileView ? 400 : 800}
              height={isMobileView ? 300 : 300}
              alt={"Image"}
              style={{
                height: isMobileView ? "100%" : 300,
                width: "100%",
                objectFit: "contain",
                flex: 0.5,
                marginTop: isMobileView ? 0 : -55,
              }}
            />{" "}
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}


