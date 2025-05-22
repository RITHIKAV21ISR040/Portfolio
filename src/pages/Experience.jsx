import React, { useState, useRef, useEffect } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

import growAi from "../assets/growai.png";
import cubeAi from "../assets/cubeai.png";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Grow AI Technology",
    certificate: growAi,
  },
  {
    title: "Web Developer Intern",
    company: "Cube AI Solutions",
    certificate: cubeAi,
  },
];

const Experience = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const cardRefs = useRef([]); // Reference for each card

  // Handles click inside a card
  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  // Handles click outside the cards
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        flippedIndex !== null &&
        cardRefs.current[flippedIndex] &&
        !cardRefs.current[flippedIndex].contains(event.target)
      ) {
        setFlippedIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [flippedIndex]);

  return (
    <Box sx={{ py: 8, backgroundColor: "#FCEDFC", textAlign: "center" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 3, color: "#2C3E50" }}
        >
          Experience
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {experiences.map((exp, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                ref={(el) => (cardRefs.current[index] = el)}
                sx={{
                  p: 4,
                  borderRadius: "12px",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  minHeight: "220px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  color: flippedIndex === index ? "#000" : "#fff",
                  background:
                    flippedIndex === index
                      ? "rgba(255, 255, 255, 0.9)" // Light background when image is displayed
                      : "linear-gradient(135deg, #7D3C98, #E59866)", // Original gradient
                  "&:hover": {
                    boxShadow: "0px 12px 25px rgba(125, 60, 152, 0.3)",
                    transform: "scale(1.05)",
                  },
                }}
                onClick={() => handleCardClick(index)}
              >
                {flippedIndex === index ? (
                  <Box
                    component="img"
                    src={exp.certificate}
                    alt="Certificate"
                    sx={{
                      width: "100%",
                      maxWidth: "380px",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                ) : (
                  <Box textAlign="center">
                    <WorkIcon sx={{ fontSize: 50, mb: 1, color: "#FFF" }} />
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body1">{exp.company}</Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
