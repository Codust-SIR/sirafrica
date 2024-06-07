"use client";
import HideAppBar from "../../../../../components/AppDawer";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  Theme,
  CircularProgress,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { styled } from "@mui/system";
import { green, grey } from "@mui/material/colors";
import { useState, useEffect, FC, useRef } from "react";
import { Job, getJobById } from "../../../../../services/sentry";
import { usePathname } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "../../../../../libs/sanity.client";

export default function Carrers() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  const [job, setJob] = useState<Job | null>(null);
  const [loadingJob, setLoadingJob] = useState(true);

  // Id from url params

  const id = usePathname().split("/")[usePathname().split("/").length - 1];

  useEffect(() => {
    setLoadingJob(true);
    getJobById(id).then((res) => {
      setJob(res);
      setLoadingJob(false);
    });

    return () => {
      setJob(null);
      setLoadingJob(true);
    };
  }, [id]);
  // Change the title of the page
  useEffect(() => {
    job && (document.title = `SIR | ${job?.job_title}`);
  }, [job]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box>
          {/* Header */}

          <Box
            sx={{
              display: isMobileView ? "block" : "flex",
              pt: isMobileView ? 1 : 10,
              pb: isMobileView ? 1 : 10,
            }}
            bgcolor={grey[700]}
          >
            <CenteredBox alignItems={"center"} flex={0.7}>
              <Box>
                <Typography variant={"h4"} color="white">
                  {job?.job_title}
                </Typography>
              </Box>
              <br />
              <Typography
                color="white"
                variant={"subtitle1"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.3,
                }}
              >
                <PlaceOutlinedIcon /> {job?.job_location}
              </Typography>
            </CenteredBox>
            <CenteredBox flex={0.6}>
              <br />
            </CenteredBox>
          </Box>
          <br />
          {loadingJob ? (
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                p: 40,
                pt: 4,
              }}
            >
              <CircularProgress size={40} color="success" />
            </Box>
          ) : (
            <Box sx={{ p: isMobileView ? 1 : 35, pt: 3 }}>
              <PortableText
                value={job?.body}
                components={myPortableTextComponents}
              />
            </Box>
          )}
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
