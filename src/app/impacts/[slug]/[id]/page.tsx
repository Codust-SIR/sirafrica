"use client";

import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import HideAppBar from "../../../../../components/AppDawer";
import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  CircularProgress,
} from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import DensitySmallRoundedIcon from "@mui/icons-material/DensitySmallRounded";
// import { BlogNewsStory, getBlogsNewsAndReport } from "../../../services/sentry";

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

  // const [blogNewsStory, setBlogNewsStory] = useState<BlogNewsStory[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   getBlogsNewsAndReport("author").then((parterns) => {
  //     setBlogNewsStory(parterns);
  //     setLoading(false);
  //   });
  //   return () => {
  //     setLoading(true);
  //   };
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box p={isMobileView ? 1 : 15} pt={1}>
          {/* Impacts */}
          <Box
            sx={{
              p: 2,
              display: "grid",
              flex: 1,
              gap: 4,
              placeItems: "center",
            }}
          >
            <Typography variant="h3">Impact</Typography>
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}
