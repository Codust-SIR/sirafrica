import {
  Box,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const Footer = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <Box
      bgcolor={"#303846"}
      sx={{
        p: isMobileView ? 1 : 10,
        color: "white",
      }}
    >
      <Box
        sx={{
          display: !isMobileView ? "flex" : "grid",
          // flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <br />
        <Box
          sx={{
            display: "flex",
            flex: 0.4,
            // alignItems: "center",
            // marginLeft: isMobileView ? "auto" : "0",
            // marginRight: isMobileView ? "auto" : "0",
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
            src="/sirafrica_logo_bw.png"
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
                color: "white",
                fontWeight: 800,
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
                letterSpacing: 1,
                color: "white",
              }}
            >
              Learn, Earn, Innovate
            </Typography>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
        <Box
          sx={{
            display: isMobileView ? "flex" : "grid",
            flexDirection: "column",
            gap: 5,
            gridTemplateColumns: "repeat(auto-fit, minmax(100px,1fr))",
            alignContent: "center",
            flex: 0.6,
          }}
        >
          <Box>
            <Typography variant="h6">
              <b>Contact Us</b>
            </Typography>
            <br />
            <Link href="tel:+254796761503" color="inherit" underline="hover">
              Tel: +254796761503
            </Link>
            <br />
            <br />
            <Typography variant="body1">Emails</Typography>
            <br />

            <Link
              href="mailto:soliref12@gmail.com"
              color="inherit"
              underline="hover"
            >
              soliref12@gmail.com
            </Link>
            <br />
            <Link
              href="mailto:info@sirafrica.org"
              color="inherit"
              underline="hover"
            >
              info@sirafrica.org
            </Link>
          </Box>
          <Box>
            <Typography variant="h6">
              <b>Join Our Journey</b>
            </Typography>
            <br />
            <br />
            <Link href="/donation" color="inherit" underline="hover">
              Donate
            </Link>
            <br />
            <br />
            <Link href="/volunteer" color="inherit" underline="hover">
              Volunteer
            </Link>
            <br />
            <br />
            <Link href="/partners" color="inherit" underline="hover">
              Become a Partner
            </Link>
          </Box>
          <Box>
            <Typography variant="h6">
              <b>Follow Us</b>
            </Typography>
            <Box>
              <IconButton
                href="https://twitter.com/SolidarityInit1"
                target="_blank"
                size="large"
              >
                <Image src="/x_icon.svg" height={30} width={30} alt="twitter" />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/soliref"
                target="_blank"
                size="large"
              >
                <Image
                  src="/facebook.svg"
                  height={30}
                  width={30}
                  alt="facebook"
                />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/company/solidarity-initiative-for-refugees-sir/?viewAsMember=true"
                target="_blank"
                size="large"
              >
                <Image
                  src="/linkedin.svg"
                  height={30}
                  width={30}
                  alt="facebook"
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <Typography>
        Copyright © {new Date().getFullYear()} Solidarity Initiative for
        Refugees
      </Typography>
    </Box>
  );
};

export default Footer;
