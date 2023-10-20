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
import { BlogNewsStory, getBlogsNewsAndReport } from "../../../services/sentry";
import { MoreBlogcard } from "../../../components/Impacts";

export default function Donate() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const [selectedOption, setSelectedOption] = useState<
    "all" | "blog" | "news" | "report" | "story"
  >("all");
  const [blogNewsStory, setBlogNewsStory] = useState<BlogNewsStory[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getBlogsNewsAndReport("author").then((parterns) => {
      setBlogNewsStory(parterns);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, []);

  useEffect(() => {
    const option = window.location.hash.replace("#", "") as
      | "all"
      | "blog"
      | "news"
      | "report"
      | "story";

    if (option) {
      setSelectedOption(option);
    }

    return () => {
      setSelectedOption("all");
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box p={isMobileView ? 1 : 15} pt={1}>
          {/* Impacts */}
          <Box
            sx={{
              p: 2,
              display: isMobileView ? "block" : "flex",
              flex: 1,
              gap: 4,
            }}
          >
            <Box flex={0.2}>
              <Typography
                sx={{
                  width: isMobileView ? "100%" : "80%",
                }}
                variant={isMobileView ? "h4" : "h3"}
              >
                Impacts
              </Typography>
              <br />
              <List
                sx={{
                  display: isMobileView ? "flex" : "block",
                  gap: 3,
                  p: 0,
                  m: 0,
                }}
              >
                <ListItemButton
                  selected={selectedOption === "all"}
                  sx={{ borderRadius: 2 }}
                  onClick={() => setSelectedOption("all")}
                >
                  <ListItemIcon>
                    <DensitySmallRoundedIcon />
                  </ListItemIcon>
                  {!isMobileView && <ListItemText primary="All" />}
                </ListItemButton>
                <ListItemButton
                  selected={selectedOption === "report"}
                  sx={{ borderRadius: 2 }}
                  onClick={() => setSelectedOption("report")}
                >
                  <ListItemIcon>
                    <AssessmentRoundedIcon />
                  </ListItemIcon>
                  {!isMobileView && <ListItemText primary="Report" />}
                </ListItemButton>
                <ListItemButton
                  selected={selectedOption === "blog"}
                  sx={{ borderRadius: 2 }}
                  onClick={() => setSelectedOption("blog")}
                >
                  <ListItemIcon>
                    <FeedRoundedIcon />
                  </ListItemIcon>
                  {!isMobileView && <ListItemText primary="Blogs" />}
                </ListItemButton>
                <ListItemButton
                  selected={selectedOption === "news"}
                  sx={{ borderRadius: 2 }}
                  onClick={() => setSelectedOption("news")}
                >
                  <ListItemIcon>
                    <NewspaperRoundedIcon />
                  </ListItemIcon>
                  {!isMobileView && <ListItemText primary="News" />}
                </ListItemButton>
                <ListItemButton
                  selected={selectedOption === "story"}
                  sx={{ borderRadius: 2 }}
                  onClick={() => setSelectedOption("story")}
                >
                  <ListItemIcon>
                    <ArticleRoundedIcon />
                  </ListItemIcon>
                  {!isMobileView && <ListItemText primary="Stories" />}
                </ListItemButton>
              </List>
              <Toolbar />
            </Box>
            <Box flex={0.8}>
              <Typography variant="h5">
                {
                  {
                    all: "All",
                    report: "Reports",
                    blog: "Blogs",
                    news: "News",
                    story: "Stories",
                  }[selectedOption]
                }
              </Typography>

              <Box
                display={"grid"}
                gridTemplateColumns={`repeat(auto-fit, minmax(${
                  isMobileView ? "100%" : "250px"
                }, 1fr))`}
                gap={1}
                pt={isMobileView ? 4 : 0}
              >
                {loading ? (
                  <Box
                    display={"grid"}
                    sx={{
                      placeItems: "center",
                      heigh: "100%",
                    }}
                  >
                    <CircularProgress
                      color="success"
                      size={isMobileView ? 20 : 30}
                    />
                  </Box>
                ) : blogNewsStory.filter((item) => {
                    if (selectedOption === "all") return true;
                    return (
                      item.type.toLowerCase() === selectedOption.toLowerCase()
                    );
                  }).length > 0 ? (
                  blogNewsStory
                    .filter((item) => {
                      if (selectedOption === "all") return true;
                      return (
                        item.type.toLowerCase() === selectedOption.toLowerCase()
                      );
                    })
                    .map((item, index) => {
                      return <MoreBlogcard key={index} {...item} />;
                    })
                ) : (
                  <Box
                    display={"grid"}
                    sx={{
                      placeItems: "center",
                      heigh: "100%",
                      justyfyContent: "center",
                    }}
                  >
                    <Typography>No content found</Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}
