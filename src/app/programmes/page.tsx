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
  Toolbar,
  styled,
} from "@mui/material";
import { useMemo } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { blue } from "@mui/material/colors";

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <>
          <Box
            p={2}
            sx={{
              display: isMobileView ? "block" : "flex",
            }}
            bgcolor={blue[900]}
          >
            <CenteredBox alignItems={"center"} flex={0.3}>
              <Typography variant={isMobileView ? "h4" : "h2"} color="white">
                Programmes
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
          <Box p={isMobileView ? 1 : 15} pt={1}>
            <br />
            {programmes.map((programme) => (
              <Box
                sx={{
                  p: 2,
                  display: isMobileView ? "block" : "flex",
                  flex: 1,
                  gap: 4,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}
                key={programme.name}
              >
                <Box flex={0.3}>
                  <Typography
                    sx={{
                      width: isMobileView ? "100%" : "80%",
                    }}
                    variant={isMobileView ? "h6" : "h5"}
                  >
                    {programme.name}
                  </Typography>
                  <br />
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                    }}
                    color="success"
                    endIcon={<EastRoundedIcon />}
                    href={programme.url}
                  >
                    Learn more about {programme.name}
                  </Button>
                  <br />
                  <br />
                </Box>
                <Box flex={0.7}>
                  <Box>
                    <Typography variant={isMobileView ? "body1" : "subtitle1"}>
                      {/* Multyline description with new lines \n */}
                      {programme.description.map((item) =>
                        item.split("\n").map((line) => (
                          <span key={line}>
                            {line}
                            <br />
                            <br />
                          </span>
                        ))
                      )}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </>
      </HideAppBar>
    </ThemeProvider>
  );
}

const CenteredBox = styled(Box)`
  display: grid;
  height: auto;
  justify-content: center;
`;

const programmes: {
  name: string;
  description: string[];
  url: string;
}[] = [
  {
    name: "Education",
    url: "/programmes/education",
    description: [
      "Our education program is dedicated to enhancing the employability and income prospects of both refugee and host community youth through a comprehensive approach. It focuses on bolstering market-relevant skills development, advanced digital proficiencies, and social-emotional learning. ",
      "By offering digital skills training, we equip the youth with the technological competence necessary for the modern job market. Furthermore, our program places a strong emphasis on nurturing emotional well-being and resilience in refugee students, fostering their overall development. Additionally, we facilitate pathways to higher education for refugee youth through our Connected Learning initiative, opening doors to a brighter future and greater opportunities for these aspiring individuals.",
    ],
  },
  {
    name: "Women Empowerment & Livelihoods",
    url: "/programmes/livelihoods",
    description: [
      "Our program is a comprehensive initiative aimed at empowering both refugee and host community youth and women to enhance their economic resilience. We accomplish this through a multifaceted approach that encompasses vital life skills, including financial literacy and sexual and reproductive health and rights.",
      " Additionally, we provide digital skills training, online work mentorship, and business development support, equipping participants with the tools they need to thrive in the modern economy. Moreover, we offer valuable programs such as baby care and Village Savings & Loan Associations (VSLAs) to further support and empower the communities we serve.",
    ],
  },
  {
    name: "Climate Resilience",
    url: "/programmes/climate",
    description: [],
  },
];
