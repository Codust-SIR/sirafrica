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
  Divider,
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
import Color from "color-thief-react";

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
    programeImage: string;
  }[] = [
    {
      programe: "Education",
      programeImage:
        "https://th.bing.com/th/id/R.101696699d7e931bddf71141273d3937?rik=3%2fKMJDDcW%2bghhQ&pid=ImgRaw&r=0",
      url: "education",
    },
    {
      programe: "Livelihoods ",

      programeImage:
        "https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "livelihoods",
    },
    {
      programe: "Digital solutions & Innovation",
      programeImage: "https://axyya.com/wp-content/uploads/2021/03/web2.png",
      url: "digital",
    },
    {
      programe: "Advocacy & Capacity Strengthening",
      programeImage: "/bahydro5.jpg",
      url: "advocacy",
    },
    {
      programe: "Climate Resilience",
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
      image: "/codedust.png",
      url: "https://codust-tutorial.vercel.app/",
    },
    {
      title: "Shop for Change",
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
          <Box p={2}>
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
            p={isMobileView ? 1 : 10}
            bgcolor={theme.palette.action.hover}
            sx={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.success.main,
                }}
                variant={isMobileView ? "h5" : "h4"}
              >
                Our Mission
              </Typography>{" "}
              <Divider />
            </Box>
            <br />
            <Box
              sx={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  alignItems: "center",
                }}
              >
                Our mission is to support youth (both men and women equally)
                back to the path of regaining what insecurity, discrimination,
                war, and disaster took away from them.
              </Typography>
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
              gap={1}
              pt={isMobileView ? 1 : 0}
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

          {/* Get involved */}
          <Box
            display={isMobileView ? "block" : "flex"}
            justifyContent={"space-around"}
            p={2}
            bgcolor={theme.palette.action.hover}
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
              gridTemplateColumns={`repeat(auto-fit, minmax(${
                isMobileView ? "100%" : "300px"
              }, 1fr))`}
              gap={1}
              p={isMobileView ? 2 : 0}
            >
              {initiatives.map((item, i) => (
                <Initiative {...item} key={i} />
              ))}
            </Box>
          </Box>
          {/* Our Parters */}
          <CenteredBox
            bgcolor={theme.palette.action.hover}
            sx={{ p: isMobileView ? 1 : 10 }}
          >
            <Typography variant="h4">Our Partners</Typography>
            <br />
            <Parterns />
          </CenteredBox>
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
            <Box
              display={"grid"}
              gridTemplateColumns={`repeat(auto-fit, minmax(${
                isMobileView ? "100%" : "250px"
              }, 1fr))`}
              gap={1}
              p={isMobileView ? 2 : 0}
              pt={isMobileView ? 0 : 4}
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
  programe,
  programeImage,
  url,
}: {
  programe: string;
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
          // padding: 3,
          margin: 0,
          paddingTop: 1,
        }}
      >
        <Color crossOrigin="anonymous" format="hex" src={programeImage}>
          {({ data, loading, error }) => {
            if (loading)
              return (
                <Box
                  sx={{
                    display: "grid",
                    placeItems: "center",
                    height: "100%",
                  }}
                >
                  <Image
                    src={"/image-placeholder.svg"}
                    width={isMobileView ? 400 : 800}
                    height={isMobileView ? 300 : 300}
                    alt={"Image"}
                    style={{
                      height: isMobileView ? "100%" : 300,
                      width: "100%",
                      objectFit: "contain",
                      // Image to be blury to show loading
                      filter: "blur(10px)",
                    }}
                    key={"Loading Image"}
                  />{" "}
                </Box>
              );
            return (
              <Box
                sx={{
                  backgroundColor: data,
                  width: "100%",
                  height: "100%",
                  placeItems: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={programeImage}
                  width={isMobileView ? 400 : 800}
                  height={isMobileView ? 150 : 300}
                  alt={programe}
                  style={{
                    height: isMobileView ? 150 : 300,
                    width: "100%",
                    objectFit: "cover",
                    // Background color should be picked from the image dominant color
                  }}
                />
              </Box>
            );
          }}
        </Color>

        <CardContent
          style={{
            flex: 1,
            padding: 2,
            margin: 0,
          }}
        >
          <Typography gutterBottom variant={isMobileView ? "h5" : "h4"}>
            {programe}
          </Typography>
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
            size="large"
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
          // sx={{
          //   "--Grid-borderWidth": "1px",
          //   borderTop: "var(--Grid-borderWidth) solid",
          //   borderLeft: "var(--Grid-borderWidth) solid",
          //   borderColor: "divider",
          //   "& > div": {
          //     borderRight: "var(--Grid-borderWidth) solid",
          //     borderBottom: "var(--Grid-borderWidth) solid",
          //     borderColor: "divider",
          //   },
          // }}
        >
          {partners.map((item, index) => (
            <Grid
              key={index}
              {...{ xs: 12, sm: 6, md: 4, lg: 3 }}
              minHeight={160}
            >
              <Color
                crossOrigin="anonymous"
                format="hex"
                src={item.imageFile.asset.url}
              >
                {({ data, loading, error }) => {
                  if (loading)
                    return (
                      <Box
                        sx={{
                          display: "grid",
                          placeItems: "center",
                          height: "100%",
                        }}
                      >
                        <CircularProgress size={20} color="success" />
                      </Box>
                    );
                  return (
                    <Box
                      sx={{
                        backgroundColor: [
                          "source",
                          "openstreet",
                          "united",
                          "cyber ",
                          "world",
                          "danish",
                        ].some((substring) =>
                          item.name.toLowerCase().includes(substring)
                        )
                          ? theme.palette.background.paper
                          : data,
                        width: isMobileView ? "100%" : "auto",
                        maxHeight: isMobileView ? 120 : 180,
                        display: "grid",
                        placeItems: "center",
                        alignItems: "center",
                        borderRadius: 1,
                      }}
                    >
                      <Image
                        src={item.imageFile.asset.url}
                        height={500}
                        width={500}
                        alt={item.name}
                        style={{
                          borderRadius: 1,
                          width: isMobileView ? "100%" : "auto",
                          maxHeight: isMobileView ? 120 : 150,
                          maxWidth: isMobileView ? 120 : 250,
                          objectFit: "contain",
                          // Background color should be picked from the image dominant color
                        }}
                      />
                    </Box>
                  );
                }}
              </Color>
              {/* <Image
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
              /> */}
              <Typography variant="subtitle1" color={"text.secondary"}>
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
                style={{
                  height: isMobileView ? 30 : 50,
                  width: isMobileView ? 30 : 50,
                }}
              />
              <Typography
                variant={isMobileView ? "caption" : "body1"}
                color={"text.secondary"}
              >
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Box>
        <Box flex={0.3} p={1}>
          <Color
            crossOrigin="anonymous"
            format="hex"
            src={
              "https://images.pexels.com/photos/7275394/pexels-photo-7275394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          >
            {({ data, loading, error }) => {
              if (loading)
                return (
                  <Box
                    sx={{
                      display: "grid",
                      placeItems: "center",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={"/image-placeholder.svg"}
                      width={isMobileView ? 400 : 800}
                      height={isMobileView ? 300 : 300}
                      alt={"Image"}
                      style={{
                        height: isMobileView ? "100%" : 300,
                        width: "100%",
                        objectFit: "contain",
                        // Background color should be picked from the image dominant color
                      }}
                    />{" "}
                  </Box>
                );
              return (
                <Box
                  sx={{
                    backgroundColor: data,
                    width: "100%",
                    height: "100%",
                    placeItems: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={
                      "https://images.pexels.com/photos/7275394/pexels-photo-7275394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    width={isMobileView ? 400 : 800}
                    height={isMobileView ? 300 : 300}
                    alt={"Image"}
                    style={{
                      height: isMobileView ? "100%" : 300,
                      width: "100%",
                      objectFit: "contain",
                      // Background color should be picked from the image dominant color
                    }}
                  />
                </Box>
              );
            }}
          </Color>
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
      <Box p={1}>
        <Image
          src={image}
          height={800}
          width={1500}
          style={{
            height: isMobileView ? 50 : 70,
            width: isMobileView ? 50 : 70,
          }}
          alt={title}
        />
      </Box>
      <Box pt={1}>
        <Typography
          variant={isMobileView ? "subtitle1" : "h5"}
          color="text.primary"
        >
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
