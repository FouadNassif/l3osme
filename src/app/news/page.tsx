import { Box, Typography } from "@mui/material";
import NewsComp from "@/components/News";
import NewsData from "@/app/data/News";

export default function News() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "whitesmoke", // Darker text for contrast
          textAlign: "center",
          marginBottom: "20px",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        NEWS
      </Typography>

      {/* News Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          width: "80%",
          height: "70vh",
          borderRadius: "20px",
          overflowY: "scroll",
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "transparent transparent", // For Firefox (track and thumb transparent)
          "&::-webkit-scrollbar": {
            width: "8px", // Adjust the width of the scrollbar if necessary
            backgroundColor: "transparent", // Make the scrollbar container transparent
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent", // Make the thumb transparent
            borderRadius: "10px", // Optional: for rounded thumb
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent", // Make the track transparent
          },
        }}
        className="news-container"
      >
        {NewsData.map((news, index) => (
          <NewsComp
            key={index}
            title={news.title}
            description={news.description}
          />
        ))}
      </Box>
    </Box>
  );
}
