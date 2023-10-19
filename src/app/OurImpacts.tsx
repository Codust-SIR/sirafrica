"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { StoryBlogCard, MoreBlogcard } from "./page";

export const OurImpacts = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 4000, min: 3000 },
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
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",

        p: isMobileView ? 1 : 10,
      }}
    >
      <Typography variant="h4">Latest News & Views</Typography>
      <br />
      <Carousel
        responsive={responsive2}
        swipeable={false}
        // draggable={false}
        // showDots={true}
        ssr={true} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
      >
        <StoryBlogCard />
        <StoryBlogCard />
      </Carousel>
      <br />
      <br />
      <Box
        display={"grid"}
        gridTemplateColumns={`repeat(auto-fit, minmax(${
          isMobileView ? "100%" : "350px"
        }, 1fr))`}
        gap={5}
        pt={isMobileView ? 4 : 0}
      >
        <MoreBlogcard />
        <MoreBlogcard />
        <MoreBlogcard />
      </Box>
      <Button
        color="success"
        sx={{
          textTransform: "none",
          borderRadius: 2,
          mt: 3,
        }}
        href="/programs"
        variant="contained"
        endIcon={<EastRoundedIcon />}
      >
        Learn more of our impacts
      </Button>
    </Box>
  );
};
