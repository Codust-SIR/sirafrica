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
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  CircularProgress,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import RectangleRoundedIcon from "@mui/icons-material/RectangleRounded";
import DensitySmallRoundedIcon from "@mui/icons-material/DensitySmallRounded";
import { Product, getProducts } from "../../../services/sentry";
import { MoreBlogcard } from "../../../components/Impacts";
import Color from "color-thief-react";

export default function Shop() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const [selectedOption, setSelectedOption] = useState<
    "all" | "3d" | "shirts" | "books" | "stickers"
  >("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, []);

  useEffect(() => {
    const option = window.location.hash.replace("#", "") as
      | "all"
      | "3d"
      | "shirts"
      | "books"
      | "stickers";

    if (option) {
      setSelectedOption(option);
    }

    return () => {
      setSelectedOption("all");
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box p={isMobileView ? 1 : 15} pt={1}>
          {/* Impacts */}
          <Box
            sx={{
              p: 2,
              display: isMobileView ? "block" : "flex",
              flex: 1,
              gap: 4,
            }}
          >
            <Box flex={0.2}>
              <Image
                src={"/sir_shop.png"}
                height={800}
                width={1500}
                style={{
                  height: isMobileView ? 50 : 60,
                  width: isMobileView ? 50 : 60,
                }}
                alt={"Shop for Changes"}
              />
              <br />
              <List
                sx={{
                  display: isMobileView ? "flex" : "block",
                  gap: 3,
                  p: 0,
                  m: 0,
                }}
              >
                <ListItemButton
                  selected={selectedOption === "all"}
                  sx={{ borderRadius: 2 }}
                  onClick={() => setSelectedOption("all")}
                >
                  <ListItemIcon>
                    <DensitySmallRoundedIcon />
                  </ListItemIcon>
                  {!isMobileView && <ListItemText primary="All" />}
                </ListItemButton>
                <ListItemButton
                  selected={selectedOption === "3d"}
                  sx={{ borderRadius: 2 }}
                  onClick={() => setSelectedOption("3d")}
                >
                  <ListItemIcon>
                    <ViewInArRoundedIcon />
                  </ListItemIcon>
                  {!isMobileView && <ListItemText primary="3D Products" />}
                </ListItemButton>
                <ListItemButton
                  selected={selectedOption === "shirts"}
                  sx={{ borderRadius: 2 }}
                  onClick={() => setSelectedOption("shirts")}
                >
                  <ListItemIcon>
                    <EmojiPeopleRoundedIcon />
                  </ListItemIcon>
                  {!isMobileView && <ListItemText primary="Shirts" />}
                </ListItemButton>
                <ListItemButton
                  selected={selectedOption === "books"}
                  sx={{ borderRadius: 2 }}
                  onClick={() => setSelectedOption("books")}
                >
                  <ListItemIcon>
                    <BookRoundedIcon />
                  </ListItemIcon>
                  {!isMobileView && <ListItemText primary="Books" />}
                </ListItemButton>
                <ListItemButton
                  selected={selectedOption === "stickers"}
                  sx={{ borderRadius: 2 }}
                  onClick={() => setSelectedOption("stickers")}
                >
                  <ListItemIcon>
                    <RectangleRoundedIcon />
                  </ListItemIcon>
                  {!isMobileView && <ListItemText primary="Stickers" />}
                </ListItemButton>
              </List>
              <Toolbar />
            </Box>
            <Box flex={0.8}>
              <Typography variant="h5">
                {
                  {
                    all: "All",
                    "3d": "3D Products",
                    shirts: "Shirts",
                    books: "Books",
                    stickers: "Stickers",
                  }[selectedOption]
                }
              </Typography>
              <br />
              <Box
                display={"grid"}
                gridTemplateColumns={`repeat(auto-fit, minmax(${
                  isMobileView ? "100%" : "230px"
                }, 1fr))`}
                gap={1}
                pt={isMobileView ? 4 : 0}
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
                ) : products.filter((item) => {
                    if (selectedOption === "all") return true;
                    return (
                      item &&
                      item.category &&
                      item.category.toLowerCase() ===
                        selectedOption.toLowerCase()
                    );
                  }).length > 0 ? (
                  products
                    .filter((item) => {
                      if (selectedOption === "all") return true;
                      return (
                        item &&
                        item.category &&
                        item.category.toLowerCase() ===
                          selectedOption.toLowerCase()
                      );
                    })
                    .map((item, index) => {
                      return <ProductComponent key={index} {...item} />;
                    })
                ) : (
                  <Box
                    display={"grid"}
                    sx={{
                      placeItems: "center",
                      heigh: "100%",
                      justyfyContent: "center",
                    }}
                  >
                    <Typography>No content found</Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

function ProductComponent({ name, image, price, _id }: Product) {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <Card
      component={Link}
      underline="none"
      color="inherit"
      href={`/shop/${_id}`}
      sx={{
        maxWidth: isMobileView ? "100%" : 250,
        "&:hover": {
          boxShadow: 2,
        },
        boxShadow: 0,
        border: `1px solid ${theme.palette.action.hover}`,
      }}
    >
      <Image
        src={image.asset.url}
        width={isMobileView ? 400 : 800}
        height={isMobileView ? 300 : 300}
        alt={name}
        style={{
          height: isMobileView ? "100%" : 250,
          width: isMobileView ? "100%" : 250,
          objectFit: "contain",
        }}
      />
      <CardContent sx={{ m: 0.5, p: 0.5 }}>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="body1" fontWeight={700}>
          Ksh {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
