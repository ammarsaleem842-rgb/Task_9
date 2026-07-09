import { Box, Typography } from "@mui/material";
import sofaImg from "../../assets/sofa.png";
import chairImg from "../../assets/chair.png";
import lightbulb from "../../assets/lightbulb.png";
import lightbulb2 from "../../assets/lightbulb2.png";

const galleryImages = [
    { img: sofaImg, label: "Designed Sofa" },
    { img: chairImg, label: "Nova Chair" },
    { img: lightbulb, label: "Modern Lamp" },
    { img: lightbulb2, label: "Hanging Light" },
    { img: sofaImg, label: "Comfort Living" },
    { img: chairImg, label: "Elegant Seating" },
];

const InstagramGallery = () => {
    return (
        <Box
            component="section"
            sx={{
                py: "80px",
                px: { xs: "24px", md: "60px", lg: "100px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
                bgcolor: "#F9F9F9",
            }}
        >
            {/* Section Header */}
            <Box sx={{ textAlign: "center" }}>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#9F9F9F",
                        letterSpacing: "1px",
                        mb: "8px",
                        textTransform: "uppercase",
                    }}
                >
                    Follow Us
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "24px", md: "32px" },
                        color: "#2F302C",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                    }}
                >
                    @ Instagram
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        color: "#9F9F9F",
                        mt: "12px",
                    }}
                >
                    Tag <Box component="span" sx={{ fontWeight: 600, color: "#2F302C" }}>#Furnitur</Box> to be featured
                </Typography>
            </Box>

            {/* Gallery Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(6, 1fr)" },
                    gap: "12px",
                    width: "100%",
                    maxWidth: "1200px",
                }}
            >
                {galleryImages.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            aspectRatio: "1/1",
                            bgcolor: "#F0F0F0",
                            borderRadius: "8px",
                            overflow: "hidden",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            p: "16px",
                            transition: "all 0.3s",
                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
                            },
                            "&:hover .overlay": {
                                opacity: 1,
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={item.img}
                            alt={item.label}
                            sx={{
                                width: "70%",
                                height: "70%",
                                objectFit: "contain",
                            }}
                        />
                        {/* Overlay */}
                        <Box
                            className="overlay"
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                bgcolor: "rgba(0,0,0,0.4)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: 0,
                                transition: "opacity 0.25s",
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
                            </svg>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default InstagramGallery;