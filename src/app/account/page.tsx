"use client";
import { Box, Typography } from "@mui/material";
import Slot from "@/components/Slot";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "typescript-cookie";

export default function Account() {
  const [images, setImages] = useState<string[]>([]);
  const [toolsImages, setToolsImages] = useState<string[]>([]);
  const [selectedCursor, setSelectedCursor] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/cursors/arrow");
        if (!response.ok) {
          throw new Error("Failed to fetch images from /api/cursors/arrow");
        }

        const data = await response.json();
        const imagePaths = data.map(
          (image: string) => `/cursors/Arrows/${image}`
        );
        setImages(imagePaths);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchToolsImages = async () => {
      try {
        const response = await fetch("/api/cursors/tools");
        if (!response.ok) {
          throw new Error("Failed to fetch images from /api/cursors/tools");
        }

        const data = await response.json();
        const toolImagePaths = data.map(
          (image: string) => `/cursors/Tools/${image}`
        );
        setToolsImages(toolImagePaths);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
    fetchToolsImages();

    const storedCursor = getCookie("selectedCursor");
    if (storedCursor) {
      setSelectedCursor(storedCursor);
    }
  }, []);

  const handleCursorSelect = (cursor: string) => {
    if (cursor === "/cursors/NoCursor.png") {
      document.documentElement.style.cursor = "auto";
      setSelectedCursor(null);
      setCookie("selectedCursor", "");
    } else {
      document.documentElement.style.cursor = `url('${cursor}'), auto`;
      setSelectedCursor(cursor);
      setCookie("selectedCursor", cursor);
    }
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
          width: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Slot
            imgSrc={"/cursors/NoCursor.png"}
            onSelect={handleCursorSelect}
          />
        </Box>
        <Typography>Arrows</Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {images.map((image, index) => (
            <Slot imgSrc={image} key={index} onSelect={handleCursorSelect} />
          ))}
        </Box>

        <Typography>Tools Cursors</Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {toolsImages.map((image, index) => (
            <Slot imgSrc={image} key={index} onSelect={handleCursorSelect} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
