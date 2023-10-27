"use client";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import HideAppBar from "../../../components/AppDawer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
          <CenteredBox>
            <Typography
              sx={{
                color: "#1C2B33",
              }}
              variant="button"
              fontWeight={700}
            >
              Our Mission
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#1C2B33",
              }}
              fontWeight={700}
            >
              To support youth (both men and women equally) in reclaiming what
              insecurity, discrimination, war, and disaster have taken away from
              them.
            </Typography>
          </CenteredBox>
          <br />
          <Carousel responsive={responsive2}>
            <Box
              sx={{
                height: 500,
                width: 1200,
                borderRadius: 1,
                bgcolor: "#1C2B33",
              }}
            />
            <Box
              sx={{
                height: 500,
                width: 1200,
                borderRadius: 1,
                bgcolor: "red",
              }}
            />
            <Box
              sx={{
                height: 500,
                width: 1200,
                borderRadius: 1,
                bgcolor: "dodgerblue",
              }}
            />
          </Carousel>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

const CenteredBox = styled(Box)`
  display: grid;
  height: auto;
  text-align: center;
`;
