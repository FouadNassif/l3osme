import { Box } from "@mui/material";
import Link from "next/link"; // Use Next.js Link component

export default function NavBar() {
  const links = [
    {
      link: "/",
      text: "Home",
      icon: "/img/Home.png", // Add your icon path here
    },
    {
      link: "/calculate",
      text: "Calculate",
      icon: "/img/Calculator.png", // Add your icon path here
    },
    {
      link: "/images",
      text: "Images",
      icon: "/img/Images.png", // Add your icon path here
    },
    {
      link: "/videos",
      text: "Videos",
      icon: "/img/Videos.png", // Add your icon path here
    },
    {
      link: "/news",
      text: "News",
      icon: "/img/News.png", // Add your icon path here
    },
    {
      link: "/account",
      text: "Account",
      icon: "/img/Account.png", // Add your icon path here
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Centers the items horizontally
        position: "fixed",
        bottom: "10px", // Fixed to the bottom of the page
        left: "50%", // Position at 50% of the width of the viewport
        transform: "translateX(-50%)", // Offset the box by half its width to truly center it
        width: "auto", // Allow the width to be based on its content (the links)
      }}
    >
      {links.map((item, index) => (
        <Link key={index} href={item.link} passHref>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Centers the image horizontally
              alignItems: "center", // Centers the image vertically
              width: "60px",
              height: "60px",
              backgroundImage: "url('/img/Slot_outline.png')", // Background image
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={item.icon}
              alt={item.text}
              style={{
                maxWidth: "70%", // Makes sure the image fits within the box
                maxHeight: "70%",
              }}
            />
          </Box>
        </Link>
      ))}
    </Box>
  );
}
