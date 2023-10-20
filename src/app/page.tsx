"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import moment from "moment";
import HideAppBar from "../../components/AppDawer";
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
  CardActions,
  Icon,
  ListItemButton,
  CircularProgress,
} from "@mui/material";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import { useMemo } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import {
  BlogNewsStory,
  Logo,
  getBlogsNewsAndReport,
  getPartners,
} from "../../services/sentry";
import DonateCard from "../../components/DonateCard";
import { MoreBlogcard, StoryBlogCard } from "../../components/Impacts";

export default function Home() {
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

  const programs: {
    programe: string;
    url: string;
    description: string;
    programeImage: string;
  }[] = [
    {
      programe: "Education",
      description: "d",
      programeImage:
        "https://images.pexels.com/photos/5896914/pexels-photo-5896914.jpeg?auto=compress&cs=tinysrgb&w=1200",
      url: "education",
    },
    {
      programe: "Livelihoods ",
      description: "d",
      programeImage:
        "https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "livelihoods",
    },
    {
      programe: "Digital solutions & Innovation",
      description: "d",
      programeImage: "https://axyya.com/wp-content/uploads/2021/03/web2.png",
      url: "digital",
    },
    {
      programe: "Advocacy & Capacity Strengthening",
      description: "d",
      programeImage:
        "https://images.pexels.com/photos/8385167/pexels-photo-8385167.jpeg?auto=compress&cs=tinysrgb&w=1200",
      url: "advocacy",
    },
    {
      programe: "Climate Resilience",
      description: "d",
      programeImage:
        "https://www.donovanhatem.com/wp-content/uploads/2017/06/Sustainability.png",
      url: "climate",
    },
  ];

  const initiatives: {
    title: string;
    description: string;
    image: string;
    url: string;
  }[] = [
    {
      title: "Open Gates",
      description:
        "Open Gates is a digital platform that connects refugees and local youth with opportunities, resources, and each other.",
      image: "/open-gates-icon-a.png",
      url: "https://opengates.app/",
    },
    {
      title: "Codedust",
      description:
        "Codedust is a coding bootcamp that provides refugees and local youth with the skills and resources to become software developers.",
      image: "/code_dust.jpeg",
      url: "https://codust-tutorial.vercel.app/",
    },
    {
      title: "Shop",
      description:
        "We build 3D models of refugee-made products and sell them on our online shop.",
      image: "/sir_shop.png",
      url: "/shop",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box>
          <Box p={2} bgcolor={theme.palette.action.hover}>
            <Box
              sx={{
                height: isMobileView ? 300 : 600,
                width: "100%",
                backgroundImage:
                  "url(https://images.pexels.com/photos/11596973/pexels-photo-11596973.jpeg?auto=compress&cs=tinysrgb&w=1200)",
                backgroundSize: "cover", // Initially set for larger screens
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                color: "white",
                pl: 6,
                borderRadius: 1,
              }}
            >
              <Typography
                fontWeight={700}
                variant={isMobileView ? "h5" : "h4"}
                sx={{
                  // textAlign: "center",
                  width: isMobileView ? "100%" : "40%",
                }}
              >
                Transforming Lives: Empowering Refugee and Local Youth for a
                Dignified Future
              </Typography>
              <Button
                color="success"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  mt: 3,
                }}
                variant="contained"
                endIcon={<EastRoundedIcon />}
              >
                Learn more
              </Button>
            </Box>
          </Box>

          <br />
          <Box
            sx={{
              p: isMobileView ? 1 : 10,
              pt: 2,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Problems />
          </Box>
          {/* Core Programs */}

          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",

              p: isMobileView ? 1 : 10,
            }}
            bgcolor={theme.palette.action.hover}
          >
            <Typography
              sx={{ alignItems: "center" }}
              variant={isMobileView ? "h5" : "h4"}
              fontWeight={700}
            >
              Our Core Programs
            </Typography>{" "}
            <br />
            <Typography sx={{ alignItems: "center" }} variant={"body1"}>
              Empowering young individuals with the necessary skills to pave the
              way for a brighter future of self-sufficiency.
            </Typography>
            <br />
            <br />
            <Box
              display={"grid"}
              gridTemplateColumns={`repeat(auto-fit, minmax(${
                isMobileView ? "100%" : "300px"
              }, 1fr))`}
              gap={5}
              pt={isMobileView ? 4 : 0}
            >
              {programs.map((item, i) => (
                <Programe {...item} key={i} />
              ))}
            </Box>
            <Button
              color="success"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                mt: 3,
              }}
              href="/programs"
              variant="contained"
              endIcon={<EastRoundedIcon />}
            >
              Learn more of our programs
            </Button>
          </Box>

          {/* Stories News & Blogs */}
          <BlogNewsStory />
          {/* Our Parters */}
          <CenteredBox
            bgcolor={theme.palette.action.hover}
            sx={{ p: isMobileView ? 1 : 10 }}
          >
            <Typography variant="h4">Our Partners</Typography>
            <br />
            <Parterns />
          </CenteredBox>
          {/* Get involved */}
          <Box
            display={isMobileView ? "block" : "flex"}
            justifyContent={"space-around"}
            p={2}
          >
            <iframe
              width={isMobileView ? "100%" : "60%"}
              height={!isMobileView ? 400 : 250}
              frameBorder="0"
              src="https://www.youtube.com/embed/EBOwnrCu42I"
              title="Supporting refugees preparing for their"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <DonateCard />
          </Box>
          {/* SIR Initietives */}

          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",

              p: isMobileView ? 1 : 10,
            }}
            bgcolor={theme.palette.action.hover}
          >
            <Typography
              sx={{ alignItems: "center" }}
              variant={isMobileView ? "h5" : "h4"}
              fontWeight={700}
            >
              Initiatives of SIR
            </Typography>{" "}
            <br />
            <Typography sx={{ alignItems: "center" }} variant={"body1"}>
              We are working on some initiatives that will help us achieve our
              goals. Here are some of our initiatives.
            </Typography>
            <br />
            <br />
            <Box
              display={"grid"}
              gridTemplateColumns={`repeat(auto-fit, minmax(350px, 1fr))`}
              gap={1}
            >
              {initiatives.map((item, i) => (
                <Initiative {...item} key={i} />
              ))}
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
  text-align: center;
`;

const BlogNewsStory = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const [blogNewsStory, setBlogNewsStory] = React.useState<BlogNewsStory[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    getBlogsNewsAndReport("author").then((parterns) => {
      setBlogNewsStory(parterns);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, []);
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",

        p: isMobileView ? 1 : 10,
      }}
    >
      <Typography variant="h4">Our impacts</Typography>
      <br />
      <>
        {loading ? (
          <Box
            display={"grid"}
            sx={{
              placeItems: "center",
              heigh: "100%",
            }}
          >
            <CircularProgress color="success" size={isMobileView ? 20 : 30} />
          </Box>
        ) : (
          <>
            <Carousel responsive={responsive2}>
              {blogNewsStory.slice(0, 2).map((item, index) => (
                <StoryBlogCard {...item} key={index} />
              ))}
            </Carousel>
            <br />
            <br />
            <Box
              display={"grid"}
              gridTemplateColumns={`repeat(auto-fit, minmax(${
                isMobileView ? "100%" : "350px"
              }, 1fr))`}
              gap={5}
              pt={isMobileView ? 4 : 0}
            >
              {blogNewsStory.slice(2, 5).map((item, index) => (
                <MoreBlogcard {...item} key={index} />
              ))}
            </Box>
          </>
        )}
      </>
      <Button
        color="success"
        sx={{
          textTransform: "none",
          borderRadius: 2,
          mt: 3,
        }}
        href="/impacts"
        variant="contained"
        endIcon={<EastRoundedIcon />}
      >
        Discover more of our impacts
      </Button>
    </Box>
  );
};

function Programe({
  description,
  programe,
  programeImage,
  url,
}: {
  programe: string;
  description: string;
  programeImage: string;
  url: string;
}) {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <Card sx={{ maxWidth: 345 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <CardMedia
          sx={{ height: isMobileView ? 180 : 240 }}
          component={"img"}
          image={programeImage}
          title={programe}
        />
        <CardContent style={{ flex: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {programe}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {description}
          </Typography> */}
        </CardContent>
        <CardActions sx={{ p: 0, m: 0 }}>
          <Button
            color="success"
            sx={{
              textTransform: "none",
              borderRadius: 0,
              width: "100%",
            }}
            href={`/programs/${url}`}
            variant="contained"
            endIcon={<EastRoundedIcon />}
          >
            Learn more
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}


function Parterns() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const [partners, setPartners] = React.useState<Logo[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    getPartners("SIR").then((parterns) => {
      setPartners(parterns);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      {loading ? (
        <Box
          display={"grid"}
          sx={{
            placeItems: "center",
            heigh: "100%",
          }}
        >
          <CircularProgress color="success" size={isMobileView ? 20 : 30} />
        </Box>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{
            "--Grid-borderWidth": "1px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
            },
          }}
        >
          {partners.map((item, index) => (
            <Grid
              key={index}
              {...{ xs: 12, sm: 6, md: 4, lg: 3 }}
              minHeight={160}
            >
              <Image
                src={item.imageFile.asset.url}
                height={500}
                width={500}
                style={{
                  borderRadius: 1,
                  width: isMobileView ? "100%" : "auto",
                  maxHeight: isMobileView ? 90 : 90,
                  maxWidth: isMobileView ? 90 : 250,
                }}
                alt="Image"
              />
              <Typography variant="subtitle2" color={"text.secondary"}>
                {item.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

function Problems() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const partners: { title: string; description: string; imgUrl: string }[] = [
    {
      title: "Education:",
      description:
        "Globally, only 23% of refugee youth have access to secondary education and technical and vocational education and training (TVET).",
      imgUrl: "/training_img.png",
    },
    {
      title: "Livelihoods",
      description:
        "80% of refugees live in poverty, and only 20% have access to formal employment.",
      imgUrl: "/freelancing_img.png",
    },
    {
      title: "Advocacy & Capacity Strengthening",
      description:
        " Refugee-led organizations are often marginalized and lack the resources and capacity to advocate for their own rights and needs.",
      imgUrl: "/mic.png",
    },
    {
      title: "Climate Resilience",
      description:
        "Refugees are disproportionately affected by climate change, and they often lack the skills and resources to adapt to new challenges.",
      imgUrl: "/climate.png",
    },
    {
      title: "Digital solutions & Innovation",
      description:
        "Refugees often lack access to information and opportunities, which limits their ability to learn, work, and connect with others.",
      imgUrl: "/idea.png",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box
        sx={{
          display: isMobileView ? "block" : "flex",
          flex: 1,
        }}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={`repeat(auto-fit, minmax(${
            isMobileView ? "100%" : "300px"
          }, 1fr))`}
          gap={1}
          flex={0.7}
          // placeCon
          pt={isMobileView ? 4 : 0}
          // placeItems={"center"}
        >
          {partners.map((item, index) => (
            <Grid
              key={index}
              {...{ xs: 12, sm: 6, md: 4, lg: 3 }}
              // minHeight={200}
              sx={{
                "&:hover": {
                  boxShadow: 2,
                },
                boxShadow: 0,
                border: `1px solid ${theme.palette.action.hover}`,
                p: 2,
                borderRadius: 2,
                display: "flex",
                gap: 1,
              }}
            >
              <Image
                src={item.imgUrl}
                height={50}
                width={50}
                alt={item.title}
              />
              <Typography variant="body1" color={"text.secondary"}>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Box>
        <Box flex={0.3} p={1}>
          <Image
            src="https://images.pexels.com/photos/7275394/pexels-photo-7275394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            height={600}
            width={600}
            style={{
              borderRadius: 1,
              width: isMobileView ? "90%" : 300,
              height: isMobileView ? "90%" : "auto",
            }}
            alt="Programs"
          />
        </Box>
      </Box>
    </Box>
  );
}

// Initiative component
const Initiative: React.FC<{
  title: string;
  description: string;
  image: string;
  url: string;
}> = ({ title, description, image, url }) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        maxWidth: isMobileView ? "100%" : 350,
        "&:hover": {
          boxShadow: 2,
        },
        boxShadow: 0,
        border: `1px solid ${theme.palette.action.hover}`,
        bgcolor: theme.palette.background.paper,
        borderRadius: 2,
      }}
      href={url}
      underline="none"
      target="_blank"
      component={Link}
    >
      <Box>
        <Image
          src={image}
          height={800}
          width={1500}
          style={{
            height: 80,
            width: 100,
          }}
          alt={title}
        />
      </Box>
      <Box>
        <Typography variant={isMobileView ? "h6" : "h5"} color="text.primary">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
