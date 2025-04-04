import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

import flower from "../assets/flower-shop.png";
import jewellery from "../assets/jewel.png";
import ecommerce from "../assets/kongu-ecom.png";
import event from "../assets/event.png";
import portfolio from "../assets/portfolio.png";
import ai from "../assets/ai-chatbot.png";

const projects = [
  {
    title: "Flower Shop",
    image: flower,
    description: "An online flower shop with a variety of beautiful flowers.",
  },
  {
    title: "Jewellery Store",
    image: jewellery,
    description: "A luxurious jewelry store with elegant designs.",
  },
  {
    title: "Kongu-E-com",
    image: ecommerce,
    description: "An e-commerce platform for shopping various products.",
  },
  {
    title: "Event Management",
    image: event,
    description: "A professional event management system.",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description: "A personal portfolio showcasing my work.",
  },
  {
    title: "AI Chatbot",
    image: ai,
    description: "An AI chatbot for customer support automation.",
  },
];

const Cube = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isRotating, setIsRotating] = useState(true);
  const [isSpread, setIsSpread] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Responsive breakpoints
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px)");

  // Rotate cube when it's not spread
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

  // Click handler for a card
  const handleFaceClick = (project) => {
    if (isSpread) {
      setSelectedProject(project); // Open popup with project details
    } else {
      setIsRotating(false);
      setIsSpread(true);
    }
  };

  // Close the popup
  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        minHeight: isSpread ? "auto" : "100vh",
        backgroundColor: "#fce6f1",
        padding: isMobile ? "20px" : "40px",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight="bold"
        textAlign="center"
        sx={{ marginBottom: isMobile ? "30px" : "50px", color: "#333" }}
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
          marginTop: isSpread ? "0px" : "110px",
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
            onClick={() => handleFaceClick(project)}
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
            <Card sx={{ width: "100%", height: "100%", borderRadius: "15px" }}>
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

      {/* Popup Dialog */}
      <Dialog open={Boolean(selectedProject)} onClose={handleClose}>
        {selectedProject && (
          <>
            <DialogTitle sx={{ fontWeight: "bold" }}>
              {selectedProject.title}
            </DialogTitle>
            <DialogContent>
              <CardMedia
                component="img"
                height="200"
                image={selectedProject.image}
                alt={selectedProject.title}
                sx={{ borderRadius: "10px", objectFit: "cover" }}
              />
              <Typography
                sx={{
                  marginTop: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#444",
                }}
              >
                {selectedProject.description}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

// Cube face transformations
const getFaceTransform = (index) => {
  const size = 125;
  return [
    `translateZ(${size}px)`,
    `rotateY(90deg) translateZ(${size}px)`,
    `rotateY(180deg) translateZ(${size}px)`,
    `rotateY(-90deg) translateZ(${size}px)`,
    `rotateX(90deg) translateZ(${size}px)`,
    `rotateX(-90deg) translateZ(${size}px)`,
  ][index];
};

export default Cube;
