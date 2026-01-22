import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

// Import images
import flower from "../assets/flower-shop.png";
import jewellery from "../assets/jewel.png";
import ecommerce from "../assets/kongu-ecom.png";
import event from "../assets/event.png";
import portfolio from "../assets/portfolio.png";
import ai from "../assets/ai-chatbot.png";
import sarees from "../assets/EllSarees.png";
import stock from "../assets/stock.png";
import organic from "../assets/organic.png";
import feton from "../assets/feton.png";
import hindi from "../assets/hindi.png";
import laptop from "../assets/laptop.png";
import technical from "../assets/t360.png"; // Assuming t360 serves as a generic or specific image

// Placeholder for Zoho if not present, or reuse one

const projects = [
  {
    title: "Kongu-E-Com",
    image: ecommerce,
    tags: ["React.js", "CSS", "Node.js"],
    description: [
      "A comprehensive e-commerce platform designed for buying fresh produce.",
      "Features include dynamic product listings, advanced search filters, and a shopping cart.",
      "Optimized for mobile responses, ensuring a seamless shopping experience.",
      "Integrated with backend APIs for real-time stock and order management."
    ],
    github: "https://github.com/RithikaV31",
    demo: "https://kongu-e-com-sable.vercel.app",
  },
  {
    title: "Elampillai Sarees",
    image: sarees,
    tags: ["React", "Vercel", "E-commerce"],
    description: [
      "A niche e-commerce site dedicated to traditional Elampillai sarees.",
      "Showcases intricate fabric designs with high-quality image zooming.",
      "Implements a secure checkout flow and order tracking system.",
      "Designed with a cultural aesthetic to appeal to the target audience."
    ],
    github: "https://github.com/RithikaV31",
    demo: "https://elampillai-sarees-7q52.vercel.app/",
  },
  {
    title: "Stock Inventory",
    image: stock,
    tags: ["Inventory", "Management", "Dashboard"],
    description: [
      "A robust inventory management system for tracking stock levels in real-time.",
      "Features data visualization for sales trends and stock alerts.",
      "Includes user authentication and role-based access control for admins.",
      "Deployed on Vercel for high availability and easy updates."
    ],
    github: "https://github.com/RithikaV31",
    demo: "https://stock-inventory-lime.vercel.app/",
  },
  {
    title: "Organic Store",
    image: organic,
    tags: ["Organic", "Store", "Green"],
    description: [
      "An online marketplace provided for organic and eco-friendly products.",
      "Clean, green-themed UI emphasizing sustainability and health.",
      "Features categorised product browsing and detailed nutritional info.",
      "Fully responsive design compatible with all modern devices."
    ],
    github: "https://github.com/RithikaV31",
    demo: "https://organic-livid.vercel.app/",
  },
  {
    title: "Zoho Mail Clone",
    image: technical, // Using technical/t360 as placeholder/generic for this tech clone
    tags: ["Clone", "Zoho", "Functional"],
    description: [
      "A pixel-perfect functional clone of the Zoho Mail interface.",
      "Demonstrates complex UI layout capabilities and CSS mastery.",
      "Includes interactive elements like email composition and folder navigation.",
      "Optimized for performance with minimal dependencies."
    ],
    github: "https://github.com/RithikaV31",
    demo: "https://zoho-mail-clone.vercel.app/",
  },
  {
    title: "Feton",
    image: feton,
    tags: ["Web App", "Modern", "Creative"],
    description: [
      "A creative web application designed for digital engagement.",
      "Features smooth animations and a distinct, modern color palette.",
      "Built with a focus on user experience and intuitive navigation.",
      "Deployed live with continuous integration for updates."
    ],
    github: "https://github.com/RithikaV31",
    demo: "https://feton-lemon.vercel.app/",
  },
  {
    title: "Hindi Inst",
    image: hindi,
    tags: ["Education", "Language", "Learning"],
    description: [
      "An educational portal for a Hindi language institute.",
      "Provides course details, enrollment forms, and learning resources.",
      "Simple, accessible design catering to students of all ages.",
      "Live deployment ensures information is always up-to-date."
    ],
    github: "https://github.com/RithikaV31",
    demo: "https://hindi-inst.vercel.app/",
  },
  {
    title: "Laptop Sigma",
    image: laptop,
    tags: ["E-commerce", "Tech", "Electronics"],
    description: [
      "A tech-focused e-commerce store for laptops and accessories.",
      "Compare specifications and view high-res product galleries.",
      "Features filtering by brand, processor, and price range.",
      "Built for speed and SEO optimization."
    ],
    github: "https://github.com/RithikaV31",
    demo: "https://laptop-sigma-one.vercel.app/",
  },
  {
    title: "Jewellery Shop Management",
    image: jewellery,
    tags: ["React.js", "Bootstrap", "WebCam API"],
    description: [
      "Product showcase platform with multi-category layouts.",
      "Virtual try-on feature utilizing the Webcam API for user engagement.",
      "Custom form validations and smooth navigation transitions.",
      "Global state management ensures persistent cart data."
    ],
    github: "https://github.com/RithikaV31",
    demo: "#",
  },
  {
    title: "Kovai’s Shop",
    image: technical,
    tags: ["React Native", "Android", "IOS"],
    description: [
      "Cross-platform booking UI for salons, gyms, and spas.",
      "Real-time slot selection and appointment management.",
      "Admin dashboard for staff scheduling and service updates.",
      "Seamless API integration for authentication and data sync."
    ],
    github: "https://github.com/RithikaV31",
    demo: "#",
  },
  {
    title: "Flower Shop",
    image: flower,
    tags: ["React", "MUI", "E-commerce"],
    description: [
      "Vibrant online flower shop with category-based browsing.",
      "Secure ordering system with delivery date selection.",
      "Responsive, colorful UI that enhances the visual appeal of products.",
      "Customizable gift messages and add-ons supported."
    ],
    github: "https://github.com/RithikaV31",
    demo: "https://florio.vercel.app/",
  },
  {
    title: "Transport Management",
    image: event,
    tags: ["Management", "Dashboard", "Analytics"],
    description: [
      "End-to-end event organization platform for corporate and social events.",
      "Role-based access for admins, organizers, and participants.",
      "Real-time updates and scheduling tools included.",
      "Comprehensive dashboard for analytics and attendee tracking."
    ],
    github: "https://github.com/RithikaV31",
    demo: "https://transport-management-system-phi.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    tags: ["React", "Framer Motion", "Personal"],
    description: [
      "Personal portfolio showcasing skills, projects, and resume.",
      "Utilizes Framer Motion for engaging page transitions.",
      "Fully responsive with Dark Mode support.",
      "Deployed on GitHub Pages for global accessibility."
    ],
    github: "https://github.com/RithikaV31",
    demo: "#",
  },
  {
    title: "AI Chatbot",
    image: ai,
    tags: ["AI", "NLP", "Automation"],
    description: [
      "Intelligent chatbot for automating customer support queries.",
      "Uses NLP to understand and respond to user intent.",
      "Reduces support team workload by handling FAQs automatically.",
      "Clean chat interface with real-time response capability."
    ],
    github: "https://github.com/RithikaV31",
    demo: "#",
  },
];

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExploded, setIsExploded] = useState(false);

  // Magic Cube Animation Variants
  const cubeVariants = {
    rotate: {
      rotateX: [0, 360],
      rotateY: [0, 360],
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    },
    explode: {
      scale: 5, 
      opacity: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 6 },
        background: isDark
          ? "linear-gradient(180deg, #0F2027 0%, #203A43 100%)"
          : "linear-gradient(180deg, #FDFBFB 0%, #EBEDEE 100%)",
        color: isDark ? "#fff" : "#333",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 1, position: "relative", zIndex: 2 }}
      >
        My Projects
      </Typography>
      {!isExploded && (
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{ mb: 6, color: isDark ? "#aaa" : "#666", position: "relative", zIndex: 2 }}
        >
          Click the Magic Cube to Reveal
        </Typography>
      )}

      {/* 3D Magic Cube Container */}
      {!isExploded && (
        <Box
          component={motion.div}
          variants={cubeVariants}
          animate="rotate"
          onClick={() => setIsExploded(true)}
          sx={{
            width: 200,
            height: 200,
            position: "relative",
            transformStyle: "preserve-3d",
            cursor: "pointer",
            mt: 10
          }}
        >
          {/* Faces of the cube */}
          {["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33A1", "#33FFF5"].map((color, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: 200,
                height: 200,
                background: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.8)`,
                border: "2px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: "bold",
                transform: getFaceTransform(i),
                boxShadow: "0 0 20px rgba(0,0,0,0.5)"
              }}
            >
              PROJECTS
            </Box>
          ))}
        </Box>
      )}

      {/* Grid of Projects (Explosion Result) */}
      <AnimatePresence>
        {isExploded && (
          <Grid container spacing={4} sx={{ maxWidth: 1400, mx: "auto", mt: 4 }} component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 100 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    onClick={() => setSelectedProject(project)}
                    sx={{
                      height: "100%",
                      borderRadius: "20px",
                      background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(10px)",
                      boxShadow: isDark
                        ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
                        : "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                      border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0.5)",
                      cursor: "pointer",
                      "&:hover": {
                        boxShadow: "0 12px 40px 0 rgba(0, 178, 7, 0.2)",
                      },
                    }}
                  >
                    <Box sx={{ height: 180, overflow: "hidden", position: "relative" }}>
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s",
                          "&:hover": { transform: "scale(1.1)" }
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom color={isDark ? "text.primary" : "text.primary"}>
                        {project.title}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <Chip key={i} label={tag} size="small" sx={{ bgcolor: "#00B207", color: "#fff", fontSize: "0.7rem" }} />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </AnimatePresence>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={Boolean(selectedProject)}
            onClose={() => setSelectedProject(null)}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: "20px",
                background: isDark ? "#1A2A33" : "#fff",
                color: isDark ? "#fff" : "#333",
              },
            }}
          >
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h5" fontWeight="bold">{selectedProject.title}</Typography>
              <IconButton onClick={() => setSelectedProject(null)} color="inherit"><CloseIcon /></IconButton>
            </DialogTitle>
            <DialogContent>
              <CardMedia component="img" image={selectedProject.image} sx={{ height: 250, objectFit: "cover", borderRadius: "10px", mb: 2 }} />
              <Typography variant="body1" paragraph>
                {selectedProject.description.map((point, i) => (
                  <Box component="span" display="block" mb={1} key={i}>• {point}</Box>
                ))}
              </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button startIcon={<GitHubIcon />} href={selectedProject.github} target="_blank" variant="outlined" color="inherit">GitHub</Button>
              <Button endIcon={<LaunchIcon />} href={selectedProject.demo} target="_blank" variant="contained" sx={{ bgcolor: "#00B207" }}>Live Demo</Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>
    </Box>
  );
};

const getFaceTransform = (index) => {
  const size = 100; // Half of width (200/2)
  const transforms = [
    `translateZ(${size}px)`,
    `rotateY(90deg) translateZ(${size}px)`,
    `rotateY(180deg) translateZ(${size}px)`,
    `rotateY(-90deg) translateZ(${size}px)`,
    `rotateX(90deg) translateZ(${size}px)`,
    `rotateX(-90deg) translateZ(${size}px)`,
  ];
  return transforms[index];
};

export default Projects;
