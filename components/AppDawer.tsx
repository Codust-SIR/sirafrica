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
  Grow,
  Icon,
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
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Image from "next/image";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Footer from "./Footer";

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

export default function HideAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));
  const [hoveredNavItem, setHoveredNavItem] = React.useState<
    { name: string; url: string }[]
  >([]);
  const pathname = usePathname();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [navItems, setNavItems] = React.useState<
    {
      name: string;
      url: string;
      hasMore: boolean;
      isExpanded?: boolean;
      more?: { name: string; url: string }[];
    }[]
  >([
    {
      name: "Who we are",
      url: "/company-info",
      hasMore: true,
      isExpanded: false,
      more: [
        {
          name: "Our Initiatives",
          url: "/our-initiatives",
        },
        {
          name: "Our Team",
          url: "/our-team",
        },
        {
          name: "Our Partners",
          url: "our-parterns",
        },
      ],
    },
    {
      name: "Programmes",
      url: "/programms",
      hasMore: true,
      more: [
        {
          name: "Programming/Codedust",
          url: "/codedust",
        },
        {
          name: "Leap",
          url: "/leap",
        },
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      name: "Blogs",
      url: "/blogs",
      hasMore: false,
    },
    {
      name: "Stories",
      url: "/stories",
      hasMore: false,
    },
    {
      name: "Get involved",
      url: "/join",
      hasMore: false,
    },
  ]);
  const container =
    window !== undefined ? () => window().document.body : undefined;

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
              color: (theme) => theme.palette.success.main,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            SIR
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

  return (
    <React.Fragment>
      <CssBaseline />

      <HideOnScroll {...props}>
        <AppBar
          onMouseLeave={() => {
            const updatedNavItems = navItems.map((item) => ({
              ...item,
              isExpanded: false, // Set isExpanded to false when the mouse leaves AppBar
            }));

            setNavItems(updatedNavItems); // Update the state with the new array
            setHoveredNavItem([]);
          }}
          sx={{ boxShadow: 0 }}
          color="inherit"
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: !isMobileView ? "space-between" : "start",
              p: isMobileView ? 1 : 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // marginLeft: isMobileView ? "auto" : "0",
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
                    letterSpacing: 3,
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
                    letterSpacing: 2,
                  }}
                >
                  Learn, Earn, Innovate
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: 5,
                alignItems: "center",
              }}
            >
              {navItems.map((item, index) => (
                <div
                  onMouseOver={() => {
                    if (!item.hasMore || !item.more) return;
                    const updatedNavItems = [...navItems]; // Create a copy of the original array
                    updatedNavItems[index] = {
                      ...item,
                      isExpanded: true, // Set isExpanded to true on mouse over
                    };
                    setHoveredNavItem(item.more);
                    setNavItems(updatedNavItems); // Update the state with the new array
                  }}
                  onMouseOut={() => {
                    if (!item.hasMore) return;

                    if (
                      !navItems.filter((item) => item.isExpanded === true)[0]
                        .hasMore
                    )
                      return;

                    const updatedNavItems = [...navItems]; // Create a copy of the original array
                    updatedNavItems[index] = {
                      ...item,
                      isExpanded: false, // Set isExpanded to false on mouse out
                    };
                    setNavItems(updatedNavItems); // Update the state with the new array
                  }}
                  key={item.name}
                >
                  <Link
                    href={item.url}
                    sx={{
                      color: "text.secondary",
                      textTransform: "none",
                      ml: 0.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                    underline="hover"
                  >
                    {item.name}
                    {item.hasMore && (
                      <>
                        <Icon>
                          {item.isExpanded ? (
                            <ExpandLessRoundedIcon />
                          ) : (
                            <ExpandMoreRoundedIcon />
                          )}
                        </Icon>
                      </>
                    )}
                  </Link>
                </div>
              ))}
              <Button
                variant="contained"
                color="success"
                sx={{
                  textTransform: "none",
                  borderRadius: 5,
                }}
                href="/donate"
                startIcon={<VolunteerActivismRoundedIcon />}
              >
                Donate
              </Button>
            </Box>
            <Box display={{ sm: "none", xs: "flex" }} gap={3}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  textTransform: "none",
                  borderRadius: 5,
                  display: { sm: "none" },
                }}
                href="/donate"
                startIcon={<VolunteerActivismRoundedIcon />}
                size="small"
              >
                Donate
              </Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
          {hoveredNavItem.length > 0 && (
            <Grow
              in
              // style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 1000 }}
            >
              <Toolbar
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px,300px))",
                  alignContent: "center",
                }}
              >
                {hoveredNavItem.map((item) => (
                  <Box key={item.name}>
                    <Link
                      href={item.url}
                      sx={{
                        color: "text.secondary",
                        textTransform: "none",
                        ml: 0.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                      underline="hover"
                    >
                      {item.name}
                    </Link>
                  </Box>
                ))}
              </Toolbar>
            </Grow>
          )}
        </AppBar>
      </HideOnScroll>
      <Box component="nav" bgcolor={theme.palette.action.active}>
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
              width: "70%",
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
      <Footer />
    </React.Fragment>
  );
}
