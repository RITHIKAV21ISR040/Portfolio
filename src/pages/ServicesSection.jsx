import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Building high-performance, visually stunning websites that captivate and convert. From sleek landing pages to full-scale web applications, I bring ideas with cutting-edge technology and user experiences.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description:
      "Creating intuitive, pixel-perfect designs that enhance user engagement and functionality. I blend aesthetics with usability to craft seamless, responsive experiences that leave a lasting impression across all devices.",
  },
  {
    icon: <FaBrain />,
    title: "Prompt Engineering",
    description:
      "Optimizing AI interactions with precision-crafted prompts. I enhance chatbot conversations, automate workflows, and fine-tune AI responses for smarter, more engaging, and efficient user experiences.",
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: 12,
        background: "linear-gradient(135deg, #2B1055, #6A0572, #BA68C8)", // Smooth gradient
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Radial Light Effect */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="lg">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: "#FF4081",
              color: "#fff",
              px: 3,
              py: 1,
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            My Services
          </Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mt: 2,
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            What I Offer
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    p: 4,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent white for depth
                    backdropFilter: "blur(10px)", // Glass effect
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.4s ease-in-out",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.05)",
                      boxShadow: "0px 12px 25px rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      mb: 2,
                      "& svg": {
                        color: "#FF4081",
                        fontSize: "45px",
                        transition: "0.3s",
                      },
                      "&:hover svg": {
                        color: "#FFC107",
                      },
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      mb: 1,
                      transition: "0.3s",
                      "&:hover": { color: "#FFC107" },
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: "#ddd",
                      transition: "0.3s",
                      "&:hover": { color: "#fff" },
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
