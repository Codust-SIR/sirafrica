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
} from "@mui/material";
import { styled } from "@mui/system";
import { blue } from "@mui/material/colors";

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
            bgcolor={blue[700]}
          >
            <CenteredBox alignItems={"center"} flex={0.3}>
              <Typography variant={isMobileView ? "h4" : "h3"} color="white">
                <b>Fundraise</b>
              </Typography>
            </CenteredBox>
            <CenteredBox flex={0.7}>
              <br />
              <Image
                src="/img2.jpeg"
                alt="fundraise"
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
                src={"/img4.jpeg"}
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
                refugees and locals. Our mission is to empower individuals with
                the resources for a better future and community.
                <br />
                <br />
                As a volunteer, you&apos;ll help restore hope and dignity to
                young refugee youth, making a meaningful impact with your
                skills. Join us and be part of a dedicated community making a
                positive global difference.
              </Typography>
            </Box>
          </Box>
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
                  src={"/img5.jpeg"}
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
                }}
              >
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed dicta cumque, quo unde sequi hic nam quasi, odio placeat expedita numquam saepe eos distinctio iure! Voluptatem, quos commodi beatae minima eius optio quam praesentium illum. Officiis, recusandae. Impedit laborum accusamus, odit pariatur atque perspiciatis quis cupiditate voluptatibus quas iure voluptatum quod praesentium facilis! Quae nam explicabo deleniti perferendis illum impedit nostrum eligendi, alias ullam officiis perspiciatis quam velit commodi dolore ipsam ratione distinctio obcaecati odio soluta quisquam! Quae rem quo accusantium sed saepe, est nemo suscipit magnam quos iure harum voluptate id praesentium temporibus. Quaerat delectus exercitationem eos commodi?
              </Typography>
             
            </Box>
            {!isMobileView && (
              <Box flex={0.5}>
                <Image
                  src={"/img5.jpeg"}
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
      </HideAppBar>
    </ThemeProvider>
  );
}

const CenteredBox = styled(Box)`
  display: grid;
  height: auto;
  justify-content: center;
`;
