"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
} from "@mui/material";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import { useMemo } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { Logo, getPartners } from "../../services/sentry";
import DonateCard from "../../components/DonateCard";

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
    {
      programe: "Digital solutions & Innovation",
      description: "d",
      programeImage: "https://axyya.com/wp-content/uploads/2021/03/web2.png",
      url: "digital",
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
          <OurImpacts />
          {/* Our Parters */}
          <CenteredBox
            bgcolor={theme.palette.action.hover}
            sx={{ p: isMobileView ? 1 : 10 }}
          >
            <Typography variant="h4">Our Parterns</Typography>
            <br />
            <Parterns />
          </CenteredBox>
          {/* Get involved */}
          <Box
            display={isMobileView ? "block" : "flex"}
            justifyContent={"space-between"}
            p={2}
          >
            <Box
              sx={{
                height: isMobileView ? 300 : 400,
                width: isMobileView ? "100%" : "900px",
                backgroundImage:
                  "url(https://images.pexels.com/photos/7386009/pexels-photo-7386009.jpeg?auto=compress&cs=tinysrgb&w=1200)",
                backgroundSize: "cover", // Initially set for larger screens
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                color: "white",
                pl: 6,
                borderRadius: 1,
                objectFit: "fill",
              }}
            >
              <Typography
                fontWeight={700}
                variant={isMobileView ? "subtitle2" : "subtitle1"}
                sx={{
                  // textAlign: "center",
                  width: isMobileView ? "100%" : "40%",

                  color: (theme) => theme.palette.success.main,
                  fontWeight: 700,
                  letterSpacing: 3,
                }}
              >
                SIR - Learn, Earn, Innovate
              </Typography>
              <br />
              <Typography
                fontWeight={700}
                sx={{
                  width: isMobileView ? "100%" : "40%",
                }}
                variant={isMobileView ? "h5" : "h4"}
              >
                Get Involved
              </Typography>
              <br />
              <Typography
                variant={isMobileView ? "body1" : "subtitle1"}
                sx={{
                  width: isMobileView ? "100%" : "30%",
                }}
              >
                At SIR, we&rsquo;re committed to empowering Kakuma&rsquo;s youth
                through digital education and training, founded by young
                refugees in 2016.
              </Typography>
              <Typography
                variant={isMobileView ? "body1" : "subtitle1"}
                sx={{
                  width: isMobileView ? "100%" : "30%",
                }}
              >
                But we need your help
              </Typography>
              <br />
              <Button
                variant="contained"
                color="success"
                sx={{
                  textTransform: "none",
                  borderRadius: 5,
                }}
                size="large"
                href="/donate"
                startIcon={<VolunteerActivismRoundedIcon />}
              >
                Donate
              </Button>
            </Box>
            <DonateCard />
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

const OurImpacts = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
      <Carousel responsive={responsive2}>
        <StoryBlogCard />
        <StoryBlogCard />
        <StoryBlogCard />
        <StoryBlogCard />
        <StoryBlogCard />
        <StoryBlogCard />
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
        <MoreBlogcard />
        <MoreBlogcard />
        <MoreBlogcard />
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
        Learn more of our impacts
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

function StoryBlogCard() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const isSmallPC = useMediaQuery(() => theme.breakpoints.down("md"));
  return (
    <Card
      sx={{
        maxWidth: isSmallPC ? 500 : 670,
        display: isMobileView ? "block" : "flex",
        m: 1,
        mr: 2,

        "&:hover": {
          boxShadow: 2,
        },
        boxShadow: 0,
        border: `1px solid ${theme.palette.action.hover}`,
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        style={{ maxHeight: 280, width: "100%", objectFit: "cover" }}
        image="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
          Read more
        </Button>
      </CardContent>
    </Card>
  );
}

const MoreBlogcard = ({}: {}) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        maxWidth: isMobileView ? "100%" : 350,
        "&:hover": {
          boxShadow: 2,
        },
        boxShadow: 0,
        border: `1px solid ${theme.palette.action.hover}`,
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Box display={"flex"} gap={2}>
          <Typography
            display={"flex"}
            alignItems={"center"}
            variant="caption"
            gap={1}
            color={"text.secondary"}
          >
            {" "}
            <EventRoundedIcon fontSize="small" />
            Ago
          </Typography>

          <Typography
            display={"flex"}
            alignItems={"center"}
            variant="caption"
            gap={1}
            color={"text.secondary"}
          >
            <NewspaperRoundedIcon fontSize="small" />
            Type
          </Typography>
        </Box>
        <Typography mt={2} variant="h6">
          Our Codedust program
        </Typography>
      </CardContent>
    </Card>
  );
};

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
