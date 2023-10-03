"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HideAppBar from "../../components/AppDawer";
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
} from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useMemo } from "react";

export default function Home() {
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box>
          <Box p={2} bgcolor={theme.palette.action.hover}>
            <Box
              sx={{
                height: isMobileView ? 300 : 600,
                width: "100%",
                backgroundImage:
                  "url(https://images.pexels.com/photos/11596973/pexels-photo-11596973.jpeg?auto=compress&cs=tinysrgb&w=1200)",
                backgroundSize: "cover", // Initially set for larger screens
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                color: "white",
                pl: 6,
                borderRadius: 1,
              }}
            >
              <Typography
                fontWeight={700}
                variant={isMobileView ? "h5" : "h4"}
                sx={{
                  // textAlign: "center",
                  width: isMobileView ? "100%" : "40%",
                }}
              >
                Transforming Lives in Kakuma: Empowering Refugee and Local Youth
                for a Dignified Future
              </Typography>
              <Link color="inherit" underline="hover">
                Learn more
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              p: isMobileView ? 1 : 10,
              pt: 2,
              display: isMobileView ? "block" : "flex",
              flex: 1,
              alignItems: "center",
            }}
          >
            <Box flex={0.7}>
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                }}
                variant={isMobileView ? "h5" : "h4"}
              >
                SIR: Pioneering Change in Kakuma Through Technology and
                Education
              </Typography>
              <br />
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                }}
              >
                Solidarity Initiative for Refugees (SIR) is a local
                community-based organization founded in 2016 by a dedicated
                group of young refugees. Our mission is to harness the power of
                technology to equip refugees in Kakuma with the essential skills
                and tools needed to forge a brighter future. At SIR, we empower
                the youth of Kakuma by providing access to education and
                livelihood training, all delivered through innovative digital
                learning methods.
              </Typography>
            </Box>
            <Box flex={0.3}>
              <Image
                src={
                  "https://images.pexels.com/photos/18396656/pexels-photo-18396656/free-photo-of-a-group-of-young-women-cheering-and-men-being-upset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                height={500}
                width={300}
                style={{
                  borderRadius: 1,
                  width: isMobileView ? "100%" : "auto",
                }}
                alt="Image"
              />
            </Box>
          </Box>
          {/* Core Programs */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              p: 5,
            }}
            bgcolor={theme.palette.action.hover}
          >
            <Typography variant={isMobileView ? "h5" : "h4"} fontWeight={700}>
              Our Core Programs
            </Typography>
            <Typography variant={"body1"}>
              Empowering young individuals with the necessary skills to pave the
              way for a brighter future of self-sufficiency.
            </Typography>
            <br />
            <Box
              sx={{
                p: isMobileView ? 1 : 10,
                pt: 2,
                display: isMobileView ? "block" : "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <Box flex={0.3}>
                <Image
                  src="/program-overview.png"
                  height={600}
                  width={600}
                  style={{
                    borderRadius: 1,
                    width: isMobileView ? "90%" : 300,
                    height: isMobileView ? "90%" : 300,
                  }}
                  alt="Programs"
                />
              </Box>
              <Box
                flex={0.7}
                display={"grid"}
                gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
                gap={5}
                pt={isMobileView ? 4 : 0}
              >
                <Box display={"flex"} gap={2}>
                  <Image
                    src={"/training_img.png"}
                    height={50}
                    width={50}
                    alt="Education"
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      color={theme.palette.success.main}
                      fontWeight={700}
                    >
                      Education
                    </Typography>
                    <Typography variant="body1">
                      We offer informal and digitally connected education to
                      marginalized youth in the camp.
                    </Typography>
                  </Box>
                </Box>
                <Box display={"flex"} gap={2}>
                  <Image
                    src={"/mentor_img.png"}
                    height={50}
                    width={50}
                    alt="Mentorship"
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      color={theme.palette.success.main}
                      fontWeight={700}
                    >
                      Mentorship
                    </Typography>
                    <Typography variant="body1">
                      Pairing Refugees with Experienced Tech Industry Mentors to
                      Foster Job Readiness and Insights.
                    </Typography>
                  </Box>
                </Box>
                <Box display={"flex"} gap={2}>
                  <Image
                    src={"/freelancing_img.png"}
                    height={50}
                    width={50}
                    alt="Mentorship"
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      color={theme.palette.success.main}
                      fontWeight={700}
                    >
                      Freelancing
                    </Typography>
                    <Typography variant="body1">
                      This pillar aims to unlock the independence of youth
                      livelihoods.
                    </Typography>
                  </Box>
                </Box>
                <Box display={"flex"} gap={2}>
                  <Image
                    src={"/bussiness_img.png"}
                    height={50}
                    width={50}
                    alt="Mentorship"
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      color={theme.palette.success.main}
                      fontWeight={700}
                    >
                      Social Business
                    </Typography>
                    <Typography variant="body1">
                      Embracing Social Entrepreneurship to Reduce Reliance on
                      Donations and Generate Funds for Operational
                      Sustainability
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Link
              pt={isMobileView ? 4 : 0}
              href="/programs"
              underline="hover"
              color={"inherit"}
            >
              Learn more
            </Link>
          </Box>

          {/* Feedbacks */}
          <Box
            sx={{
              p: isMobileView ? 1 : 10,
              pt: 5,

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">What our beneficieries say</Typography>
            <br />
            <Carousel responsive={responsive}>
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
            </Carousel>
            ;
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        style={{ maxHeight: 140, width: "100%", objectFit: "cover" }}
        image="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
