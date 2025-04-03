import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import {LinkedIn,} from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        py: 6,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Section - Logo & Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">
              About Me<span style={{ color: "#00B207" }}></span>
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: "#bbb" }}>
              Passionate Web Developer | UI/UX Enthusiast. Building modern,
              responsive web applications that enhance user experiences.
            </Typography>
          </Grid>

          {/* Middle Section - Contact Details */}
          <Grid item xs={12} md={8} container spacing={4}>
            {/* Email Section */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" fontWeight="bold">
                Send Mail
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                <Link
                  href="mailto:info@portfolio.com"
                  color="inherit"
                  underline="none"
                >
                  rithivarathan123@gmail.com
                </Link>
              </Typography>
            </Grid>

            {/* Phone Section */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" fontWeight="bold">
                Make Call
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                +91 80568 05791
              </Typography>
            </Grid>

            {/* Address Section */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" fontWeight="bold">
                Get In Touch
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                16/10, East Street
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Paramathi Velur, Namakkal,
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Tamil Nadu, India.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Footer Bottom - Social Icons & Copyright */}
        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#bbb" }}>
            All Rights Reserved
          </Typography>
          {/* Social Media Icons */}
          <Box>
            <IconButton
              href="mailto:rithivarathan123@gmail.com"
              sx={{ color: "#bbb" }}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/rithika-varatharasan-27557b259/"
              target="_blank"
              sx={{ color: "#bbb" }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com/RITHIKAV21ISR040"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#bbb" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/rithi_sam/"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice
              sx={{ color: "#bbb" }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
        {/* Scroll to Top Button */}
        <IconButton
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#7E57C2",
            color: "#fff",
            "&:hover": { backgroundColor: "#5E35B1" },
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Footer;
