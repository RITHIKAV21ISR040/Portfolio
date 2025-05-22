import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import profilePic from "../assets/image.png";
import About from "./About";
import ServicesSection from "./ServicesSection";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Works from "./Works";
import SendIcon from "@mui/icons-material/Send";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0F2027, #203A43, #2C5364)",
        color: "#FFF",
        overflowX: "hidden",
        position: "relative",
        pb: 10,
      }}
    >
      {/* Decorative Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(0, 178, 7, 0.2)",
          top: "-50px",
          left: "-50px",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 10, md: 15 }, zIndex: 1, position: "relative" }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Box
                sx={{
                  width: { xs: 230, md: 320 },
                  height: { xs: 230, md: 320 },
                  borderRadius: "50%",
                  border: "6px solid #00B207",
                  boxShadow: "0px 0px 30px rgba(0, 178, 7, 0.7)",
                  overflow: "hidden",
                  transition: "0.5s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 0px 40px rgba(0, 178, 7, 1)",
                  },
                }}
              >
                <img
                  src={profilePic}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  textAlign: "left",
                  color: "#00B207",
                  mb: 1,
                }}
              >
                Hi, I'm Rithika
              </Typography>

              <Typography
                variant="h4"
                fontWeight="500"
                sx={{
                  textAlign: "left",
                  color: "#FFF",
                  backgroundImage:
                    "linear-gradient(90deg, #00FFA3, #0075FF, #FFD700, #FF5733)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "moveGradient 5s linear infinite",
                }}
              >
                Frontend Developer | UI/UX Designer
              </Typography>

              <Typography
                variant="body1"
                color="grey.300"
                sx={{
                  mt: 3,
                  fontSize: "1.2rem",
                  textAlign: "left",
                  lineHeight: 1.8,
                }}
              >
                I build engaging, responsive, and accessible digital experiences
                using React, MUI, and design best practices.
              </Typography>

              <Box sx={{ mt: 4, textAlign: "left" }}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  sx={{
                    background: "linear-gradient(to right, #00B207, #007B55)",
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    borderRadius: "30px",
                    boxShadow: "0 0 10px rgba(0, 178, 7, 0.7)",
                    "&:hover": {
                      background: "linear-gradient(to right, #007B55, #00B207)",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll down indicator */}
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Typography sx={{ fontSize: "1.2rem", opacity: 0.6 }}>
              Scroll Down ↓
            </Typography>
          </motion.div>
        </Box>
      </Container>

      {/* Sections */}
      <Box sx={{ mt: 16 }}>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="works">
          <Works />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Box>

      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </Box>
  );
};

export default Home;
