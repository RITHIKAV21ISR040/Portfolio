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
    icon: <Article fontSize="large" sx={{ color: "#007BFF" }} />,
    description: "Presented research papers in various conferences.",
    details: [
      "Paper on Artificial Intelligence in Kongu Engineering College",
      "IOT In Agriculture in Sri Ramakrishna Engineering College",
      "Smart Home in V.S.B Engineering College",
    ],
  },
  {
    title: "Sports",
    icon: <SportsSoccer fontSize="large" sx={{ color: "#28A745" }} />,
    description: "Actively participated in various sports competitions.",
    details: [
      "Winner of College Level in Badminton and Ball Batminton",
      "District-level Badminton and Volley Ball Player",
      "Gold Medalist in 5km walk, Badminton, Ball Batminton and Volley Ball",
    ],
  },
  {
    title: "Paintings",
    icon: <Brush fontSize="large" sx={{ color: "#FFC107" }} />,
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
        background: "linear-gradient(to right, #eef2f3, #8e9eab)",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Title Section */}
      <Typography variant="h4" fontWeight="bold" color="black">
        Works
      </Typography>
      <Typography variant="subtitle1" color="gray" mb={3}>
        What I have done
      </Typography>

      {/* Cards Container */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        {worksData.map((work, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              textAlign: "center",
              p: 2,
              boxShadow: 5,
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 8,
              },
            }}
          >
            <CardContent>
              {work.icon}
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                {work.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {work.description}
              </Typography>

              <Button
                size="small"
                sx={{
                  mt: 2,
                  backgroundColor: "#007BFF",
                  color: "white",
                  "&:hover": { backgroundColor: "#0056b3" },
                }}
                onClick={() => handleOpen(work)}
              >
                View More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Popup Modal */}
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
              bgcolor: "white",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              width: 400,
              maxWidth: "90vw",
              textAlign: "center",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
          >
            <Close
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                cursor: "pointer",
                color: "gray",
              }}
            />
            {selectedWork && (
              <>
                {selectedWork.icon}
                <Typography variant="h5" fontWeight="bold" mt={1}>
                  {selectedWork.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={1}>
                  {selectedWork.description}
                </Typography>
                <Box sx={{ textAlign: "left", mt: 2 }}>
                  {selectedWork.details.map((item, i) => (
                    <Typography key={i} variant="body2" sx={{ mb: 1 }}>
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
