import React from "react";
import { Container, Typography, Box, Grid, useTheme, Paper, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import profilePic from "../assets/Rithika.png";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import SpeedIcon from "@mui/icons-material/Speed";

// Skill Data with Icons
const skillsData = [
  {
    category: "Frontend Development",
    icon: <CodeIcon fontSize="large" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Recat Native", "Bootstrap", "Tailwind CSS"],
    level: 90
  },
  {
    category: "Backend & Database",
    icon: <StorageIcon fontSize="large" />,
    skills: ["Node.js (Basics)", "MongoDB (Basics)", "SQL"],
    level: 65
  },
  {
    category: "Programming Languages",
    icon: <TerminalIcon fontSize="large" />,
    skills: ["C", "C++", "Java", "JavaScript", "Python"],
    level: 85
  },
  {
    category: "Tools & Platforms",
    icon: <SpeedIcon fontSize="large" />,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Chrome DevTools", "Wordpress"],
    level: 80
  },
  {
    category: "Soft Skills",
    icon: <GroupIcon fontSize="large" />,
    skills: ["Team Leadership", "Training", "Project Management", "Communication"],
    level: 95
  }
];

// Stats Data
const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Students Trained", value: "50+" },
];

const AboutClean = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Animation Variants
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  // };

  return (
    <Box sx={{
      bgcolor: isDark ? "#0a1929" : "#f0fdf4",
      color: isDark ? "#fff" : "#1a202c",
      minHeight: "100vh",
      py: 10,
      position: "relative",
      overflow: "hidden"
    }}>

      {/* Abstract Background Shapes */}
      <Box sx={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,178,7,0.15) 0%, rgba(0,0,0,0) 70%)", zIndex: 0 }} />
      <Box sx={{ position: "absolute", bottom: -100, left: -100, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,178,7,0.1) 0%, rgba(0,0,0,0) 70%)", zIndex: 0 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>

        {/* Header Section */}
        <Box mb={10} textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              fontWeight="900"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 4,
                background: "linear-gradient(45deg, #00B207 30%, #66ff75 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4rem" }
              }}
            >
              Who I Am
            </Typography>
            <Typography variant="subtitle1" sx={{ color: isDark ? "#ccc" : "#555", maxWidth: 600, mx: "auto" }}>
              Passionate Developer | Educator | Problem Solver
            </Typography>
          </motion.div>
        </Box>

        {/* Hero Split Section */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          {/* Left: Image with Frame */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: "relative", display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 280, md: 380 },
                  height: { xs: 350, md: 450 },
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0, 178, 7, 0.3)",
                  border: "2px solid rgba(0,178,7,0.5)"
                }}
              >
                <img
                  src={profilePic}
                  alt="Rithika"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.02)" }}
                />

                {/* Floating Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    bgcolor: isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(5px)",
                    p: 2,
                    borderRadius: "12px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    borderLeft: "4px solid #00B207"
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">Open to Work</Typography>
                  <Typography variant="caption" color="textSecondary">Available for new projects</Typography>
                </Box>
              </Box>

              {/* Decorative Dot/Grid (Optional CSS effect could go here) */}
            </motion.div>
          </Grid>

          {/* Right: Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h5" fontWeight="bold" sx={{ color: "#00B207", mb: 2, textTransform: "uppercase", letterSpacing: 2 }}>
                Professional Summary
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: isDark ? "#E0E0E0" : "#444" }}>
                I am a dedicated <strong>Front-End Developer</strong> with over a year of experience crafting responsive, user-centric web applications. My expertise spans <strong>React.js, Next.js, and Modern UI design</strong>.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: isDark ? "#E0E0E0" : "#444" }}>
                Beyond coding, I am a passionate <strong>Software Trainer</strong>, helping students master core programming concepts in C, C++, Java, and Data Structures. I blend technical precision with a collaborative spirit to deliver scalable solutions and empower future developers.
              </Typography>

              {/* Stats Bar */}
              <Box sx={{ mt: 5, display: "flex", gap: 4, flexWrap: "wrap" }}>
                {stats.map((stat, i) => (
                  <Box key={i}>
                    <Typography variant="h3" fontWeight="900" color="#00B207">
                      {stat.value}
                    </Typography>
                    <Typography variant="subtitle2" fontWeight="600" color={isDark ? "#AAA" : "#666"}>
                      {stat.label.toUpperCase()}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Education Section - Redesigned as a Wide Card */}
        <Box mb={15}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                background: isDark ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" : "linear-gradient(135deg, #FFF 0%, #f0fdf4 100%)",
                p: { xs: 3, md: 6 },
                borderRadius: "24px",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(0,178,7,0.2)"
              }}
            >
              <Grid container alignItems="center" spacing={4}>
                <Grid item>
                  <Box sx={{
                    width: 80, height: 80,
                    bgcolor: isDark ? "rgba(0,178,7,0.2)" : "rgba(0,178,7,0.1)",
                    borderRadius: "20px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#00B207"
                  }}>
                    <SchoolIcon sx={{ fontSize: 40 }} />
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="overline" color={isDark ? "rgba(255,255,255,0.6)" : "textSecondary"} sx={{ letterSpacing: 2 }}>
                    Education
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
                    MSc Software Systems
                  </Typography>
                  <Typography variant="h6" color="#00B207">
                    Kongu Engineering College, Perundurai
                  </Typography>
                </Grid>
                <Grid item>
                  <Box sx={{
                    border: "1px solid #00B207",
                    color: isDark ? "#fff" : "#00B207",
                    py: 1, px: 3,
                    borderRadius: "50px",
                    fontWeight: "bold",
                    bgcolor: isDark ? "rgba(0,178,7,0.1)" : "transparent"
                  }}>
                    Nov 2021 – Present
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Box>

        {/* Skills Section - Grid Cards */}
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              My Technical Arsenal
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: "#00B207", mx: "auto", borderRadius: 2 }} />
          </motion.div>

          <Grid container spacing={4}>
            {skillsData.map((category, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: "20px",
                      bgcolor: isDark ? "rgba(255,255,255,0.03)" : "#fff",
                      border: "1px solid",
                      borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#00B207",
                        boxShadow: "0 10px 40px rgba(0,178,7,0.1)"
                      }
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={3}>
                      <Box sx={{ color: "#00B207", mr: 2 }}>{category.icon}</Box>
                      <Typography variant="h6" fontWeight="bold">{category.category}</Typography>
                    </Box>

                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {category.skills.map((skill, i) => (
                        <Box
                          key={i}
                          component="span"
                          sx={{
                            py: 0.5, px: 2,
                            borderRadius: "8px",
                            fontSize: "0.85rem",
                            fontWeight: "500",
                            bgcolor: isDark ? "rgba(255,255,255,0.08)" : "#f3f4f6",
                            color: isDark ? "#ddd" : "#4b5563",
                            transition: "0.2s",
                            "&:hover": {
                              bgcolor: "#00B207",
                              color: "#fff"
                            }
                          }}
                        >
                          {skill}
                        </Box>
                      ))}
                    </Box>

                    {/* Optional Progress Bar Visualization */}
                    <Box mt={4}>
                      <Box display="flex" justifyContent="space-between" mb={1}>
                        <Typography variant="caption" color="textSecondary">Proficiency</Typography>
                        <Typography variant="caption" color="#00B207" fontWeight="bold">{category.level}%</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={category.level}
                        sx={{
                          height: 6,
                          borderRadius: 5,
                          bgcolor: isDark ? "rgba(255,255,255,0.1)" : "#eee",
                          "& .MuiLinearProgress-bar": { bgcolor: "#00B207" }
                        }}
                      />
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default AboutClean;
