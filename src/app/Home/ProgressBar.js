// components/CircularProgressWithLabel.js
"use client";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularProgressWithLabel({ value }) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={100}
        size={20}
        thickness={6}
        sx={{ color: "gray", position: 'absolute' }} // light gray background
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={20}
        thickness={6}
        sx={{ color: "white" }} // actual progress
      />
    </Box>
  );
}
