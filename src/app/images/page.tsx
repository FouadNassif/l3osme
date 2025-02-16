"use client";

import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Images() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        // Prefix the image filenames with the correct path
        const imagePaths = data.map((image: string) => `/images/${image}`);
        setImages(imagePaths);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "whitesmoke",
          textAlign: "center",
          marginBottom: "20px",
          fontFamily: "'Minecraftia', sans-serif",
        }}
      >
        Image Gallery
      </Typography>

      {/* Grid container for images */}
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={6} sm={6} md={6} key={index}>
            <Box
              sx={{
                width: "100%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                position: "relative",
              }}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Show the whole image without cropping
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
