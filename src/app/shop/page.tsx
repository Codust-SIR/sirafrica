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
} from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import RectangleRoundedIcon from "@mui/icons-material/RectangleRounded";
import DensitySmallRoundedIcon from "@mui/icons-material/DensitySmallRounded";
import { Product, getProducts } from "../../../services/sentry";
import { MoreBlogcard } from "../../../components/Impacts";

export default function Donate() {
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

              <Box
                display={"grid"}
                gridTemplateColumns={`repeat(auto-fit, minmax(${
                  isMobileView ? "100%" : "250px"
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
                      item.type.toLowerCase() === selectedOption.toLowerCase()
                    );
                  }).length > 0 ? (
                  products
                    .filter((item) => {
                      if (selectedOption === "all") return true;
                      return (
                        item.type.toLowerCase() === selectedOption.toLowerCase()
                      );
                    })
                    .map((item, index) => {
                      return <Product key={index} {...item} />;
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

function Product({ name, description, image, type, price, _id }: Product) {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });

  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 1,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: isMobileView ? 200 : 300,
          width: "100%",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Image
          src={image.asset.url}
          alt={name}
          height={isMobileView ? 200 : 300}
          width={isMobileView ? 200 : 300}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          height: "100%",
        }}
      >
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body2">{price}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Link href={`/shop/${_id}`} underline="none">
            <Button
              variant="contained"
              color="success"
              startIcon={<ViewInArRoundedIcon />}
            >
              View
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
