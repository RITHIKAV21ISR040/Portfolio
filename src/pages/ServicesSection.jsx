import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaVideo } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

const services = [
  {
    icon: <FaCode />,
    color: "#4FC3F7", // Light blue
    title: "Web Development",
    description:
      "Designing and developing high-performance, scalable websites and applications tailored to meet your business objectives using the latest web technologies.",
  },
  {
    icon: <FaPaintBrush />,
    color: "#F06292", // Pink
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually engaging user interfaces focused on delivering seamless user experiences across all devices and platforms.",
  },
  {
    icon: <FaBrain />,
    color: "#BA68C8", // Purple
    title: "Prompt Engineering",
    description:
      "Optimizing human-AI interaction by designing precise, effective prompts that enhance the output quality of language models and automation systems.",
  },
  {
    icon: <MdDesignServices />,
    color: "#81C784", // Green
    title: "Graphic Design",
    description:
      "Creating impactful visual designs, including branding, marketing assets, and custom illustrations that effectively communicate your message.",
  },
  {
    icon: <FaVideo />,
    color: "#FFD54F", // Yellow
    title: "Video Editing",
    description:
      "Producing professional-quality video content with smooth transitions, motion graphics, and sound design tailored to your brand’s story.",
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: 12,
        background: "linear-gradient(135deg, #2B1055, #6A0572, #BA68C8)",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Light Blur Background */}
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
              mb: 4,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            What I Offer
          </Typography>
        </motion.div>

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
                    p: 4,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.4s ease-in-out",
                    cursor: "pointer",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.05)",
                      boxShadow: "0px 12px 25px rgba(255, 255, 255, 0.3)",
                      "& .description": {
                        maxHeight: "200px",
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "70px",
                      height: "70px",
                      margin: "0 auto",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                      "& svg": {
                        color: service.color,
                        fontSize: "35px",
                      },
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mb: 1, transition: "0.3s" }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description - hidden initially */}
                  <Box
                    className="description"
                    sx={{
                      maxHeight: 0,
                      opacity: 0,
                      overflow: "hidden",
                      transition: "all 0.4s ease-in-out",
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#ddd", mt: 1 }}>
                      {service.description}
                    </Typography>
                  </Box>
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
