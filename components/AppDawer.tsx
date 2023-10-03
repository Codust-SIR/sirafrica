import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Slide from "@mui/material/Slide";
import {
  Button,
  Divider,
  Drawer,
  Fab,
  Fade,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { usePathname } from "next/navigation";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Image from "next/image";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}
const drawerWidth = 240;
const navItems: { name: string; url: string }[] = [
  {
    name: "Who we are",
    url: "/",
  },
  {
    name: "Products",
    url: "/products",
  },
  {
    name: "Verified",
    url: "/verified",
  },
  {
    name: "Young Champion",
    url: "/champion",
  },
];
export default function HideAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const pathname = usePathname();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display={"flex"} gap={1}>
          <Image
            height={100}
            width={100}
            alt="SIR"
            src="/sirafrica_logo.png"
            style={{
              height: 30,
              width: 30,
            }}
          />

          <Typography
            variant="h5"
            component="h5"
            sx={{
              flexGrow: 1,
              color: (theme) => theme.palette.primary.main,
              fontWeight: 700,
            }}
          >
            Open Gates
          </Typography>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          //   sx={{ mr: 2, display: { sm: "none" } }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              href={item.url}
              sx={{
                textAlign: "center",
                border: item.url === pathname ? "1px dodgerblue solid" : "none",
                m: 0.5,
                borderRadius: 1,
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ boxShadow: 0, p:2 }} color="inherit">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: isMobileView ? "auto" : "0",
                marginRight: isMobileView ? "auto" : "0",
                gap: 2,
              }}
              component={Link}
              href="/"
              underline="none"
            >
              <Image
                height={100}
                width={100}
                alt="Open Gates"
                src="/sirafrica_logo.png"
                style={{
                  height: 45,
                  width: 45,
                }}
              />
              <Box>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    flexGrow: 1,
                    color: (theme) => theme.palette.success.main,
                    fontWeight: 700,
                  }}
                >
                  SIR
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    flexGrow: 1,
                    color: "text.primary",
                  }}
                >
                  Learn, Earn, Inovate
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  href={item.url}
                  key={item.name}
                  sx={{
                    color: "text.secondary",
                    textTransform: "none",
                    ml: 0.5,
                  }}
                  variant={item.url === pathname ? "outlined" : "text"}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar id="back-to-top-anchor" />
      <Toolbar />

      <Box>{props.children}</Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
