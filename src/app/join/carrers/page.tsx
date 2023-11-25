"use client";
import HideAppBar from "../../../../components/AppDawer";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
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
  CircularProgress,
  Link,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { green, deepOrange, red, yellow, grey } from "@mui/material/colors";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect, FC, useRef } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Job, getJobs } from "../../../../services/sentry";
import moment from "moment";

export default function Carrers() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  const texts = ["Work", "Advocate", "Contribute"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex2((index) => index + 1),
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
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
    "Communication and Advocacy",
    "Management",
    "Trainers",
    "Social Media",
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
    "We are hiring",
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
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

  useEffect(() => {
    setLoadingJobs(true);
    getJobs().then((res) => {
      setAllJobs(res);
      setLoadingJobs(false);
    });

    return () => {
      setAllJobs([]);
      setLoadingJobs(true);
    };
  }, []);

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
              <Box>
                <Typography variant={isMobileView ? "h4" : "h2"} color="white">
                  <b
                    className="animated-text"
                    style={{
                      color: colorPick(texts[index % texts.length]),
                      animation: "up-down 3s ease-in-out infinite",
                    }}
                  >
                    <TextTransition springConfig={presets.wobbly}>
                      {texts[index % texts.length]}
                    </TextTransition>
                  </b>
                </Typography>
                <Typography variant={"h4"} color="white">
                  for everyone
                </Typography>
              </Box>
              <Typography color="white" variant={"h6"}>
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
                  borderRadius: 15,
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
              <TextTransition springConfig={presets.wobbly}>
                {joinMessages[index2 % joinMessages.length]}
              </TextTransition>
              {/* {joinMessages[Math.floor(Math.random() * joinMessages.length)]} */}
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
                      style={getStyles(item, jobsItems, theme)}
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
              {loadingJobs ? (
                <Box
                  sx={{
                    display: "grid",
                    placeItems: "center",
                    height: "100%",
                  }}
                >
                  <CircularProgress size={20} color="success" />
                </Box>
              ) : //  Filter jobs by category and job type and a message if there is no job
              allJobs
                  .filter((job) => {
                    if (categoriesItem.length === 0) {
                      return true;
                    }
                    return categoriesItem.includes(job.category);
                  })
                  .filter((job) => {
                    if (jobsItems.length === 0) {
                      return true;
                    }
                    return jobsItems.includes(job.job_type);
                  }).length < 1 ? (
                <Typography variant={"h5"} textAlign={"center"}>
                  No jobs found
                </Typography>
              ) : (
                allJobs
                  .filter((job) => {
                    if (categoriesItem.length === 0) {
                      return true;
                    }
                    return categoriesItem.includes(job.category);
                  })
                  .filter((job) => {
                    if (jobsItems.length === 0) {
                      return true;
                    }
                    return jobsItems.includes(job.job_type);
                  })
                  .map((job, i) => <JobComponent key={i} {...job} />)
              )}
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

const JobComponent: FC<Job> = ({
  job_title,
  job_type,
  _id,
  job_location,
  category,
  job_deadline,
  link_og,
}) => {
  const isMobileView = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 5,
        padding: 3,
        border: (theme) => `1px solid ${theme.palette.action.hover}`,
        "&:hover": {
          border: `1px solid black`,
        },
      }}
      component={Link}
      underline="none"
      color="inherit"
      href={`${link_og}`}
      target="_blank"
    >
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{
          "&:hover": {
            // color: yellow[800],
          },
        }}
      >
        {job_title}
      </Typography>
      <br />
      <Divider />
      <br />
      <Box display={isMobileView ? "grid" : "flex"} alignItems="center" gap={1}>
        <Chip
          sx={
            {
              // bgcolor: yellow[800],
            }
          }
          label={job_type}
        />
        {/* Vericle divider */}
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
        {/* Location */}
        <Typography
          variant={"subtitle2"}
          sx={{ display: "flex", alignItems: "center", gap: 0.3 }}
        >
          <PlaceOutlinedIcon /> {job_location}
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
        {/* Type */}
        <Typography
          variant={"subtitle2"}
          sx={{ display: "flex", alignItems: "center", gap: 0.3 }}
        >
          {category}
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
        <Typography variant={"subtitle2"}>
          Deadline: {moment(job_deadline).format("MMMM Do YYYY")}
        </Typography>
      </Box>
    </Box>
  );
};
