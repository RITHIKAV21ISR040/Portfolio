import React from "react";
import { Box, Container, Typography, Link, Stack, IconButton, Grid, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const colors = {
    bg: "#0B3B3C", 
    bgGradient: "linear-gradient(180deg, #0B3B3C 0%, #082d2e 100%)",
    text: "#FFFFFF",
    accent: "#E3A651", 
    subText: "rgba(255, 255, 255, 0.7)",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box component="footer" sx={{ width: "100%", mt: 0, pt: 0 }}>
      {/* Main Footer Body */}
      <Box 
        sx={{ 
          background: colors.bgGradient, 
          color: colors.text, 
          pt: 8, // Increased top padding for better breathing room
          pb: 6, 
          borderTop: `1px solid rgba(227, 166, 81, 0.2)` // Subtle separator
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} justifyContent="space-between">

            {/* Column 1: Brand & Desc */}
            <Grid item xs={12} md={5}>
              <Stack spacing={3}>
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Box sx={{ 
                    width: 0, height: 0, 
                    borderLeft: "12px solid transparent", 
                    borderRight: "12px solid transparent", 
                    borderBottom: `22px solid ${colors.accent}`,
                    filter: "drop-shadow(0px 0px 8px rgba(227, 166, 81, 0.4))"
                  }} />
                  <Typography variant="h5" fontWeight="800" sx={{ letterSpacing: 3, fontFamily: 'serif' }}>
                    RITHIKA
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ color: colors.subText, lineHeight: 1.8, maxWidth: "400px" }}>
                  Empowering businesses with advanced web solutions to improve digital presence and user outcomes.
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' }} />
                    <Typography variant="body2" sx={{ color: colors.accent, fontWeight: "600", letterSpacing: 1 }}>
                        AVAILABLE FOR FREELANCING
                    </Typography>
                </Box>
              </Stack>
            </Grid>

            {/* Column 2: Quick Links */}
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 3, color: colors.accent, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: 1 }}>
                Navigation
              </Typography>
              <Stack spacing={1.5}>
                {["About", "Services", "Experience", "Projects", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    underline="none"
                    sx={{ 
                      color: colors.subText, 
                      fontSize: "0.95rem",
                      transition: "0.3s", 
                      "&:hover": { color: colors.accent, pl: 1 } 
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Column 3: Contact & Back to Top */}
            <Grid item xs={12} md={3}>
              <Stack spacing={3} alignItems={{ xs: "flex-start", md: "flex-end" }}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ color: colors.accent, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: 1 }}>
                  Connect
                </Typography>
                
                <Stack direction="row" spacing={1}>
                  {[
                    { icon: <GitHubIcon />, link: "https://github.com/RithikaV31" },
                    { icon: <LinkedInIcon />, link: "https://www.linkedin.com/..." },
                    { icon: <InstagramIcon />, link: "https://www.instagram.com/..." },
                    { icon: <WhatsAppIcon />, link: "https://wa.me/..." }
                  ].map((social, index) => (
                    <IconButton 
                      key={index}
                      href={social.link}
                      target="_blank"
                      sx={{ 
                        color: colors.text, 
                        bgcolor: "rgba(255,255,255,0.05)",
                        transition: "0.3s", 
                        "&:hover": { bgcolor: colors.accent, color: colors.bg, transform: "translateY(-5px)" } 
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>

                <Button
                  onClick={scrollToTop}
                  variant="text"
                  startIcon={<ArrowUpwardIcon />}
                  sx={{
                    color: colors.subText,
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    "&:hover": { color: colors.accent }
                  }}
                >
                  BACK TO TOP
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Legal Bar */}
      <Box sx={{ bgcolor: colors.accent, py: 1, textAlign: "center" }}>
        <Typography variant="caption" sx={{ color: "#000", fontWeight: "700", letterSpacing: 0.5 }}>
          COPYRIGHT © {new Date().getFullYear()} RITHIKA V. • CRAFTED WITH PASSION
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;