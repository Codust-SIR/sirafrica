"use client";

import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import HideAppBar from "../../../../components/AppDawer";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  CardContent,
  Card,
  useTheme,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/system";
import { blue } from "@mui/material/colors";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../globals.css";
import Color from "color-thief-react";

export default function Donate() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const subs: {
    name: string;
    image: string;
    description: string;
  }[] = [
    {
      image: "/img4.jpeg",
      name: "Life Skills",
      description: "",
    },
    {
      image: "/img5.jpeg",
      name: "Mentorship and Remote Work",
      description: "",
    },
    {
      image: "/img6.jpeg",
      name: "Baby Care",
      description: "",
    },
    {
      image: "/img6.jpeg",
      name: "Business Development ",
      description: "",
    },
    {
      image: "/img6.jpeg",
      name: "Village Savings & Loan Associations (VSLAs) ",
      description: "",
    },
  ];
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
          <Box
            p={2}
            sx={{
              display: isMobileView ? "block" : "flex",
            }}
            bgcolor={blue[900]}
          >
            <CenteredBox alignItems={"center"} flex={0.3}>
              <Typography variant={isMobileView ? "h4" : "h3"} color="white">
                <b>Livelihoods</b>
              </Typography>
            </CenteredBox>
            <CenteredBox flex={0.7}>
              <br />
              <Image
                src="/ntf.jpeg"
                alt="Volunteer"
                width={isMobileView ? 2500 : 2500}
                height={isMobileView ? 2500 : 2500}
                style={{
                  height: isMobileView ? "100%" : 500,
                  width: "100%",
                  objectFit: "contain",
                  // Background color should be picked from the image dominant color
                }}
              />
            </CenteredBox>
          </Box>
          <CenteredBox textAlign={"center"}>
            <Toolbar />
            <Typography
              width={isMobileView ? "100%" : 900}
              variant={isMobileView ? "h5" : "h4"}
            >
              Through this program we provide life skills (Financial Literacy,
              Sexual and Reproductive Health and Rights,), digital skills
              training, Online work mentorship and business development support,
              to empower refugee and host community youth and women to build
              economic resilience.
            </Typography>
            <Toolbar />
          </CenteredBox>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",

              p: isMobileView ? 1 : 10,
            }}
            bgcolor={theme.palette.action.hover}
          >
            <Box
              display={"grid"}
              gridTemplateColumns={`repeat(${
                isMobileView ? "auto-fit" : 3
              }, minmax(${isMobileView ? "100%" : "300px"}, 1fr))`}
              gap={1}
              pt={isMobileView ? 1 : 0}
            >
              {subs.map((sub) => (
                <ProgrameSub key={sub.name} {...sub} />
              ))}
            </Box>
          </Box>
          <Carousel
            swipeable
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
          >
            {subs.map((item) => (
              <Box
                sx={{
                  height: isMobileView ? "100%" : 500,
                  width: "100%",
                  borderRadius: 1,
                  bgcolor: "#1C2B33",
                  display: isMobileView ? "block" : "flex",
                }}
                key={item.name}
              >
                <Image
                  src={item.image}
                  alt={item.image}
                  width={isMobileView ? 2500 : 2500}
                  height={isMobileView ? 2500 : 2500}
                  style={{
                    height: isMobileView ? "100%" : 500,
                    width: "100%",
                    objectFit: "contain",
                    flex: 0.3,
                  }}
                />
                <Box flex={0.8} p={isMobileView ? 0 : 3}>
                  <Typography
                    fontWeight={700}
                    sx={{
                      color: "white",
                    }}
                    variant={isMobileView ? "h5" : "h4"}
                  >
                    {item.name}
                  </Typography>
                  <Toolbar />
                  <Typography
                    sx={{
                      color: "white",
                    }}
                    variant={isMobileView ? "body1" : "h6"}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Carousel>
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

function ProgrameSub({ image, name }: { name: string; image: string }) {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <Card sx={{ maxWidth: 410 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          // padding: 3,
          margin: 0,
          paddingTop: 1,
        }}
      >
        <Color crossOrigin="anonymous" format="hex" src={image}>
          {({ data, loading, error }) => {
            if (loading)
              return (
                <Box
                  sx={{
                    display: "grid",
                    placeItems: "center",
                    height: "100%",
                  }}
                >
                  <Image
                    src={"/image-placeholder.svg"}
                    width={isMobileView ? 400 : 800}
                    height={isMobileView ? 300 : 300}
                    alt={"Image"}
                    style={{
                      height: isMobileView ? "100%" : 300,
                      width: "100%",
                      objectFit: "contain",
                      // Image to be blury to show loading
                      filter: "blur(10px)",
                    }}
                    key={"Loading Image"}
                  />{" "}
                </Box>
              );
            return (
              <Box
                sx={{
                  backgroundColor: data,
                  width: "100%",
                  height: "100%",
                  placeItems: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={image}
                  width={isMobileView ? 400 : 800}
                  height={isMobileView ? 150 : 300}
                  alt={name}
                  style={{
                    height: isMobileView ? 150 : 300,
                    width: "100%",
                    objectFit: "cover",
                    // Background color should be picked from the image dominant color
                  }}
                />
              </Box>
            );
          }}
        </Color>

        <CardContent
          style={{
            flex: 1,
            padding: 2,
            margin: 0,
            textAlign: "center",
          }}
        >
          <Typography p={1} gutterBottom variant={isMobileView ? "h6" : "h5"}>
            {name}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
