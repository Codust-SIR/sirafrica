"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import HideAppBar from "../../../../components/AppDawer";
import Color from "color-thief-react";
import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  Link,
  CircularProgress,
  Divider,
  Icon,
  IconButton,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMemo, useState, useEffect } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { Product, getProductById } from "../../../../services/sentry";
import { getIcon } from "../../../../components/Impacts";
import moment from "moment";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "../../../../libs/sanity.client";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import AddRounded from "@mui/icons-material/AddRounded";
import RemoveRounded from "@mui/icons-material/RemoveRounded";

export default function Impact() {
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

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const id = usePathname().split("/")[usePathname().split("/").length - 1];
  useEffect(() => {
    getProductById(id).then((item) => {
      setProduct(item);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, [id]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box p={isMobileView ? 1 : 15} pt={1}>
          <Box
            sx={{
              p: 2,
              display: "grid",
              flex: 1,
              gap: 4,
              placeItems: "center",
            }}
          >
            <CustomizedBreadcrumbs />
            <Box
              sx={{
                width: isMobileView ? "100%" : "65%",
              }}
            >
              {loading ? (
                <Box
                  sx={{
                    display: "grid",
                    placeItems: "center",
                    height: "100%",
                  }}
                >
                  <CircularProgress size={30} color="success" />
                </Box>
              ) : (
                product && (
                  <Box>
                    <Box
                      sx={{
                        display: isMobileView ? "block" : "flex",
                        gap: 5,
                      }}
                    >
                      <Box flex={0.3}>
                        <Color
                          crossOrigin="anonymous"
                          format="hex"
                          src={product?.image.asset.url}
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
                                  backgroundColor: data,
                                  width: isMobileView ? "100%" : 250,
                                  height: isMobileView ? "100%" : 250,
                                  placeItems: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Image
                                  src={product?.image.asset.url}
                                  width={isMobileView ? 400 : 800}
                                  height={isMobileView ? 300 : 300}
                                  alt={product?.name}
                                  style={{
                                    height: isMobileView ? "100%" : 250,
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
                      <Box flex={0.7}>
                        <Typography
                          // fontSize={isMobileView ? 20 : 30}
                          variant={isMobileView ? "h5" : "h4"}
                        >
                          {product?.name}
                        </Typography>
                        <Typography
                          // fontSize={isMobileView ? 20 : 30}
                          variant={isMobileView ? "body2" : "body1"}
                        >
                          Category: {product?.category}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Typography variant={isMobileView ? "h5" : "h4"}>
                          <b>Ksh {product?.price}</b>
                        </Typography>
                        <br />
                        <FormDialog />
                      </Box>
                    </Box>
                    <br />
                    <br />
                    <PortableText
                      value={product.body}
                      components={myPortableTextComponents}
                    />
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
}

function CustomizedBreadcrumbs() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={Link}
          href="/"
          color="default"
          underline="none"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb
          component={Link}
          color="default"
          underline="none"
          href="/shop"
          label="Products"
        />
        <StyledBreadcrumb
          label={
            usePathname()
              .split("/")
              [usePathname().split("/").length - 2].charAt(0)
              .toUpperCase() +
            usePathname()
              .split("/")
              [usePathname().split("/").length - 2].slice(1)
          }
          deleteIcon={getIcon(
            usePathname()
              .split("/")
              [usePathname().split("/").length - 2].toLowerCase() as
              | "Blog"
              | "News"
              | "Report"
              | "Story"
          )}
          onDelete={handleClick}
        />
      </Breadcrumbs>
    </div>
  );
}

function FormDialog() {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="warning"
        sx={{
          textTransform: "none",
          width: "100%",
        }}
        startIcon={<AddShoppingCartRoundedIcon />}
      >
        Place order
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Place order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide your email address and the quantity you wish to order
            in the fields below. Our team will contact you shortly to gather
            more information from you.{" "}
          </DialogContentText>

          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              justifyContent: "center", // Add justifyContent property to center horizontally
              alignItems: "center", // Add alignItems property to center vertically
            }}
          >
            {/* Quantity */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                placeItems: "center",
                width: "100%",
              }}
            >
              <IconButton
                size="small"
                sx={{
                  bgcolor: "warning.main",
                  color: "white",
                  "&:hover": {
                    color: "warning.light",
                  },
                }}
                onClick={() => {
                  setQuantity((p) => p + 1);
                }}
                color="warning"
              >
                <AddRounded fontSize="small" />
              </IconButton>
              <Typography variant="h6">{quantity}</Typography>
              <IconButton
                size="small"
                sx={{
                  bgcolor: "warning.main",
                  color: "white",
                  "&:hover": {
                    color: "warning.light",
                  },
                }}
                color="warning"
                onClick={() => {
                  setQuantity((p) => {
                    if (p < 1) {
                      return p;
                    }
                    return p - 1;
                  });
                }}
              >
                <RemoveRounded fontSize="small" />
              </IconButton>
            </Box>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              color="warning"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <DialogContentText>
              Thank you for your interest, and we look forward to assisting you
              with your order.
            </DialogContentText>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              textTransform: "none",
            }}
            variant="outlined"
            color="error"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              textTransform: "none",
            }}
            variant="contained"
            color="warning"
            onClick={handleClose}
          >
            Order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
