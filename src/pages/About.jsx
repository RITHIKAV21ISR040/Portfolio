import React from "react";
import { Container, Typography, Box, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import profilePic from "../assets/Rithika.png"; // Ensure the image path is correct

const About = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 6 },
        bgcolor: "#F8F9FA",
      }}
    >
      <Container maxWidth="lg">
        {/* Animated Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: "#00B207",
              textTransform: "uppercase",
              letterSpacing: 2,
              position: "relative",
              display: "inline-block",
            }}
          >
            About Me
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                height: "4px",
                background: "#00B207",
                position: "absolute",
                bottom: "-5px",
                left: 0,
              }}
            />
          </Typography>
        </motion.div>

        {/* Grid Layout */}
        <Grid container spacing={5} alignItems="center">
          {/* About Content Section */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  bgcolor: "#ffffff",
                  borderRadius: 3,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                  transition: "all 0.3s",
                  "&:hover": { boxShadow: "0px 12px 30px rgba(0,0,0,0.2)" },
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#333" }}
                >
                  Hello! I'm <span style={{ color: "#00B207" }}>Rithika V</span>
                </Typography>

                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ fontSize: "1.1rem", mb: 2, lineHeight: 1.8 }}
                >
                  I am a passionate <strong>Web Developer</strong> specializing
                  in <strong>ReactJS, UI/UX</strong>, and modern web
                  technologies. Currently pursuing my{" "}
                  <strong>M.Sc. Software Systems</strong> at{" "}
                  <strong>Kongu Engineering College</strong>, I am dedicated to
                  building{" "}
                  <strong>interactive & user-friendly applications</strong>.
                </Typography>

                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ fontSize: "1.1rem", mb: 2, lineHeight: 1.8 }}
                >
                  My expertise includes{" "}
                  <strong>JavaScript, ReactJS, Material-UI, MongoDB</strong>,
                  and <strong>responsive design</strong>. I enjoy tackling
                  coding challenges and exploring new trends in web development.
                </Typography>

                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ fontSize: "1.1rem", mb: 2, lineHeight: 1.8 }}
                >
                  Beyond coding, I have a keen interest in{" "}
                  <strong>art, badminton, and emerging technologies</strong>. My
                  goal is to develop digital experiences that are{" "}
                  <strong>
                    visually stunning, intuitive, and high-performing
                  </strong>
                  .
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Profile Image Section */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Avatar
                src={profilePic}
                alt="Rithika V"
                sx={{
                  width: { xs: 220, md: 300 },
                  height: { xs: 220, md: 300 },
                  boxShadow: "0 10px 30px rgba(0, 176, 7, 0.3)",
                  border: "6px solid #00B207",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
