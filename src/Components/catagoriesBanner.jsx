import { Box, Typography } from "@mui/material";
import lightbulb from "../../assets/lightbulb.png";
import lightbulb2 from "../../assets/lightbulb2.png";
import sofa from "../../assets/sofa.png";
import chair from "../../assets/chair.png";

const ViewMoreLink = () => (
    <Box
        component="a"
        href="#"
        id="view-more-link"
        sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#2F302C",
            textDecoration: "none",
            mt: "16px",
            transition: "color 0.2s",
            "&:hover": { color: "#B88E2F" },
        }}
    >
        View more
        <Box component="span" sx={{ fontSize: "18px", lineHeight: 1 }}>›</Box>
    </Box>
);

const CatagoriesBanner = () => {
    return (
        <Box
            component="section"
            sx={{
                py: "80px",
                px: { xs: "24px", md: "60px", lg: "100px" },
                bgcolor: "#F9F1E7",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
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
                    }}
                >
                    Browse The Range
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "26px", md: "32px" },
                        color: "#2F302C",
                        mt: "8px",
                    }}
                >
                    Our Products
                </Typography>
            </Box>

            {/* Cards Row */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "24px",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "stretch",
                }}
            >
                {/* Card 1 – Hanging Light */}
                <Box
                    sx={{
                        bgcolor: "#F7F7F7",
                        flex: "1 1 0",
                        maxWidth: { md: "340px" },
                        minHeight: "520px",
                        borderRadius: "4px",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        boxShadow: "0px 4px 20px rgba(0,0,0,0.04)",
                        transition: "transform 0.25s, box-shadow 0.25s",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0px 12px 32px rgba(0,0,0,0.10)",
                        },
                    }}
                >
                    {/* Image area */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-start",
                            gap: "0px",
                            pt: "28px",
                            pr: "20px",
                            minHeight: "280px",
                        }}
                    >
                        <Box
                            component="img"
                            src={lightbulb2}
                            alt="dark hanging light"
                            sx={{ height: "110px", objectFit: "contain" }}
                        />
                        <Box
                            component="img"
                            src={lightbulb}
                            alt="lit hanging light"
                            sx={{ height: "150px", mt: "24px", objectFit: "contain" }}
                        />
                    </Box>

                    {/* Text area */}
                    <Box sx={{ p: "28px 28px 32px" }}>
                        <Typography
                            component="h3"
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 700,
                                fontSize: "16px",
                                color: "#2F302C",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                mb: "12px",
                            }}
                        >
                            Hanging Light
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                fontWeight: 400,
                                color: "#9F9F9F",
                                lineHeight: 1.7,
                            }}
                        >
                            Upgrade your space with our modern hanging light, featuring sleek
                            lines, energy-efficient LED lighting, and adjustable height.
                        </Typography>
                        <ViewMoreLink />
                    </Box>
                </Box>

                {/* Card 2 – Designed Sofa (wider, centered content) */}
                <Box
                    sx={{
                        bgcolor: "#E8F5E0",
                        flex: "1 1 0",
                        maxWidth: { md: "420px" },
                        minHeight: "520px",
                        borderRadius: "4px",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        boxShadow: "0px 4px 20px rgba(0,0,0,0.04)",
                        transition: "transform 0.25s, box-shadow 0.25s",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0px 12px 32px rgba(0,0,0,0.10)",
                        },
                    }}
                >
                    {/* Text area (top) */}
                    <Box sx={{ p: "36px 32px 0", textAlign: "center" }}>
                        <Typography
                            component="h3"
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 700,
                                fontSize: "16px",
                                color: "#2F302C",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                mb: "12px",
                            }}
                        >
                            Designed Sofa
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                fontWeight: 400,
                                color: "#9F9F9F",
                                lineHeight: 1.7,
                            }}
                        >
                            Introducing our newest sofa, the perfect combination of style and
                            comfort, designed to elevate your living space.
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <ViewMoreLink />
                        </Box>
                    </Box>

                    {/* Image area (bottom) */}
                    <Box sx={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", pb: "0px" }}>
                        <Box
                            component="img"
                            src={sofa}
                            alt="designed sofa"
                            sx={{ width: "100%", maxHeight: "240px", objectFit: "contain" }}
                        />
                    </Box>
                </Box>

                {/* Card 3 – Nova Chair */}
                <Box
                    sx={{
                        bgcolor: "#F7F7F7",
                        flex: "1 1 0",
                        maxWidth: { md: "340px" },
                        minHeight: "520px",
                        borderRadius: "4px",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        boxShadow: "0px 4px 20px rgba(0,0,0,0.04)",
                        transition: "transform 0.25s, box-shadow 0.25s",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0px 12px 32px rgba(0,0,0,0.10)",
                        },
                    }}
                >
                    {/* Text area (top) */}
                    <Box sx={{ p: "36px 28px 0" }}>
                        <Typography
                            component="h3"
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 700,
                                fontSize: "16px",
                                color: "#2F302C",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                mb: "12px",
                            }}
                        >
                            Nova Chair
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                fontWeight: 400,
                                color: "#9F9F9F",
                                lineHeight: 1.7,
                            }}
                        >
                            A stylish and comfortable addition to any room, with its sleek
                            design and plush cushions creating the ultimate seating experience.
                        </Typography>
                        <ViewMoreLink />
                    </Box>

                    {/* Image area (bottom-right) */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "flex-end",
                            pr: "0px",
                        }}
                    >
                        <Box
                            component="img"
                            src={chair}
                            alt="nova chair"
                            sx={{ height: "240px", objectFit: "contain" }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CatagoriesBanner;