"use client";

import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import HideAppBar from "../../../../components/AppDawer";
import {
  Box,
  CssBaseline,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { green } from "@mui/material/colors";

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
            }}
            bgcolor={green[700]}
          >
            <CenteredBox alignItems={"center"} flex={0.3}>
              <Typography variant={isMobileView ? "h4" : "h3"} color="white">
                <b> SIR Volunteers</b>
              </Typography>
            </CenteredBox>
            <CenteredBox flex={0.7}>
              <br />
              <Image
                src="/ntf.jpeg"
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
          <br />
          <Box>
            <br />
            <Box
              bgcolor={theme.palette.action.hover}
              sx={{
                p: isMobileView ? 2 : 10,
                display: isMobileView ? "block" : "flex",
                flex: 1,
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box flex={0.5}>
                <Image
                  src={"/del.jpeg"}
                  width={isMobileView ? 2500 : 2500}
                  height={isMobileView ? 2500 : 2500}
                  style={{
                    height: isMobileView ? "100%" : 500,
                    width: "100%",
                    objectFit: "contain",
                    // Background color should be picked from the image dominant color
                  }}
                  alt="Image"
                />
              </Box>
              <Box flex={0.5}>
                <Typography
                  sx={{
                    width: isMobileView ? "100%" : "80%",
                  }}
                >
                  Solidarity Initiative for Refugees is a community organization
                  focused on advancing education and sustainability for both
                  refugees and locals. Our mission is to empower individuals
                  with the resources for a better future and community.
                  <br />
                  <br />
                  As a volunteer, you&apos;ll help restore hope and dignity to
                  young refugee youth, making a meaningful impact with your
                  skills. Join us and be part of a dedicated community making a
                  positive global difference.
                </Typography>
              </Box>
            </Box>
            <br />
            <Box
              sx={{
                p: isMobileView ? 2 : 10,
                pt: 1,
                display: isMobileView ? "block" : "flex",
                flex: 1,
                alignItems: "center",
                gap: 4,
                flexDirection: isMobileView ? "column-reverse" : "unset",
              }}
            >
              {isMobileView && (
                <Box flex={0.5}>
                  <Image
                    src={"/event.jpeg"}
                    width={isMobileView ? 2500 : 2500}
                    height={isMobileView ? 2500 : 2500}
                    style={{
                      height: isMobileView ? "100%" : 500,
                      width: "100%",
                      objectFit: "contain",
                      // Background color should be picked from the image dominant color
                    }}
                    alt="Image"
                  />
                </Box>
              )}
              <Box flex={0.5}>
                <br />
                <Typography
                  sx={{
                    width: isMobileView ? "100%" : "80%",
                    color: theme.palette.success.main,
                  }}
                  variant={isMobileView ? "h4" : "h3"}
                >
                  Volunteer Opportunities
                </Typography>
                <br />
                <ol>
                  <li>Communication and Advocacy</li>
                  <li>Project management</li>
                  <li>Mentorship</li>
                  <li>Curriculum development</li>
                  <li>Fundraising and Proposal writing</li>
                  <li>Social Media</li>
                  <li>Ambassador in your Community</li>
                </ol>
              </Box>
              {!isMobileView && (
                <Box flex={0.5}>
                  <Image
                    src={"/event.jpeg"}
                    width={isMobileView ? 2500 : 2500}
                    height={isMobileView ? 2500 : 2500}
                    style={{
                      height: isMobileView ? "100%" : 500,
                      width: "100%",
                      objectFit: "contain",
                      // Background color should be picked from the image dominant color
                    }}
                    alt="Image"
                  />
                </Box>
              )}
            </Box>
          </Box>
          <br />
          <CenteredBox
            bgcolor={theme.palette.action.hover}
            sx={{
              p: isMobileView ? 4 : 10,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
              }}
              variant={isMobileView ? "h5" : "h4"}
            >
              <b>Become a volunteer today.</b>
            </Typography>
            <br />
            <Box
              sx={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Divider
                sx={{
                  backgroundColor: theme.palette.success.main,
                  height: 3,
                  width: 100,
                  transition: "width 1s ease-in-out",
                  "&:hover": {
                    width: 250,
                  },
                  alignItems: "center",
                  borderRadius: 2,
                }}
              />
            </Box>
            <br />
            <Typography
              sx={{
                textAlign: "center",
              }}
              variant={isMobileView ? "body1" : "subtitle1"}
            >
              By volunteering with us, you will be able to make a difference in
              the lives of refugees and locals.
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
              }}
              variant={isMobileView ? "body1" : "subtitle1"}
            >
              You will also be able to contribute to the development of the
              community.
            </Typography>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                label="Full Name"
                variant="outlined"
                margin="normal"
                size="small"
                color="success"
              />
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                size="small"
                color="success"
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                margin="normal"
                size="small"
                color="success"
              />
              <TextField
                label="Address"
                variant="outlined"
                margin="normal"
                size="small"
                color="success"
              />
              <TextField
                label="Country"
                variant="outlined"
                margin="normal"
                size="small"
                color="success"
              />
              <Button
                variant="contained"
                size="small"
                color="success"
                type="submit"
                sx={{
                  textTransform: "none",
                }}
              >
                Submit
              </Button>
            </Box>
          </CenteredBox>
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
