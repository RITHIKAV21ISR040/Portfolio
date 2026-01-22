import React from "react";
import { Container, Typography, Box, useTheme, Avatar, Button } from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DownloadIcon from "@mui/icons-material/Download"; // Import Download Icon

import growAi from "../assets/growai.png";
import cubeAi from "../assets/cubeai.png";
import FullOffer from "../assets/T360.pdf";

const experiences = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "Thiran360 AI, Gobichettipalayam",
    period: "Jun 2025 – Present",
    description: [
      "Working in a dual role across front-end development and technical training.",
      "Building responsive, user-focused UIs using React.js and Next.js.",
      "Training students in Core CS & Web Development through practical hands-on sessions.",
      "Leading intern teams and ensuring smooth project delivery."
    ],
    color: "#00B207",
    type: "work",
    certificate: FullOffer // Assuming this correlates to the current role offer
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Grow AI Technology",
    period: "Completed",
    description: [
      "Developed interactive user interfaces using React.js.",
      "Collaborated with the backend team to integrate APIs.",
      "Optimized application performance and responsiveness."
    ],
    icon: <WorkIcon />,
    color: "#FF9800",
    type: "work",
    certificate: growAi // Assuming this is the completion certificate
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "Cube AI Solutions",
    period: "Completed",
    description: [
      "Assisted in developing web applications using HTML, CSS, and JavaScript.",
      "Participated in code reviews and debugging sessions.",
      "Gained hands-on experience in modern web development workflows."
    ],
    icon: <WorkIcon />,
    color: "#9C27B0",
    type: "work",
    certificate: cubeAi // Using image as placeholder if no PDF available
  },
  {
    id: 4,
    title: "MSc Software Systems",
    company: "Kongu Engineering College",
    period: "Nov 2021 – Present",
    description: [
      "Pursuing Master's degree in Software Systems.",
      "Focusing on Full Stack Development, Data Structures, and Algorithms.",
      "Active participant in coding hackathons and technical symposiums."
    ],
    icon: <SchoolIcon />,
    color: "#2196F3",
    type: "education",
    certificate: cubeAi
  },
];

const Experience = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        py: 10,
        background: isDark ? "#0F2027" : "#F8F9FA",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 8, color: isDark ? "#fff" : "#1B1B1B", textTransform: "uppercase", letterSpacing: 2 }}
          >
            My Journey
          </Typography>
        </motion.div>

        <Box sx={{ position: "relative", pl: { xs: 2, md: 0 } }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 29, md: 39 },
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
            }}
          />

          {experiences.map((exp, index) => (
            <Box key={index} sx={{ mb: 6, display: "flex", position: "relative" }}>
              {/* Icon Wrapper */}
              <Box sx={{ minWidth: 80, display: "flex", justifyContent: "center" }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      bgcolor: isDark ? "#1f2937" : "#fff",
                      border: `4px solid ${exp.color}`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: exp.color,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                      zIndex: 2,
                      position: "relative" // Ensure it sits on top of line
                    }}
                  >
                    {exp.icon}
                  </Box>
                </motion.div>
              </Box>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ width: "100%" }}
              >
                <Box
                  sx={{
                    ml: 3,
                    p: 4,
                    borderRadius: 4,
                    bgcolor: isDark ? "rgba(255,255,255,0.03)" : "#fff",
                    border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.05)",
                    boxShadow: isDark ? "none" : "0 4px 20px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.4)" : "0 10px 30px rgba(0,0,0,0.1)",
                      border: `1px solid ${exp.color}`
                    }
                  }}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap={2}>
                    <Box>
                      <Typography variant="h5" fontWeight="bold" color={isDark ? "#fff" : "#1B1B1B"}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" fontWeight="600" sx={{ color: exp.color, mb: 1 }}>
                        {exp.company}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" bgcolor={isDark ? "rgba(255,255,255,0.1)" : "#f0f0f0"} px={2} py={0.5} borderRadius={2}>
                      <CalendarTodayIcon sx={{ fontSize: 14, mr: 1, color: isDark ? "#ccc" : "#666" }} />
                      <Typography variant="caption" fontWeight="bold" color={isDark ? "#ccc" : "#666"}>
                        {exp.period}
                      </Typography>
                    </Box>
                  </Box>

                  <Box mt={2}>
                    {exp.description.map((item, i) => (
                      <Typography key={i} variant="body2" sx={{ color: isDark ? "#bbb" : "#555", mb: 0.5, display: "flex", alignItems: "flex-start" }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: exp.color, borderRadius: "50%", mr: 1.5, mt: 0.8, flexShrink: 0 }} />
                        {item}
                      </Typography>
                    ))}
                  </Box>

                  {/* Certificate Button */}
                  {exp.certificate && (
                    <Box mt={3}>
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: exp.color,
                          color: exp.color,
                          "&:hover": {
                            bgcolor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                            borderColor: exp.color
                          }
                        }}
                      >
                        View Certificate
                      </Button>
                    </Box>
                  )}
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
