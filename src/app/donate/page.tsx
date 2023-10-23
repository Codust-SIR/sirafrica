"use client";

import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import HideAppBar from "../../../components/AppDawer";
import {
  Box,
  Collapse,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import DonateCard from "../../../components/DonateCard";
import { green } from "@mui/material/colors";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useState } from "react";

export default function Donate() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const otherWaysToGive: {
    title: string;
    options: string[];
  }[] = [
    {
      title: "M-PESA | KENYA",
      options: [
        "Paybill No: 000000",
        "Account: SIR",
        "Amount: Please give generously",
      ],
    },
    {
      title: "Bank Transfer",
      options: [
        "Paybill No: 000000",
        "Account: SIR",
        "Amount: Please give generously",
      ],
    },
    
  ];

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
            bgcolor={theme.palette.action.hover}
          >
            <CenteredBox flex={0.7}>
              <Image
                src="/codedust_class.jpg"
                alt="Donate"
                width={isMobileView ? 300 : 500}
                height={isMobileView ? 300 : 500}
                style={{
                  height: isMobileView ? "100%" : 500,
                  width: "100%",
                  objectFit: "contain",
                  // Background color should be picked from the image dominant color
                }}
              />
              <br />
              <Box
                sx={{
                  display: "grid",
                  p: isMobileView ? 0 : 10,
                  pt: 1,
                }}
              >
                <Typography
                  fontWeight="fontWeightBold"
                  fontSize={18}
                  variant="body1"
                  color="textPrimary"
                >
                  Your donation helps us to continue our mission to provide free
                  computer science education to everyone.
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary">
                  More than 50% of our students are from underrepresented groups
                  in tech. We are committed to providing a safe and inclusive
                  learning environment for all students. We are a 501(c)(3)
                  nonprofit organization. All donations are tax-deductible.
                </Typography>
              </Box>
            </CenteredBox>
            <Box flex={0.3}>
              <DonateCard />
            </Box>
          </Box>
          <br />
          {/* Other ways to give */}
          <Box sx={{ p: 9, pt: 3 }}>
            <Typography variant={isMobileView ? "h5" : "h4"} fontWeight="bold">
              Other ways to give
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px,1fr))",
                gap: 5,
                // p: 9,
                pt: 3,
              }}
            >
              {otherWaysToGive.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "grid",
                    gridGap: 1,
                    p: 2,
                    borderRadius: 2,
                    bgcolor: green[100],
                    "&:hover": {
                      boxShadow: 2,
                    },
                    boxShadow: 0,
                    border: `1px solid ${theme.palette.action.hover}`,
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      color: green[900],
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item.options.map((option, index) => (
                    <Typography key={index} variant="body1">
                      {option}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
            <br />
            <br />
            <Box p={2} borderRadius={2} bgcolor={theme.palette.action.hover}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant="h5">About SIR</Typography>
                <IconButton
                  size="small"
                  sx={{
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    transition:
                      "border-color 0.2s ease-in-out, transform 0.5s ease-in-out",
                    transform: checked ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  onClick={handleChange}
                >
                  {checked ? (
                    <RemoveRoundedIcon fontSize="small" />
                  ) : (
                    <AddRoundedIcon fontSize="small" />
                  )}
                </IconButton>
              </Box>
              <Collapse in={checked}>
                <br />
                Solidarity Initiative for Refugees (SIR) is a community-based
                organization, founded in 2016 by young refugees. SIR&lsquo;s
                mission is to empower refugee youth through technology-based
                education and livelihood training, helping them rebuild their
                lives after the impact of insecurity, discrimination, conflict,
                and disaster.
              </Collapse>
            </Box>
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
