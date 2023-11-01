"use client";

import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import HideAppBar from "../../../../components/AppDawer";
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
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useMemo } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";

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
        <Box>
          <CenteredBox
            sx={{
              backgroundImage: "url(/img12.png)",
              backgroundSize: "cover", // Initially set for larger screens
              height: isMobileView ? 300 : 600,
              width: "100%",
              pl: 6,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 15,
              }}
              variant="button"
              fontWeight={700}
            >
              Imagine a world where refugees are at the center of humanitarian
              response.
            </Typography>
            <br />
            <Typography
              sx={{
                color: "white",
              }}
              width={isMobileView ? "100%" : 900}
              variant={isMobileView ? "h5" : "h4"}
              fontWeight={500}
            >
              Imagine a world where Refugee-led organizations (RLOs) are fully
              resourced and empowered to lead the way in providing assistance to
              their communities.
            </Typography>
          </CenteredBox>
          <Box
            sx={{
              display: isMobileView ? "block" : "flex",
              p: isMobileView ? 2 : 6,
            }}
          >
            {" "}
            <Box flex={0.5} p={isMobileView ? 0 : 6}>
              <Typography variant="body1" fontWeight={700}>
                Our Advocacy and Capacity Sharing Program is designed to support
                RLOs in their efforts to achieve a more just and equitable world
                for refugees and host community. We do this by:
              </Typography>
              <ul>
                <li>
                  Advocating for the inclusion and meaningful participation of
                  refugees in decision making processes at the local, national,
                  and global level.
                </li>

                <li>
                  Sharing our learnings and expertise with other organizations
                  to amplify our collective impact and build stronger
                  communities together.
                </li>
              </ul>

              <br />
              <Typography variant="body1">
                We believe that RLOs are best placed to provide assistance to
                their communities. They have a deep understanding of the needs
                and the challenges refugees and locals face. They are also more
                likely to be accountable to the communities they serve.
              </Typography>
              <br />
              <Typography variant="body1">
                We are committed to supporting RLOS in their efforts to lead the
                way in humanitarian response.
              </Typography>
            </Box>
            <Grid sx={{ flex: 0.5 }}>
              <Image
                height={1800}
                width={1500}
                src={"/img19.png"}
                alt=""
                style={{
                  height: isMobileView ? "auto" : 550,
                  width: isMobileView ? "100%" : 700,
                  backgroundSize: "cover", // Initially set for larger screens
                  borderRadius: 15,
                }}
              />
            </Grid>
          </Box>

          <br />
          <br />
          <CenteredBox
            sx={{
              p: isMobileView ? 1 : 15,
              display: "grid",
              placeItem: "center",
            }}
          >
            <Typography
              sx={{
                color: "#0F2A3C",
              }}
              width={isMobileView ? "100%" : 900}
              variant={isMobileView ? "h5" : "h4"}
              fontWeight={500}
            >
              Voices Rising: Refugee-led Solutions Conference 2023
            </Typography>
            <br />
            <br />
            <Grid container spacing={isMobileView ? 0 : 3}>
              <Grid>
                <Image
                  src={"/img13.jpeg"}
                  alt=""
                  height={1800}
                  width={1500}
                  style={{
                    height: isMobileView ? "auto" : 500,
                    width: isMobileView ? "100%" : 600,
                    flex: 0.5,
                    backgroundSize: "cover", // Initially set for larger screens
                    borderRadius: 15,
                  }}
                />
              </Grid>
              <Grid>
                <Image
                  src={"/img14.jpeg"}
                  alt=""
                  height={1800}
                  width={1500}
                  style={{
                    height: isMobileView ? "auto" : 500,
                    width: isMobileView ? "100%" : 600,
                    flex: 0.5,
                    backgroundSize: "cover", // Initially set for larger screens
                    borderRadius: 15,
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Typography
              sx={{
                color: "#0F2A3C",
              }}
              width={isMobileView ? "100%" : 1100}
              variant={isMobileView ? "body1" : "subtitle1"}
              fontWeight={500}
            >
              On 28 September2023, SIR co-organised and spearheaded the Voices
              Rising: A Refugee-Led Solutions Conference. This conference aimed
              to ensure that the voices of Refugee-led organizations (RLOs) are
              heard. The conference brought together a diverse group of
              stakeholders, including International NGOs (INGOs), county
              government entities, UNHCR, Refugee-Led Organizations (RLOs), and
              community leaders to showcase the work of RLOs and the challenges
              they face. The conference report is currently being finalized and
              will be shared once it’s available.
            </Typography>
            <br />
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
              }}
              color="inherit"
              target="_blank"
              href="/impacts#report"
            >
              Learn more in report
            </Button>
            <br />
            <br />
            <Typography
              sx={{
                color: "#0F2A3C",
              }}
              width={isMobileView ? "100%" : 900}
              variant={isMobileView ? "h5" : "h4"}
              fontWeight={500}
            >
              Refugee leaders training on Sustainable Development Goals (SDGs)
              and Design Thinking
            </Typography>

            <br />
            <br />
            <br />
            <Grid container spacing={isMobileView ? 0 : 3}>
              <Grid>
                <Image
                  src={"/img15.jpg"}
                  alt=""
                  height={1800}
                  width={1500}
                  style={{
                    height: isMobileView ? "auto" : 500,
                    width: isMobileView ? "100%" : 600,
                    flex: 0.5,
                    backgroundSize: "cover", // Initially set for larger screens
                    borderRadius: 15,
                  }}
                />
              </Grid>
              <Grid>
                <Image
                  src={"/img16.jpg"}
                  alt=""
                  height={1800}
                  width={1500}
                  style={{
                    height: isMobileView ? "auto" : 500,
                    width: isMobileView ? "100%" : 600,
                    flex: 0.5,
                    backgroundSize: "cover", // Initially set for larger screens
                    borderRadius: 15,
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Typography
              sx={{
                color: "#0F2A3C",
              }}
              width={isMobileView ? "100%" : 1100}
              variant={isMobileView ? "body1" : "subtitle1"}
              fontWeight={500}
            >
              This training program helps RLO leaders to develop the skills and
              knowledge they need to contribute to the achievement of the SDGs
              and to design innovative solutions to the challenges facing their
              communities.
            </Typography>
            <br />
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
              }}
              color="inherit"
              target="_blank"
              href="/impacts#report"
            >
              Learn more in report
            </Button>
          </CenteredBox>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

const CenteredBox = styled(Box)`
  display: grid;
  place-content: center;
  height: auto;
`;
