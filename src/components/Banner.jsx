import { Box, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box maxWidth={550} margin="auto" textAlign="center">
      <Typography fontWeight={400} mb={2} variant="h5">
        Welcome to the Alfred AI 🤖
      </Typography>
      <Typography fontWeight={300} variant="h5">
        I am Alfred who provides information to Master Safin in order to conquer
        his quest of being <br />
        The Dark Knight 🦇
      </Typography>
    </Box>
  );
};

export default Banner;
