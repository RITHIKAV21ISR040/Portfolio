import React, { useState } from "react";
import { Container, Grid, TextField, Button, Box, Typography, Stack, IconButton, useTheme, Paper } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import rithikaImage from "../assets/Rithika.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  const theme = useTheme();
  // Using specific colors from the reference image
  const bgCream = "#F9F5F0";
  const accentBlack = "#000000";
  const accentBrown = "#C4A484";

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Explicitly sending to rithivarathan123@gmail.com via template params
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "rithivarathan123@gmail.com",
    };

    // Replace with your actual EmailJS Service ID, Template ID, and Public Key from emailjs.com
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_PUBLIC_KEY")
      .then(() => {
        setStatus("success");
        alert("Message sent successfully to Rithika!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Email Error:", err);
        setStatus("error");
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <Box sx={{
      position: "relative",
      bgcolor: bgCream,
      minHeight: "100vh",
      pt: 7,
      pb: 2,
      overflow: "hidden"
    }}>

      {/* 1. Header */}
      <Container maxWidth="lg" sx={{ mb: 5, textAlign: "center" }}>
        <Typography variant="h2" sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: accentBlack,
          fontSize: { xs: "3rem", md: "4.5rem" }
        }}>
          Contact Me
        </Typography>
      </Container>


      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container>

          {/* Decorative Image/Box Block (Bottom Left in reference) */}
          <Grid item xs={12} md={5} sx={{ position: "relative", minHeight: { xs: "300px", md: "600px" }, mt: { xs: 0, md: 10 } }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "90%",
                bgcolor: accentBrown,
                zIndex: 0,
                // Using Rithika.png as the profile image
                backgroundImage: `url(${rithikaImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(20%) sepia(10%)"
              }}
            />
          </Grid>

          {/* Form Container (Overlapping) */}
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                bgcolor: "transparent",
                border: `2px solid ${accentBlack}`,
                p: { xs: 4, md: 8 },
                position: "relative",
                zIndex: 2,
                background: bgCream, // Solid bg to cover image if overlapping
                ml: { md: -5 }, // Negative margin for overlap effect
                mt: { xs: -5, md: 0 }
              }}
            >
              <Grid container spacing={6}>
                {/* Left Column: Form */}
                <Grid item xs={12} md={7}>
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1, color: "#000" }}>Full Name</Typography>
                        <TextField
                          fullWidth name="name" variant="standard" required
                          value={formData.name} onChange={handleChange}
                          InputProps={{ disableUnderline: false }}
                          sx={{ "& .MuiInput-underline:before": { borderBottom: "1px solid #000" }, "& .MuiInput-underline:after": { borderBottom: "2px solid #000" }, input: { color: "#000" } }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1, color: "#000" }}>E-mail</Typography>
                        <TextField
                          fullWidth name="email" type="email" variant="standard" required
                          value={formData.email} onChange={handleChange}
                          sx={{ "& .MuiInput-underline:before": { borderBottom: "1px solid #000" }, "& .MuiInput-underline:after": { borderBottom: "2px solid #000" }, input: { color: "#000" } }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1, color: "#000" }}>Message</Typography>
                        <TextField
                          fullWidth name="message" variant="standard" multiline rows={3} required
                          value={formData.message} onChange={handleChange}
                          sx={{ "& .MuiInput-underline:before": { borderBottom: "1px solid #000" }, "& .MuiInput-underline:after": { borderBottom: "2px solid #000" }, textarea: { color: "#000" } }}
                        />
                      </Box>

                      <Button
                        type="submit"
                        variant="contained"
                        disabled={status === "sending"}
                        sx={{
                          bgcolor: accentBlack,
                          color: "#fff",
                          borderRadius: "50px",
                          py: 1.5,
                          px: 5,
                          textTransform: "none",
                          fontSize: "1rem",
                          "&:hover": { bgcolor: "#333" }
                        }}
                      >
                        {status === "sending" ? "Sending..." : "Contact Us"}
                      </Button>
                    </Stack>
                  </form>
                </Grid>

                {/* Right Column: Info */}
                <Grid item xs={12} md={5}>
                  <Stack spacing={4} height="100%" justifyContent="flex-start" pt={2}>
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "#000" }}>Contact</Typography>
                      <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                        rithivarathan123@gmail.com
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        +91 80568 05791
                      </Typography>
                    </Box>

                    <Box>
                      <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "#000" }}>Based in</Typography>
                      <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                        Namakkal,<br />Tamil Nadu, India.
                      </Typography>
                    </Box>

                    <Box pt={4}>
                      <Stack direction="row" spacing={2}>
                        <IconButton href="https://github.com/RithikaV31" target="_blank" sx={{ color: "#000", p: 0 }}><GitHubIcon /></IconButton>
                        <IconButton href="https://www.linkedin.com/in/rithika-varatharasan-27557b259/" target="_blank" sx={{ color: "#000", p: 0 }}><LinkedInIcon /></IconButton>
                        <IconButton href="https://www.instagram.com/rithi_sam_/" target="_blank" sx={{ color: "#000", p: 0 }}><InstagramIcon /></IconButton>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
