import { Box } from "@mui/material";

interface SlotProps {
  imgSrc: string;
  onSelect: (imgSrc: string) => void; // Function to handle image selection
}

export default function Slot({ imgSrc, onSelect }: SlotProps) {
  return (
    <Box
      sx={{
        display: "flex", // Use flexbox to center the content
        justifyContent: "center", // Centers the image horizontally
        alignItems: "center", // Centers the image vertically
        width: "60px", // Set the size of the container
        height: "60px",
        backgroundImage: "url('/img/Slot_outline.png')", // Background image for the box
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onClick={() => onSelect(imgSrc)} // When clicked, the image will be selected
    >
      <img
        src={imgSrc}
        style={{
          objectFit: "contain", // Ensures the image scales correctly without cropping
          width: "70%", // Ensures the image fits inside the box without distortion
          height: "70%", // Ensures the image fits inside the box without distortion
        }}
      />
    </Box>
  );
}
