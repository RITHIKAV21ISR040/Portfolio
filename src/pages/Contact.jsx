import React, { useState } from "react";
import { Container, Typography, TextField, Grid, Button, Box, Paper, useTheme, IconButton, Snackbar, Alert, Stack } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "1", // Replace with your Service ID
      "1", // Replace with your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: "rithikav.21msc@kongu.edu",
      },
      "1" // Replace with your Public Key
    )
      .then(() => {
        setOpen(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      }, (error) => {
        alert("Failed to send message.");
      });
  };

  const contactDetails = [
    { icon: <PhoneIcon />, text: "+91 80568 05791", href: "tel:+918056805791" },
    { icon: <EmailIcon />, text: "rithivarathan123@gmail.com", href: "mailto:rithivarathan123@gmail.com" },
    { icon: <LocationOnIcon />, text: "Namakkal, Tamil Nadu", href: "#" },
  ];

  return (
    <Box sx={{
      py: 10,
      bgcolor: isDark ? "#051020" : "#f5f7fa",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center"
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{
            bgcolor: isDark ? "#1e293b" : "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: isDark ? "0 20px 40px rgba(0,0,0,0.4)" : "0 20px 40px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" }
          }}>

            {/* Left Panel - Contact Info */}
            <Box sx={{
              width: { xs: "100%", md: "40%" },
              bgcolor: "#00B207",
              p: 6,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Decorative Circle */}
              <Box sx={{ position: "absolute", bottom: -50, right: -50, width: 150, height: 150, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.1)" }} />
              <Box sx={{ position: "absolute", top: 50, right: 30, width: 80, height: 80, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.1)" }} />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", mb: 6 }}>
                  Say something to start a live chat!
                </Typography>

                <Stack spacing={4}>
                  {contactDetails.map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" gap={2} component="a" href={item.href} sx={{ color: "inherit", textDecoration: "none" }}>
                      {item.icon}
                      <Typography variant="body1">{item.text}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ mt: 8, display: "flex", gap: 2, position: "relative", zIndex: 1 }}>
                <IconButton href="https://github.com/RithikaV31" target="_blank" sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                  <GitHubIcon />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/rithika-varatharasan-27557b259/" target="_blank" sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton href="https://www.instagram.com/rithi_sam_/" target="_blank" sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Right Panel - Form */}
            <Box sx={{ width: { xs: "100%", md: "60%" }, p: { xs: 4, md: 6 } }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth label="First Name" name="name" variant="standard" required
                      value={formData.name} onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      sx={{ input: { color: isDark ? "#fff" : "#333" }, label: { color: isDark ? "#aaa" : "#555" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth label="Subject" name="subject" variant="standard"
                      value={formData.subject} onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      sx={{ input: { color: isDark ? "#fff" : "#333" }, label: { color: isDark ? "#aaa" : "#555" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth label="Email" name="email" type="email" variant="standard" required
                      value={formData.email} onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      sx={{ input: { color: isDark ? "#fff" : "#333" }, label: { color: isDark ? "#aaa" : "#555" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth label="Phone" name="phone" variant="standard"
                      value={formData.phone} onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      sx={{ input: { color: isDark ? "#fff" : "#333" }, label: { color: isDark ? "#aaa" : "#555" } }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>Select Subject?</Typography>
                    <Stack direction="row" spacing={2} mt={1} flexWrap="wrap">
                      {["General Inquiry", "Project Proposal", "Feedback", "Other"].map((option) => (
                        <Box key={option}
                          sx={{
                            px: 2, py: 0.5,
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: "20px",
                            fontSize: "0.875rem",
                            cursor: "pointer",
                            color: isDark ? "#fff" : "#333",
                            "&:hover": { borderColor: "#00B207", color: "#00B207" }
                          }}
                        >
                          {option}
                        </Box>
                      ))}
                    </Stack>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth label="Message" name="message" variant="standard" multiline rows={2} placeholder="Write your message.." required
                      value={formData.message} onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      sx={{ textarea: { color: isDark ? "#fff" : "#333" }, label: { color: isDark ? "#aaa" : "#555" } }}
                    />
                  </Grid>

                  <Grid item xs={12} textAlign="right">
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 2,
                        px: 5, py: 1.5,
                        bgcolor: "#00B207",
                        borderRadius: "8px",
                        textTransform: "none",
                        fontSize: "1rem",
                        boxShadow: "0 10px 20px rgba(0, 178, 7, 0.2)",
                        "&:hover": { bgcolor: "#009106" }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>

          </Box>
        </motion.div>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
