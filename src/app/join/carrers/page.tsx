"use client";
import HideAppBar from "../../../../components/AppDawer";
import Image from "next/image";

import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  Theme,
  Slide,
  FormControl,
  InputLabel,
  OutlinedInput,
  Chip,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import { green, deepOrange, red, yellow, grey } from "@mui/material/colors";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect, FC, useRef } from "react";

export default function Carrers() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const [message, setMessage] = useState("");

  const texts = ["Work", "Advocate", "Contribute"];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(texts[Math.floor(Math.random() * texts.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const colorPick = (text: string) => {
    if (text === "Work") {
      return yellow[500];
    } else if (text === "Advocate") {
      return deepOrange[500];
    } else {
      return red[500];
    }
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const categories = [
    "Accounting",
    "Administrative",
    "Business Development",
    "Communications",
    "Customer Service",
    "Data",
    "Design",
    "Engineering",
  ];

  const jobs = [
    "Full time",
    "Part time",
    "Contract",
    "Internship",
    "Temporary",
    "Volunteer",
    "Other",
  ];

  const joinMessages = [
    "Hey, wanna join us?",
    "We are looking for you",
    "Take part in our mission",
    "Join our team",
  ];

  function getStyles(name: string, item: readonly string[], theme: Theme) {
    return {
      fontWeight:
        item.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
      backgroundColor: item.indexOf(name) === -1 ? "white" : green[100],
    };
  }

  const [categoriesItem, setCategoriesItem] = useState<string[]>([]);
  const [jobsItems, setJobsItems] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof categoriesItem>) => {
    const {
      target: { value },
    } = event;
    setCategoriesItem(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeJobType = (event: SelectChangeEvent<typeof jobsItems>) => {
    const {
      target: { value },
    } = event;
    setJobsItems(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box>
          {/* Header */}

          <Box
            p={2}
            sx={{
              display: isMobileView ? "block" : "flex",
            }}
            bgcolor={grey[700]}
          >
            <CenteredBox alignItems={"center"} flex={0.4}>
              <Typography variant={isMobileView ? "h4" : "h3"} color="white">
                <Slide direction="up" in mountOnEnter unmountOnExit>
                  <b
                    className="animated-text"
                    style={{
                      color: colorPick(message),
                      animation: "up-down 3s ease-in-out infinite",
                    }}
                  >
                    {" "}
                    {message}
                  </b>
                </Slide>

                <br />
                <b> for everyone</b>
              </Typography>
              <Typography color="white" variant={isMobileView ? "h6" : "h5"}>
                Find your next job at SIR
              </Typography>
            </CenteredBox>
            <CenteredBox flex={0.6}>
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
                }}
              />
            </CenteredBox>
          </Box>
          <br />
          <Box sx={{ p: isMobileView ? 1 : 35, pt: 3 }}>
            <Typography
              textAlign={"center"}
              variant={isMobileView ? "h5" : "h3"}
              fontWeight="bold"
            >
              {joinMessages[Math.floor(Math.random() * joinMessages.length)]}
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(20rem,1fr))",
                gap: 5,
                // p: 9,
                pt: 3,
              }}
            >
              <FormControl
                sx={{
                  width: "auto",
                }}
              >
                <InputLabel
                  color={"success"}
                  sx={{
                    borderRadius: 10,
                  }}
                  id="demo-multiple-chip-label"
                >
                  Category
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={categoriesItem}
                  onChange={handleChange}
                  color={"success"}
                  sx={{
                    borderRadius: 10,
                  }}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Category" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {categories.map((item) => (
                    <MenuItem
                      key={item}
                      value={item}
                      style={getStyles(item, categoriesItem, theme)}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ width: "auto" }}>
                <InputLabel
                  color={"success"}
                  sx={{
                    borderRadius: 10,
                  }}
                  id="demo-multiple-chip-label"
                >
                  Job type
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={jobsItems}
                  onChange={handleChangeJobType}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Job type" />
                  }
                  color={"success"}
                  sx={{
                    borderRadius: 10,
                  }}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {jobs.map((item) => (
                    <MenuItem
                      key={item}
                      value={item}
                      style={getStyles(item, categoriesItem, theme)}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <br />
            <br />
            <Box
              sx={{
                pt: 3,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <JobComponent />
              <JobComponent />
              <JobComponent />
              <JobComponent />
              <JobComponent />
              <JobComponent />
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

const JobComponent: FC = ({}) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 5,
        padding: 3,
        border: (theme) => `1px solid ${theme.palette.action.hover}`,
        "&:hover": {
          border: `1px solid black`,
          boxShadow: 2,
        },
      }}
    >
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{
          "&:hover": {
            color: yellow[800],
          },
        }}
      >
        Job title
      </Typography>
      <br />
      <Chip
        sx={{
          bgcolor: yellow[800],
        }}
        label="Full time"
      />
    </Box>
  );
};
