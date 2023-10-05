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
          <Typography variant="h3">Mission and Vision</Typography>
          <br />
          <Box
            bgcolor={theme.palette.action.hover}
            sx={{
              p: 2,
              display: isMobileView ? "block" : "flex",
              flex: 1,
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box flex={0.5}>
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                  color: theme.palette.success.main,
                }}
                variant={isMobileView ? "h5" : "h4"}
              >
                Our Vision
              </Typography>
              <br />
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                }}
              >
                We aim to enhance/improve people’s lives through Education and
                livelihood with the use of digital Technology as a major key to
                influence positive change in order to guarantee more human
                conditions to all living beings.
              </Typography>
            </Box>
            <Box flex={0.5}>
              <Image
                src={
                  "https://images.pexels.com/photos/6476602/pexels-photo-6476602.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }
                height={500}
                width={1200}
                style={{
                  borderRadius: 1,
                  width: isMobileView ? "100%" : "auto",
                }}
                alt="Image"
              />
            </Box>
          </Box>
          <br />
          <Box
            bgcolor={theme.palette.action.hover}
            sx={{
              p: 2,
              display: isMobileView ? "block" : "flex",
              flex: 1,
              alignItems: "center",
              gap: 4,
              flexDirection: isMobileView ? "column-reverse" : "unset",
            }}
          >
            {!isMobileView && (
              <Box flex={0.5}>
                <Image
                  src={
                    "https://images.pexels.com/photos/6476602/pexels-photo-6476602.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  }
                  height={500}
                  width={1200}
                  style={{
                    borderRadius: 1,
                    width: isMobileView ? "100%" : "auto",
                  }}
                  alt="Image"
                />
              </Box>
            )}
            <Box flex={0.5}>
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                  color: theme.palette.success.main,
                }}
                variant={isMobileView ? "h5" : "h4"}
              >
                Our Mission
              </Typography>
              <br />
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                }}
              >
                Our mission is to support youth (both men and women equally)
                back to the path of regaining what insecurity, discrimination,
                war, and disaster took away from them.
              </Typography>
            </Box>
            {isMobileView && (
              <Box flex={0.5}>
                <Image
                  src={
                    "https://images.pexels.com/photos/6476602/pexels-photo-6476602.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  }
                  height={500}
                  width={1200}
                  style={{
                    borderRadius: 1,
                    width: isMobileView ? "100%" : "auto",
                  }}
                  alt="Image"
                />
              </Box>
            )}
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
