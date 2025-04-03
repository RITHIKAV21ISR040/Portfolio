import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import flower from "../assets/flower-shop.png";
import jewellery from "../assets/jewel.png";
import ecommerce from "../assets/kongu-ecom.png";
import event from "../assets/event.png";
import portfolio from "../assets/portfolio.png";
import ai from "../assets/ai-chatbot.png";

const projects = [
  { title: "Flower Shop", image: flower, path: "/flower-shop" },
  { title: "Jewellery Store", image: jewellery, path: "/jewellery-store" },
  { title: "Kongu-E-com", image: ecommerce, path: "/kongu-ecom" },
  { title: "Event Management", image: event, path: "/event-management" },
  { title: "Portfolio Website", image: portfolio, path: "/portfolio" },
  { title: "AI Chatbot", image: ai, path: "/ai-chatbot" },
];

const Cube = () => {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isRotating, setIsRotating] = useState(true);
  const [isSpread, setIsSpread] = useState(false);

  // Responsive breakpoints
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px)");

  useEffect(() => {
    if (!isRotating || isSpread) return;
    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x + 1,
        y: prev.y + 1,
      }));
    }, 100);
    return () => clearInterval(interval);
  }, [isRotating, isSpread]);

  const handleFaceClick = (path) => {
    if (isSpread) {
      navigate(path);
    } else {
      setIsRotating(false);
      setIsSpread(true);
      setTimeout(() => {
        setIsSpread(false);
        setIsRotating(true);
      }, 4000);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        minHeight: isSpread ? "auto" : "100vh", // Adjust height dynamically
        backgroundColor: "#fce6f1",
        padding: isMobile ? "20px" : "40px",
        overflow: "hidden",
      }}
    >
      {/* Title with better spacing */}
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight="bold"
        textAlign="center"
        sx={{
          marginBottom: isMobile ? "30px" : "50px", // Increased space
          color: "#333",
        }}
      >
        Projects
      </Typography>

      {/* Cube Container */}
      <motion.div
        style={{
          width: isSpread
            ? isMobile
              ? "90vw"
              : isTablet
              ? "600px"
              : "700px"
            : "230px",
          height: isSpread
            ? isMobile
              ? "auto"
              : isTablet
              ? "600px"
              : "700px"
            : "230px",
          position: "relative",
          transformStyle: "preserve-3d",
          perspective: "1200px",
          display: isSpread ? "grid" : "flex",
          gridTemplateColumns: isSpread
            ? isMobile
              ? "repeat(2, 1fr)"
              : "repeat(3, 1fr)"
            : "none",
          gridTemplateRows: isSpread
            ? isMobile
              ? "repeat(3, 1fr)"
              : "repeat(2, 1fr)"
            : "none",
          gap: isSpread ? (isMobile ? "8px" : "20px") : "0",
          marginTop: isSpread ? "0px" : "110px", // Increased space between cube and title
        }}
        animate={{
          rotateX: isSpread ? 0 : rotation.x,
          rotateY: isSpread ? 0 : rotation.y,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => handleFaceClick(project.path)}
            style={{
              position: isSpread ? "relative" : "absolute",
              width: isSpread ? (isMobile ? "45vw" : "250px") : "250px",
              height: isSpread ? (isMobile ? "45vw" : "250px") : "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              borderRadius: "15px",
              cursor: "pointer",
              transform: isSpread ? "none" : getFaceTransform(index),
            }}
          >
            <Card
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "15px",
                bgcolor: "white",
              }}
            >
              <CardMedia
                component="img"
                height="70%"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: "cover", borderRadius: "10px 10px 0 0" }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  textAlign="center"
                  fontSize={isMobile ? "12px" : "16px"}
                >
                  {project.title}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

const getFaceTransform = (index) => {
  const size = 125;
  switch (index) {
    case 0:
      return `translateZ(${size}px)`;
    case 1:
      return `rotateY(90deg) translateZ(${size}px)`;
    case 2:
      return `rotateY(180deg) translateZ(${size}px)`;
    case 3:
      return `rotateY(-90deg) translateZ(${size}px)`;
    case 4:
      return `rotateX(90deg) translateZ(${size}px)`;
    case 5:
      return `rotateX(-90deg) translateZ(${size}px)`;
    default:
      return "none";
  }
};

export default Cube;