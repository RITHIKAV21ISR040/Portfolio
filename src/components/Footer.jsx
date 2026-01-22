import React from "react";
import { Box, Container, Typography, Link, IconButton, useTheme, Divider, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <GitHubIcon />, href: "https://github.com/RithikaV31" },
    { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/rithika-varatharasan-27557b259/" },
    { icon: <InstagramIcon />, href: "https://www.instagram.com/rithi_sam_/" },
  ];

  return (
    <Box
      sx={{
        bgcolor: isDark ? "#051020" : "#f5f7fa",
        color: isDark ? "#fff" : "#1a1a1a",
        pt: 0,
        pb: 4,
        position: "relative",
        borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            py: 4,
            gap: 2
          }}
        >
          {/* Logo/Name */}
          <Typography variant="h5" fontWeight="900" sx={{ letterSpacing: 1 }}>
            Rithika<span style={{ color: "#00B207" }}>.</span>
          </Typography>

          {/* Navigation */}
          {!isMobile && (
            <Box display="flex" gap={4}>
              {["About", "Services", "Experience", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  underline="none"
                  sx={{
                    color: isDark ? "text.secondary" : "text.primary",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    transition: "color 0.2s",
                    "&:hover": { color: "#00B207" }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          )}

          {/* Copyright */}
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} All Rights Reserved.
          </Typography>
        </Box>

        {/* Bottom Social Bar */}
        <Box
          sx={{
            bgcolor: isDark ? "rgba(255,255,255,0.02)" : "#f8f9fa",
            borderRadius: "20px",
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            position: "relative"
          }}
        >
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              href={social.href}
              target="_blank"
              sx={{
                color: isDark ? "#aaa" : "#555",
                transition: "all 0.3s",
                "&:hover": { color: "#00B207", transform: "translateY(-2px)" }
              }}
            >
              {social.icon}
            </IconButton>
          ))}

          {/* Absolute Scroll Top Button */}
          <IconButton
            onClick={scrollToTop}
            sx={{
              position: "absolute",
              right: 10,
              bgcolor: "#00B207",
              color: "#fff",
              width: 40,
              height: 40,
              "&:hover": { bgcolor: "#009106" },
              display: { xs: "none", sm: "flex" }
            }}
          >
            <ArrowUpwardIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
