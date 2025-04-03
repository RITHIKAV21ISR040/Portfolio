import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Box,
  Paper,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import ContactImage from "../assets/contact.png"; // Import the image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "1", // Replace with your EmailJS Service ID
        "1", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          budget: formData.budget,
          message: formData.message,
          to_email: "rithikav.21msc@kongu.edu", // Your email
        },
        "1" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            budget: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={ContactImage}
              alt="Contact Illustration"
              style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
          </Box>
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Let's <span style={{ color: "#00B207" }}>Talk</span> About
              Everything!
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Fill in the form below and I'll get back to you as soon as
              possible.
            </Typography>
          </Box>

          {/* Form Card */}
          <Paper
            elevation={4}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "12px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ bgcolor: "white" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ bgcolor: "white" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ bgcolor: "white" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ bgcolor: "white" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Write your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{ bgcolor: "white" }}
                  />
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Box textAlign="center" mt={3}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#00B207",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontSize: "16px",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#009e06" },
                  }}
                  type="submit"
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
