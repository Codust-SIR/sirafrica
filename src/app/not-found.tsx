"use client";

import React from "react";
import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  Toolbar,
} from "@mui/material";
import HideAppBar from "../../components/AppDawer";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
const Index = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "inherit",
        },
      }),
    []
  );
  console.log({ pathname });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box
          sx={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={"/404_img.png"} height={300} width={500} alt="404" />
          <Typography variant="h3"> Page not Found.</Typography>
          <Typography variant="body1">
            <i>
              <b>{pathname}</b>
            </i>
            {"  "}
            is not found at the moment.
          </Typography>
          <Toolbar />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Button
              onClick={() => router.back()}
              variant="outlined"
              color="success"
            >
              Back
            </Button>
            <Button href="/" variant="contained" color="success">
              Home
            </Button>
          </Box>
          <Toolbar />
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
};

export default Index;
