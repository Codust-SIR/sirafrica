"use client";
import {
  Box,
  Collapse,
  CssBaseline,
  Divider,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

import React from "react";
import HideAppBar from "../../../components/AppDawer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../globals.css";
import Image from "next/image";

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const responsive = {
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
              sx={{
                color: "#1C2B33",
              }}
              width={isMobileView ? "100%" : 800}
              variant={isMobileView ? "h5" : "h4"}
              fontWeight={500}
            >
              To support youth (both men and women equally) in reclaiming what
              insecurity, discrimination, war, and disaster have taken away from
              them.
            </Typography>
          </CenteredBox>
          <br />
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay
            autoPlaySpeed={4000}
            className="carousel"
            keyBoardControl={true}
            customTransition="all 1"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={isMobileView ? "mobile" : "desktop"}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            // Remove arrows
            arrows={false}
          >
            <Box
              sx={{
                height: 500,
                width: "100%",
                borderRadius: 1,
                bgcolor: "#1C2B33",
              }}
            >
              <Image
                src="/img2.jpeg"
                alt="fundraise"
                width={isMobileView ? 2500 : 2500}
                height={isMobileView ? 2500 : 2500}
                style={{
                  height: isMobileView ? "100%" : 500,
                  width: "100%",
                  objectFit: "contain",
                  // Background color should be picked from the image dominant color
                }}
              />
            </Box>
            <Box
              sx={{
                height: 500,
                width: "100%",
                borderRadius: 1,
                bgcolor: "whitesmoke",
              }}
            >
              <Image
                src="/img4.jpeg"
                alt="fundraise"
                width={isMobileView ? 2500 : 2500}
                height={isMobileView ? 2500 : 2500}
                style={{
                  height: isMobileView ? "100%" : 500,
                  width: "100%",
                  objectFit: "contain",
                  // Background color should be picked from the image dominant color
                }}
              />
            </Box>
            <Box
              sx={{
                height: 500,
                width: "100%",
                borderRadius: 1,
                bgcolor: "dodgerblue",
              }}
            >
              <Image
                src="/img6.jpeg"
                alt="fundraise"
                width={isMobileView ? 2500 : 2500}
                height={isMobileView ? 2500 : 2500}
                style={{
                  height: isMobileView ? "100%" : 500,
                  width: "100%",
                  objectFit: "contain",
                  // Background color should be picked from the image dominant color
                }}
              />
            </Box>
          </Carousel>
          <br />
          <Box
            sx={{
              height: isMobileView ? 300 : 600,
              width: "100%",
              backgroundImage: "url(/open.jpg)",
              backgroundSize: "cover", // Initially set for larger screens
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <CenteredBox>
              <Typography fontWeight={700} variant={isMobileView ? "h5" : "h4"}>
                Our Story
              </Typography>

              <Typography
                width={isMobileView ? "100%" : 600}
                variant={isMobileView ? "body2" : "subtitle1"}
                fontWeight={500}
              >
                When Solidarity Initiative for Refugees (SIR) was established in
                2016, it marked a turning point for the Kakuma refugee
                community. A group of young refugees came together with a common
                goal: to leverage technology for a brighter future.
              </Typography>
            </CenteredBox>
          </Box>
          {/* Core Values */}
          <Toolbar />
          <Box
            sx={{
              display: isMobileView ? "block" : "flex",
              p: isMobileView ? 2 : 10,
            }}
          >
            <Box flex={0.6} p={isMobileView ? 0 : 5}>
              <Typography variant={
                isMobileView ? "h4" : "h3"
              }>Our Principal</Typography>
              <Typography variant="body1">
                These principles encapsulate our foundation and steer our
                strategy in creating technology that enhances human interactions
                and relationships.
              </Typography>
              <Toolbar />
              <Divider />
              <Box pt={3}>
                {coreValues.map((item) => (
                  <SimpleCollapse key={item.title} {...item} />
                ))}
              </Box>
            </Box>
            <Image
              height={500}
              width={300}
              src={"/core_value.jpeg"}
              alt="Young Girl"
              style={{
                height: isMobileView ? "auto" : 500,
                width: isMobileView ? "100%" : 300,
                flex: 0.25,
                backgroundSize: "cover", // Initially set for larger screens
                borderRadius: 5,
              }}
            />
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

const CenteredBox = styled(Box)`
  display: grid;
  place-content: center;
  height: auto;
  text-align: center;
`;


function SimpleCollapse({ body, title }: { title: string; body: string }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={
        {
          // p:5
        }
      }
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: 1,
        }}
      >
        <Typography variant="h6"> {title} </Typography>

        <IconButton
          size="small"
          sx={{
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
          onClick={handleChange}
        >
          {checked ? (
            <RemoveRoundedIcon fontSize="small" />
          ) : (
            <AddRoundedIcon fontSize="small" />
          )}
        </IconButton>
      </Box>
      <br />
      <Box
        sx={{
          "& > :not(style)": {
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          },
        }}
      >
        <Collapse in={checked}>
          <Typography variant="body2" color={"text.secondary"}>
            {body}
          </Typography>
        </Collapse>
      </Box>
      <br />
      <Divider />
    </Box>
  );
}

const coreValues: { title: string; body: string }[] = [
  {
    title: "Equal Opportunity Advocacy",
    body: "We are passionate about championing equal access to information and opportunities for all, regardless of their background or circumstances. Our commitment to equality drives every aspect of our work.",
  },
  {
    title: "Innovation for Impact",
    body: "We embrace innovation as a force for positive change. We continuously seek new and creative ways to address challenges, striving to make a meaningful impact on the lives of those we serve.",
  },

  {
    title: "Collaborative Community",
    body: "Collaboration is the cornerstone of our approach. By fostering partnerships with organizations, experts, and communities, we amplify our collective efforts to uplift and empower refugee youth.",
  },
  {
    title: "Resilience and Growth",
    body: "We view challenges as opportunities for growth. With unwavering determination and resilience, we navigate obstacles, adapt, and continuously improve our solutions to create lasting change.",
  },
];
