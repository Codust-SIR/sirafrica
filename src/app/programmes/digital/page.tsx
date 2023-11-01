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
  Button,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

export default function Donate() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box>
          <Box
            p={2}
            sx={{
              display: isMobileView ? "block" : "flex",
              p: isMobileView ? 0 : 6,
            }}
            bgcolor={grey[100]}
          >
            <CenteredBox alignItems={"center"} flex={0.3}>
              <Typography
                variant={isMobileView ? "h4" : "h3"}
                color={theme.palette.primary.main}
              >
                Digital Solutions and Innovation
              </Typography>
            </CenteredBox>
            <CenteredBox flex={0.7}>
              <br />
              <Image
                src="/img20.png"
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
          <Box
            sx={{
              display: isMobileView ? "block" : "flex",
              p: isMobileView ? 2 : 6,
            }}
          >
            <CenteredBox alignItems={"center"} flex={0.3}>
              <Box display="flex" alignItems={"center"} gap={1}>
                <Image
                  src={"/open-gates-icon-a.png"}
                  height={800}
                  width={1500}
                  style={{
                    height: isMobileView ? 50 : 70,
                    width: isMobileView ? 50 : 70,
                  }}
                  alt={"Open Gates"}
                />
                <Typography
                  variant={isMobileView ? "h5" : "h4"}
                  color={theme.palette.primary.main}
                >
                  <b>Open Gates</b>
                </Typography>
              </Box>
              <Toolbar />
            </CenteredBox>
            <CenteredBox flex={0.7}>
              <Typography
                variant={isMobileView ? "body1" : "h6"}
                width={isMobileView ? "100%" : 900}
              >
                Open Gates is a platform designed to bridge the information gap
                for refugee youth worldwide by providing them with accessible
                and up-to-date information on various opportunities. The
                platform aims to empower and support refugee youth in their
                pursuit of education, scholarships, vocational training,
                internships, and job openings
              </Typography>
              <br />
              <Box display="flex" gap={2}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    width: 150,
                  }}
                  target="_blank"
                  href="https://opengates.app/"
                >
                  Visit Open Gates
                </Button>{" "}
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    width: 200,
                  }}
                  color="inherit"
                  target="_blank"
                  href="https://about.opengates.app/"
                >
                  Learn more about Open Gates
                </Button>
              </Box>
            </CenteredBox>
          </Box>
          <Box
            sx={{
              display: isMobileView ? "block" : "flex",
              p: isMobileView ? 2 : 6,
            }}
          >
            <CenteredBox alignItems={"center"} flex={0.3}>
              <Box display="flex" alignItems={"center"} gap={1}>
                <Image
                  src={"/codedust.png"}
                  height={800}
                  width={1500}
                  style={{
                    height: isMobileView ? 50 : 55,
                    width: isMobileView ? 50 : 55,
                  }}
                  alt={"Codedust"}
                />
                <Typography
                  variant={isMobileView ? "h5" : "h4"}
                  color={"text.secondary"}
                >
                  <b>Codedust</b>
                </Typography>
              </Box>
              <Toolbar />
            </CenteredBox>
            <CenteredBox flex={0.7}>
              <Typography
                variant={isMobileView ? "body1" : "h6"}
                width={isMobileView ? "100%" : 900}
              >
                Codedust is a coding bootcamp that provides refugees and local
                youth with the skills and resources to become software
                developers.
              </Typography>
              <br />
              <Button
                variant="contained"
                size="small"
                sx={{
                  textTransform: "none",
                  width: 150,
                }}
                target="_blank"
                href="https://codust-tutorial.vercel.app/"
              >
                Visit Codedust
              </Button>
            </CenteredBox>
          </Box>
          <Toolbar />
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
