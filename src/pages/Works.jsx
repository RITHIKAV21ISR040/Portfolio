import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  useTheme,
} from "@mui/material";
import { SportsSoccer, Brush, Article, Close } from "@mui/icons-material";
import { motion } from "framer-motion";

const worksData = [
  {
    title: "Paper Presentation",
    icon: <Article fontSize="large" sx={{ color: "white" }} />,
    iconBg: "linear-gradient(135deg, #007BFF, #0056b3)",
    description: "Presented research papers in various conferences with distinction.",
    details: [
      "Paper on Artificial Intelligence in Kongu Engineering College",
      "Paper on 5G Technology in K.G.College of Arts And Science",
      "Paper on Block Chain in JCT College Of Engineering And Technology",
      "IOT In Agriculture in Sri Ramakrishna Engineering College",
      "Smart Home in V.S.B Engineering College",
    ],
  },
  {
    title: "Sports",
    icon: <SportsSoccer fontSize="large" sx={{ color: "white" }} />,
    iconBg: "linear-gradient(135deg, #28A745, #1e7e34)",
    description: "Actively participated and won titles in various sports competitions.",
    details: [
      "Winner of College Level in Badminton and Ball Batminton",
      "District-level Badminton and Volley Ball Player",
      "Gold Medalist in 5km walk, Badminton, Ball Batminton and Volley Ball",
    ],
  },
  {
    title: "Paintings",
    icon: <Brush fontSize="large" sx={{ color: "white" }} />,
    iconBg: "linear-gradient(135deg, #FFC107, #e0a800)",
    description: "Created numerous artworks and participated in exhibitions.",
    details: [
      "First Prize in State-Level Painting Competition",
      "First Prize in Wall Painting",
      "Second Prize in District Level Drawing Competition",
      "First Prize in District Level Craft Competition",
    ],
  },
];

const Works = () => {
  const [open, setOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleOpen = (work) => {
    setSelectedWork(work);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedWork(null);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 12,
        px: { xs: 2, md: 5 },
        background: isDark
          ? "linear-gradient(160deg, #1A2A33, #2C5364)"
          : "#e0f7fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" fontWeight="bold" color={isDark ? "#ffffff" : "#004d61"} mb={1}>
        My Works
      </Typography>
      <Typography variant="subtitle1" color={isDark ? "#bbb" : "text.secondary"} mb={6}>
        A glimpse into my extracurricular achievements
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 4,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {worksData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card
              sx={{
                textAlign: "center",
                borderRadius: "20px",
                p: 3,
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
                backdropFilter: "blur(10px)",
                color: isDark ? "#fff" : "#333",
                boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: isDark ? "0 12px 30px rgba(0, 178, 7, 0.3)" : "0 12px 30px rgba(0, 178, 7, 0.2)",
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 3,
                    borderRadius: "50%",
                    background: work.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  {work.icon}
                </Box>

                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {work.title}
                </Typography>
                <Typography variant="body2" color={isDark ? "#ccc" : "text.secondary"} mb={3}>
                  {work.description}
                </Typography>
              </CardContent>
              <Button
                variant="outlined"
                onClick={() => handleOpen(work)}
                sx={{
                  mx: "auto",
                  borderRadius: "20px",
                  px: 4,
                  borderColor: isDark ? "#fff" : "#004d61",
                  color: isDark ? "#fff" : "#004d61",
                  "&:hover": {
                    backgroundColor: "#00B207",
                    borderColor: "#00B207",
                    color: "#fff",
                  },
                }}
              >
                View More
              </Button>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: isDark ? "#1a2a33" : "#f9f9f9",
              color: isDark ? "#fff" : "#333",
              boxShadow: 24,
              p: { xs: 3, sm: 4 },
              borderRadius: "20px",
              width: { xs: "90%", sm: 500 },
              maxWidth: "95vw",
              textAlign: "center",
              border: isDark ? "1px solid #333" : "none",
              outline: "none"
            }}
          >
            <Close
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 15,
                right: 15,
                cursor: "pointer",
                color: isDark ? "#aaa" : "#666",
                "&:hover": { color: isDark ? "#fff" : "#000" },
              }}
            />
            {selectedWork && (
              <>
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    background: selectedWork.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                  }}
                >
                  {selectedWork.icon}
                </Box>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: "#00B207" }}>
                  {selectedWork.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: isDark ? "#ddd" : "#555", mb: 3 }}
                >
                  {selectedWork.description}
                </Typography>

                <Box sx={{ textAlign: "left", maxHeight: "200px", overflowY: "auto", pr: 1 }}>
                  {selectedWork.details.map((item, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "start", mb: 1.5 }}>
                      <Box sx={{ minWidth: "6px", height: "6px", borderRadius: "50%", bgcolor: "#00B207", mt: 1, mr: 1.5 }} />
                      <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Works;
