"use client";

import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "80%", md: "40%" }, // Make image responsive by reducing maxWidth on smaller screens
          marginBottom: "20px", // Add margin to the bottom for spacing
          display: "flex",
          justifyContent: "center", // Center the image horizontally
        }}
      >
        <img
          src="/img/Banner.png"
          alt="3osme Minecraft Server"
          style={{
            width: "100%", // Ensure the image fills its container
            borderRadius: "8px", // Rounded corners for the image
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "80%", // Adjust width for mobile devices
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontFamily: "'Minecraftia', sans-serif",
            marginBottom: "20px",
            fontSize: { xs: "24px", sm: "30px", md: "36px" }, // Adjust font size for mobile
          }}
        >
          Welcome to 3osme – A Minecraft Adventure Like No Other!
        </Typography>

        <Typography
          sx={{
            color: "#ccc",
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Adjust font size for mobile
            lineHeight: "1.6",
          }}
        >
          Established on <strong>December 5, 2023</strong>,{" "}
          <strong>3osme</strong> is more than just a Minecraft server; it’s an
          evolving world that brings together{" "}
          <strong>creativity, exploration, and community</strong>. Named after
          the <strong>Rachiine</strong> region in <strong>North Lebanon</strong>
          , 3osme is built with the spirit of this beautiful city at its
          heart—proud, resilient, and full of life. Our server is designed to
          provide a truly immersive Minecraft experience that stands out from
          the rest. It’s a place where <strong>friendships blossom</strong>,
          where <strong>epic builds</strong> come to life, and where you can
          always find the excitement you’ve been looking for.
        </Typography>

        <Typography
          sx={{
            color: "#ccc",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: "1.6",
            marginTop: "20px",
          }}
        >
          At <strong>3osme</strong>, we believe that a Minecraft server is only
          as good as its community. From the moment you join, you’ll realize
          that this isn’t just a place to play Minecraft—it’s a place where you{" "}
          <strong>belong</strong>. Whether you're a seasoned Minecraft veteran
          or a newcomer eager to learn, you'll find a supportive group of
          players who are all here to enjoy the game and have fun together.{" "}
          <strong>3osme</strong> has a reputation for its{" "}
          <strong>warm and welcoming atmosphere</strong>, and we take pride in
          fostering friendships that last beyond the game.
        </Typography>

        <Typography
          sx={{
            color: "#ccc",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: "1.6",
            marginTop: "20px",
          }}
        >
          Whether you’re here to build, explore, or simply vibe with friends,
          there’s always a place for you in our world. Come join us, and see for
          yourself why <strong>3osme</strong> is one of the most exciting
          Minecraft servers around.
        </Typography>

        <Typography sx={{ fontSize: { xs: "30px", sm: "40px", md: "50px" } }}>
          Made by ChatGPT!
        </Typography>
      </Box>
    </Box>
  );
}
