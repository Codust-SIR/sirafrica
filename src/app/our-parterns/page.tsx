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
  Avatar,
  CircularProgress,
  Toolbar,
} from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useEffect, useMemo, useState } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { Logo, getPartners } from "../../../services/sentry";

export default function OurBoard() {
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
  const [partners, setPartners] = useState<Logo[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPartners("SIR").then((teams) => {
      setPartners(teams);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box p={isMobileView ? 1 : 15} pt={1}>
          <Typography variant="h3">Our Partners</Typography>
          <br />
          <Box
            sx={{
              p: 2,
            }}
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
            ) : (
              <Box>
                {partners.length > 0 &&
                  partners.map((partner) => (
                    <>
                      <Box display={isMobileView ? "block" : "flex"} gap={2}>
                        <Avatar
                          src={partner.imageFile.asset.url}
                          sx={{
                            // borderRadius: 0.5,
                            // width: 200,
                            height: 200,
                            borderRadius: 1,
                            width: isMobileView ? "90%" : "auto",
                            maxHeight: isMobileView ? 100 : 90,
                            maxWidth: isMobileView ? "90%" : 250,
                          }}
                        />
                        <Box>
                          {isMobileView && <Toolbar />}
                          <Typography variant="h6">{partner.name}</Typography>
                          <Link
                            href={partner.url}
                            underline="hover"
                            color={"text.secondary"}
                          >
                            {partner.url}
                          </Link>
                          <Toolbar />
                          <Typography variant="body1">
                            {partner.description &&
                              partner.description.map((item) =>
                                item.children[0].text
                                  .split(`\n`)
                                  .map((item, key) => {
                                    return (
                                      <span key={key}>
                                        {item}
                                        <br />
                                        <br />
                                      </span>
                                    );
                                  })
                              )}
                          </Typography>
                        </Box>
                      </Box>
                      <br />

                      <br />
                      <br />
                    </>
                  ))}
              </Box>
            )}
          </Box>
          <br />
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}
