import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import moment from "moment";
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
  CardActions,
  Icon,
  ListItemButton,
  CircularProgress,
} from "@mui/material";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import { useMemo } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import { BlogNewsStory } from "../services/sentry";
import Color from "color-thief-react";

export const getIcon = (type: "Blog" | "News" | "Report" | "Story") => {
  switch (type) {
    case "Blog":
      return <FeedRoundedIcon fontSize="small" />;
    case "News":
      return <NewspaperRoundedIcon fontSize="small" />;
    case "Report":
      return <AssessmentRoundedIcon fontSize="small" />;
    case "Story":
      return <ArticleRoundedIcon fontSize="small" />;
    default:
      return <FeedRoundedIcon fontSize="small" />;
  }
};
export const StoryBlogCard: React.FC<BlogNewsStory> = (prop) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const isSmallPC = useMediaQuery(() => theme.breakpoints.down("md"));
  return (
    <Card
      component={Link}
      underline="none"
      color="inherit"
      href={`/impacts/${prop.type.toLowerCase()}/${prop._id}`}
      sx={{
        maxWidth: isSmallPC ? 500 : 1300,
        display: isMobileView ? "block" : "flex",
        m: 1,
        mr: 2,

        "&:hover": {
          boxShadow: 2,
        },
        boxShadow: 0,
        border: `1px solid ${theme.palette.action.hover}`,
      }}
    >
      <Box
        flex={0.36}
        sx={{
          height: isMobileView ? 150 : 300,
          objectFit: "fill",
        }}
      >
        <Color crossOrigin="anonymous" format="hex" src={prop.cover.asset.url}>
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
                  <CircularProgress size={20} color="success" />
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
                  src={prop.cover.asset.url}
                  width={isMobileView ? 400 : 800}
                  height={isMobileView ? 300 : 300}
                  alt={prop?.title}
                  style={{
                    height: isMobileView ? "100%" : 300,
                    width: "100%",
                    objectFit: "contain",
                    // Background color should be picked from the image dominant color
                  }}
                />
              </Box>
            );
          }}
        </Color>
      </Box>
      <CardContent
        sx={{
          flex: 0.64,
        }}
      >
        <Typography
          gutterBottom
          variant={isMobileView ? "subtitle1" : "h5"}
          component="div"
        >
          {prop.title.length > 90
            ? prop.title.slice(0, 90) + "..."
            : prop.title}
        </Typography>
        {isMobileView && (
          <Box display={"flex"} gap={2}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              variant="caption"
              gap={1}
              color={"text.secondary"}
            >
              {" "}
              <EventRoundedIcon fontSize="small" />
              {moment(prop._createdAt).fromNow()}
            </Typography>

            <Typography
              display={"flex"}
              alignItems={"center"}
              variant="caption"
              gap={1}
              color={"text.secondary"}
            >
              {getIcon(prop.type)}
              {prop.type}
            </Typography>
          </Box>
        )}
        <Typography variant={!isMobileView ? "subtitle1" : "caption"}>
          {prop.description.slice(0, isMobileView ? 200 : 350) +
            (prop.description.length > (isMobileView ? 200 : 350) ? "..." : "")}
        </Typography>
        <br />
        {!isMobileView && (
          <Box display={"flex"} gap={2}>
            <Typography
              display={"flex"}
              alignItems={"center"}
              variant="caption"
              gap={1}
              color={"text.secondary"}
            >
              {" "}
              <EventRoundedIcon fontSize="small" />
              {moment(prop._createdAt).fromNow()}
            </Typography>

            <Typography
              display={"flex"}
              alignItems={"center"}
              variant="caption"
              gap={1}
              color={"text.secondary"}
            >
              {getIcon(prop.type)}
              {prop.type}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export const MoreBlogcard: React.FC<BlogNewsStory> = (prop) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <Card
      component={Link}
      underline="none"
      color="inherit"
      href={`/impacts/${prop.type.toLowerCase()}/${prop._id}`}
      sx={{
        maxWidth: isMobileView ? "100%" : 400,
        "&:hover": {
          boxShadow: 2,
        },
        boxShadow: 0,
        border: `1px solid ${theme.palette.action.hover}`,
      }}
    >
      <CardMedia
        sx={{
          height: isMobileView ? 150 : 200,
          width: "100%",
          objectFit: "fill",
        }}
        image={prop.cover.asset.url}
        title={prop.title}
      />
      <CardContent>
        <Box display={"flex"} gap={2}>
          <Typography
            display={"flex"}
            alignItems={"center"}
            variant="caption"
            gap={1}
            color={"text.secondary"}
          >
            {" "}
            <EventRoundedIcon fontSize="small" />
            {moment(prop._createdAt).fromNow()}
          </Typography>

          <Typography
            display={"flex"}
            alignItems={"center"}
            variant="caption"
            gap={1}
            color={"text.secondary"}
          >
            {getIcon(prop.type)}
            {prop.type}
          </Typography>
        </Box>
        <Typography mt={2} variant={isMobileView ? "subtitle2" : "h6"}>
          {prop.title}
        </Typography>
      </CardContent>
    </Card>
  );
};
