import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  useTheme,
  useMediaQuery,
  Switch,
} from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import profilePic from "../assets/Rithika.png";

const About = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggleDarkMode = () => setDarkMode(!darkMode);

  const bgColor = darkMode ? "#121212" : "#F3FAF7";
  const textColor = darkMode ? "#FFFFFF" : "#1B1B1B";
  const cardBg = darkMode ? "#1E1E1E" : "#FFFFFF";

  return (
    <Box sx={{ bgcolor: bgColor, py: 8, px: { xs: 3, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Header and Theme Toggle */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color={textColor}
            sx={{ textTransform: "uppercase", letterSpacing: 2 }}
          >
            About Me
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography sx={{ mr: 1 }} color={textColor}>
              Dark Mode
            </Typography>
            <Switch checked={darkMode} onChange={handleToggleDarkMode} />
          </Box>
        </Box>

        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  bgcolor: cardBg,
                  color: textColor,
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Hello! I’m <span style={{ color: "#00B207" }}>Rithika V</span>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.1rem", mb: 2, lineHeight: 1.8 }}
                >
                  I am a passionate <strong>Frontend Developer</strong>{" "}
                  specializing in <strong>ReactJS</strong> and modern UI/UX
                  techniques. I'm currently pursuing my{" "}
                  <strong>M.Sc. Software Systems</strong> at{" "}
                  <strong>Kongu Engineering College</strong>.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.1rem", mb: 2, lineHeight: 1.8 }}
                >
                  I work with technologies like{" "}
                  <strong>
                    JavaScript, ReactJS, Material-UI, MongoDB, and Figma
                  </strong>
                  , and I’m passionate about creating seamless, responsive, and
                  interactive user experiences.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  Outside tech, I enjoy <strong>art, badminton</strong>, and
                  exploring <strong>emerging technologies</strong>. My mission
                  is to craft visually appealing and intuitive digital
                  experiences.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Avatar
                src={profilePic}
                alt="Rithika V"
                sx={{
                  width: isMobile ? 220 : 300,
                  height: isMobile ? 220 : 300,
                  boxShadow: "0 10px 30px rgba(0, 176, 7, 0.3)",
                  border: "6px solid #00B207",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        {/* Counters Section */}
        <Box
          mt={8}
          display="flex"
          justifyContent="space-evenly"
          flexWrap="wrap"
          sx={{
            background: darkMode ? "#1E1E1E" : "#E6F4EC",
            py: 5,
            borderRadius: 4,
            boxShadow: 2,
          }}
        >
          {[
            { label: "Projects Completed", value: 7 },
            { label: "Tech Stack Mastered", value: 1 },
            { label: "Years of Experience", value: 2 },
          ].map((counter, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                m: 2,
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                color="#00B207"
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <CountUp end={counter.value} duration={2} />
                {counter.label === "Years of Experience" ? "+" : ""}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: textColor, mt: 1, fontWeight: 500 }}
              >
                {counter.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
