import { Box, Typography } from "@mui/material";

export default function NewsComp({ title, description }) {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF", // Clean white background
        padding: "15px",
        width: { xs: "100%", md: "80%" },
        marginBottom: "15px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
        borderLeft: "5px solid #007BFF", // Accent color on the left for style
      }}
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "18px",
          color: "#1E1E1E", // Dark text for readability
          marginBottom: "5px",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#555", // Slightly darker text for contrast
          fontSize: "14px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
