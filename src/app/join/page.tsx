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
