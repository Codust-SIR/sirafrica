"use client";
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
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
} from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useEffect, useMemo, useState } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { BoardMember, getBoardMember } from "../../../services/sentry";
import { myPortableTextComponents } from "../../../libs/sanity.client";

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
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getBoardMember("Kenya").then((teams) => {
      setBoardMembers(teams);
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
          <Typography variant="h3">Our Board</Typography>
          <br />
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
                variant={isMobileView ? "h5" : "h4"}
              >
                Kenya Board
              </Typography>
              <br />
            </Box>
            <Box flex={0.8}>
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
                  {boardMembers.length > 0 &&
                    boardMembers.map((member) => (
                      <>
                        <Box display={"flex"} gap={2}>
                          <Avatar
                            src={member.profile.asset.url}
                            sx={{
                              borderRadius: 0.5,
                              width: 100,
                              height: 100,
                            }}
                          />
                          <Box>
                            <Typography variant="h6">
                              {member.fullname}
                            </Typography>
                            <Typography
                              variant="caption"
                              color={"text.secondary"}
                            >
                              {member.position}
                            </Typography>
                          </Box>
                        </Box>
                        <br />
                        <PortableText
                          value={member.desc}
                          components={myPortableTextComponents}
                        />
                       
                        <br />
                        <br />
                      </>
                    ))}
                </Box>
              )}
            </Box>
          </Box>
          <br />
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

