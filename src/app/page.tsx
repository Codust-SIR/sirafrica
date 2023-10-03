"use client";

import Image from "next/image";
import styles from "./page.module.css";
import HideAppBar from "../../components/AppDawer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <HideAppBar>
      <Box></Box>
    </HideAppBar>
  );
}
