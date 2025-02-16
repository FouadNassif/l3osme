"use client";
import { Box, Typography, TextField, Grid } from "@mui/material";
import { useState } from "react";

export default function Calculate() {
  let [calValue, setCalValue] = useState(0);

  // Minecraft-inspired styles
  const minecraftFont = {
    fontFamily: '"Minecraftia", sans-serif', // Assuming a custom font or similar pixelated font
    fontSize: "20px",
    color: "#ffffff",
  };

  const imgStyle = {
    maxWidth: "25px", // Adjusted for a cleaner look
    maxHeight: "25px",
    marginRight: "8px",
  };

  const textStyle = {
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          backgroundImage: "url('/img/Map.png')", // Background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: { xs: "70%", md: "40%" },
          height: "80vh",
          color: "#171717",
          flexDirection: "column",
          padding: "20px 50px", // Padding adjusted for more breathing space
          borderRadius: "10px",
        }}
      >
        <input
          type="number"
          value={calValue}
          onChange={(e) => {
            setCalValue(Number(e.target.value));
          }}
          style={{
            outline: "0",
            color: "#171717",
            marginBottom: "20px",
            borderTop: "0",
            borderLeft: "0",
            borderRight: "0",
            borderBottom: "2px solid #000", // Thinner border for cleaner look
            fontSize: "24px",
            fontWeight: "700",
            background: "transparent",
            textAlign: "center",
            width: "100%",
          }}
          placeholder="Enter number of blocks"
        />

        {/* Calculation Results */}
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12}>
            <Typography sx={textStyle}>
              <img src="/img/Block.png" style={imgStyle} alt="Block" /> Total
              Blocks: {calValue}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={textStyle}>
              <img src="/img/Block.png" style={imgStyle} alt="Block" /> Total
              Stacks: {calValue / 64}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={textStyle}>
              <img src="/img/Stairs.png" style={imgStyle} alt="Stairs" />{" "}
              Stairs: {Math.floor((4 / 6) * calValue)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={textStyle}>
              <img src="/img/Slab.png" style={imgStyle} alt="Slab" /> Slabs:{" "}
              {Math.floor((6 / 3) * calValue)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={textStyle}>
              <img src="/img/Shulker.png" style={imgStyle} alt="Shulker" />{" "}
              Shulker: {(calValue / (27 * 64)).toFixed(1)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={textStyle}>
              <img src="/img/Chest.png" style={imgStyle} alt="Chest" /> Double
              Chest: {(calValue / (54 * 64)).toFixed(1)}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
