import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import { SportsSoccer, Brush, Article, Close } from "@mui/icons-material";

const worksData = [
  {
    title: "Paper Presentation",
    icon: <Article fontSize="large" sx={{ color: "white" }} />,
    iconBg: "#007BFF",
    description: "Presented research papers in various conferences.",
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
    iconBg: "#28A745",
    description: "Actively participated in various sports competitions.",
    details: [
      "Winner of College Level in Badminton and Ball Batminton",
      "District-level Badminton and Volley Ball Player",
      "Gold Medalist in 5km walk, Badminton, Ball Batminton and Volley Ball",
    ],
  },
  {
    title: "Paintings",
    icon: <Brush fontSize="large" sx={{ color: "white" }} />,
    iconBg: "#FFC107",
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
        p: { xs: 3, md: 5 },
        backgroundColor: "#e0f7fa", // Light teal background
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="#004d61" mb={1}>
        My Works
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={3}>
        Explore my achievements
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: { xs: 3, sm: 4 },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {worksData.map((work, index) => (
          <Card
            key={index}
            sx={{
              textAlign: "center",
              boxShadow: 4,
              borderRadius: 3,
              p: 2,
              backgroundColor: "#ffffff",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                mx: "auto",
                mb: 1.5,
                borderRadius: "50%",
                backgroundColor: work.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {work.icon}
            </Box>

            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="#333">
                {work.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {work.description}
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleOpen(work)}
                sx={{
                  mt: 2,
                  backgroundColor: "#004d61",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  "&:hover": {
                    backgroundColor: "#003745",
                  },
                }}
              >
                View More
              </Button>
            </CardContent>
          </Card>
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
              bgcolor: "#f9f9f9",
              boxShadow: 24,
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              width: { xs: "85%", sm: 500 },
              maxWidth: "95vw",
              textAlign: "center",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <Close
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                cursor: "pointer",
                color: "#666",
                "&:hover": { color: "#000" },
              }}
            />
            {selectedWork && (
              <>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    mx: "auto",
                    mb: 1,
                    borderRadius: "50%",
                    backgroundColor: selectedWork.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedWork.icon}
                </Box>
                <Typography variant="h5" fontWeight="bold" color="#004d61">
                  {selectedWork.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  mt={1}
                  mb={2}
                >
                  {selectedWork.description}
                </Typography>
                <Box sx={{ textAlign: "left", px: 1 }}>
                  {selectedWork.details.map((item, i) => (
                    <Typography key={i} variant="body2" mb={1}>
                      • {item}
                    </Typography>
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
