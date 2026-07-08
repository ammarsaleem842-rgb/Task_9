import { Box, Typography } from "@mui/material";
import aspen from "../../assets/AspenIcon.png";
import cropHighlight from "../../assets/crop&highlightIcon.png";
import net from "../../assets/NetIcon.png";
import missi from "../../assets/missiIcon.png";
import pepperMint from "../../assets/pepperMintIcon.png";
import pixelLab from "../../assets/pixelLabIcon.png";

const logos = [
    { src: aspen, alt: "Aspen" },
    { src: cropHighlight, alt: "Crop & Highlight" },
    { src: net, alt: "Net" },
    { src: missi, alt: "Missi" },
    { src: pepperMint, alt: "PepperMint" },
    { src: pixelLab, alt: "Pixel Lab" },
];

const TrustedBy = () => {
    return (
        <Box
            component="section"
            sx={{
                py: "64px",
                px: { xs: "24px", md: "60px", lg: "100px" },
                bgcolor: "#FFFFFF",
            }}
        >
            {/* Heading */}
            <Typography
                component="h2"
                sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: "22px", md: "26px" },
                    fontWeight: 700,
                    color: "#2F302C",
                    mb: "48px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                }}
            >
                Trusted By
            </Typography>

            {/* Logo Grid */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: "24px", md: "48px", lg: "64px" },
                }}
            >
                {logos.map((logo) => (
                    <Box
                        key={logo.alt}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            filter: "grayscale(100%)",
                            opacity: 0.6,
                            transition: "opacity 0.25s, filter 0.25s",
                            "&:hover": { opacity: 1, filter: "grayscale(0%)" },
                        }}
                    >
                        <Box
                            component="img"
                            src={logo.src}
                            alt={logo.alt}
                            sx={{
                                height: { xs: "48px", md: "60px" },
                                width: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TrustedBy;