"use client";

import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Videos() {
  const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();
        const videoPaths = data.map((video: string) => `/videos/${video}`);
        setVideos(videoPaths);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
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
        Video Gallery
      </Typography>

      {/* Grid container for videos */}
      <Grid container spacing={2}>
        {videos.map((video, index) => (
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
              <video
                controls
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Keep the full video visible
                  borderRadius: "8px",
                }}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
