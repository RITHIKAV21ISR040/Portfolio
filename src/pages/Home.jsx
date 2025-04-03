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
import SendIcon from "@mui/icons-material/Send"; // Import Send Icon


const Home = () => {
return (
  <Box
    sx={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top left, #1A1A2E, #0F3460)",
      color: "#FFF",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      pt: { xs: "80px", md: "100px" },
      pb: { xs: "100px", md: "120px" },
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        {/* Profile Image */}
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
                width: { xs: "250px", md: "320px" },
                height: { xs: "250px", md: "320px" },
                borderRadius: "50%",
                border: "8px solid #00B207",
                boxShadow: "0px 0px 20px rgba(0, 178, 7, 0.9)",
                overflow: "hidden",
                transition: "0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 30px rgba(0, 178, 7, 1)",
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

        {/* Hero Text Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                textAlign: "left",
                lineHeight: 1.3,
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
              }}
            >
              Hi, I'm <span style={{ color: "#00B207" }}>Rithika</span>
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                textAlign: "left",
                fontSize: "2rem",
                position: "relative",
                display: "inline-block",
                color: "transparent",
                WebkitTextStroke: "1px #FFF",
                backgroundImage:
                  "linear-gradient(90deg, #00FFA3, #0075FF, #FFD700, #FF5733)",
                backgroundSize: "400% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                animation:
                  "moveGradient 4s linear infinite, typingEffect 4s steps(30) infinite alternate",
                whiteSpace: "nowrap",
                overflow: "hidden",
                borderRight: "3px solid #FFF",
              }}
            >
              Frontend Developer | UI/UX Designer
            </Typography>

            <style>
              {`
                @keyframes typingEffect {
                  0% { width: 0; }
                  100% { width: 100%; }
                }

                @keyframes moveGradient {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}
            </style>

            <Typography
              variant="body1"
              color="grey.300"
              sx={{
                mt: 5,
                fontSize: "1.5rem",
                textAlign: "left",
                lineHeight: 1.8,
              }}
            >
              Crafting beautiful and functional web applications with ReactJS,
              Material-UI, and modern UI/UX design principles.
            </Typography>

            {/* Buttons */}
            <Box sx={{ mt: 4, textAlign: "left" }}>
              <Button
                variant="contained"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                endIcon={<SendIcon />} // Add Send Icon
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(106, 147, 190, 0.8), rgb(193, 209, 228))", // Blue gradient
                  px: 3, // Reduced padding
                  py: 1.2,
                  fontWeight: "bold",
                  fontSize: "1rem", // Reduced font size
                  borderRadius: "25px",
                  transition: "all 0.3s",
                  backdropFilter: "blur(5px)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, rgba(0, 123, 255, 1), rgba(0, 123, 255, 0.8))",
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
    </Container>

    {/* Sections */}
    <Box sx={{ width: "100%", mt: 12 }}>
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
  </Box>
);
};

export default Home;
