
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

const getIcon = (type: "Blog" | "News" | "Report" | "Story") => {
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
      sx={{
        maxWidth: isSmallPC ? 500 : 1000,
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
      <CardMedia
        component="img"
        alt={prop.title}
        height="280"
        style={{ maxHeight: 280, width: "40%", objectFit: "fill" }}
        image={prop.cover.asset.url}
        title={prop.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prop.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prop.description}
        </Typography>
        <br />
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
        <Button
          color="success"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            mt: 3,
          }}
          variant="contained"
          endIcon={<EastRoundedIcon />}
          href={`/${prop.type.toLowerCase()}/${prop._id}`}
        >
          Read more
        </Button>
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
        maxWidth: isMobileView ? "100%" : 300,
        "&:hover": {
          boxShadow: 2,
        },
        boxShadow: 0,
        border: `1px solid ${theme.palette.action.hover}`,
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
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
        <Typography mt={2} variant="h6">
          {prop.title}
        </Typography>
      </CardContent>
    </Card>
  );
};
