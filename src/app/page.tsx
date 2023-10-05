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
  useTheme,
} from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useMemo } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";

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
                Transforming Lives: Empowering Refugee and Local Youth for a
                Dignified Future
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
                group of young refugees.
              </Typography>
              <br />
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                }}
              >
                Our mission is to harness the power of technology to equip
                refugees in Kakuma with the essential skills and tools needed to
                forge a brighter future. At SIR, we empower the youth of Kakuma
                by providing access to education and livelihood training, all
                delivered through innovative digital learning methods.
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
              Learn more
            </Button>
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
          </Box>
          {/* Stories News & Blogs */}
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",

              p: isMobileView ? 1 : 10,
            }}
            bgcolor={theme.palette.action.hover}
          >
            <Typography variant="h4">Latest Stories & Blogs</Typography>
            <br />
            <Carousel responsive={responsive2}>
              <StoryBlogCard />
              <StoryBlogCard />
              <StoryBlogCard />
              <StoryBlogCard />
              <StoryBlogCard />
              <StoryBlogCard />
            </Carousel>
          </Box>
          {/* Our Parters */}
          <CenteredBox sx={{ p: isMobileView ? 1 : 10 }}>
            <Typography variant="h4">Our Parterns</Typography>
            <br />
            <Parterns />
          </CenteredBox>
          {/* Get involved */}
          <Box p={2} bgcolor={theme.palette.action.hover}>
            <Box
              sx={{
                height: isMobileView ? 300 : 400,
                width: isMobileView ? "100%" : 900,
                backgroundImage:
                  "url(https://images.pexels.com/photos/7386009/pexels-photo-7386009.jpeg?auto=compress&cs=tinysrgb&w=1200)",
                backgroundSize: "cover", // Initially set for larger screens
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                color: "white",
                pl: 6,
                borderRadius: 1,
                objectFit: "fill",
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
function StoryBlogCard() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  return (
    <Card sx={{ maxWidth: 670, display: isMobileView ? "block" : "flex" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        style={{ maxHeight: 280, width: "100%", objectFit: "cover" }}
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
          Read more
        </Button>
      </CardContent>
    </Card>
  );
}

function Parterns() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const partners: { name: string; url: string; image: string }[] = [
    {
      name: "Source Humanitarian Network",
      url: "https://source-network.org/",
      image: "/shn_logo.png",
    },
    {
      name: "Humanitarian OpenStreetMap Team",
      url: "",
      image: "/hot_logo.png",
    },
    {
      name: "WUSC",
      url: "",
      image: "/wusc_logo.png",
    },
    {
      name: "Don Bosco Kakuma",
      url: "",
      image: "/donbosco_logo.png",
    },
    {
      name: "Danish Refugees Council",
      url: "",
      image: "/drc_logo.jpg",
    },
    {
      name: "Cohere",
      url: "",
      image: "/cohere_logo.png",
    },
    {
      name: "GIZ",
      url: "",
      image: "/giz_logo.jpeg",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          "--Grid-borderWidth": "1px",
          borderTop: "var(--Grid-borderWidth) solid",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
          },
        }}
      >
        {partners.map((item, index) => (
          <Grid
            key={index}
            {...{ xs: 12, sm: 6, md: 4, lg: 3 }}
            minHeight={160}
          >
            <Image
              src={item.image}
              height={500}
              width={500}
              style={{
                borderRadius: 1,
                width: isMobileView ? "100%" : "auto",
                maxHeight: isMobileView ? 90 : 90,
                maxWidth: isMobileView ? 90 : 250,
              }}
              alt="Image"
            />
            <Typography variant="subtitle2" color={"text.secondary"}>
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
