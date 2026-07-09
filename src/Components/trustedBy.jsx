import { Box, Typography } from "@mui/material";
import aspenIcon from "../../assets/AspenIcon.png";
import cropHighlightIcon from "../../assets/crop&highlightIcon.png";
import netIcon from "../../assets/NetIcon.png";
import missiIcon from "../../assets/missiIcon.png";
import pepperMintIcon from "../../assets/pepperMintIcon.png";
import pixelLabIcon from "../../assets/pixelLabIcon.png";

const brandLogos = [
    { src: aspenIcon, alt: "Aspen" },
    { src: cropHighlightIcon, alt: "Crop & Highlight" },
    { src: netIcon, alt: "Net" },
    { src: missiIcon, alt: "Missi" },
    { src: pepperMintIcon, alt: "Peppermint" },
    { src: pixelLabIcon, alt: "Pixel Lab" },
];

const TrustedBy = () => {
    return (
        <Box
            component="section"
            sx={{
                py: "60px",
                px: { xs: "24px", md: "60px", lg: "100px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
                bgcolor: "#FFFFFF",
            }}
        >
            <Typography
                sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "22px", md: "28px" },
                    color: "#2F302C",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                }}
            >
                TRUSTED BY
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: "24px", md: "48px" },
                    width: "100%",
                    maxWidth: "1100px",
                }}
            >
                {brandLogos.map((brand, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: "120px",
                            height: "120px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={brand.src}
                            alt={brand.alt}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                                opacity: 0.7,
                                transition: "opacity 0.2s",
                            }}
                            onMouseOver={(e) => (e.target.style.opacity = "1")}
                            onMouseOut={(e) => (e.target.style.opacity = "0.7")}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
export default TrustedBy;