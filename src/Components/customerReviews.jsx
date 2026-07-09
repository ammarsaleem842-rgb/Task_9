import { Box, Typography } from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import reviewerAvatar from "../../assets/reviewer_avatar.png";

const reviews = [
    {
        id: 1,
        name: "Larry Jonhson", // Spelled exactly like the reference image mockup
        avatar: reviewerAvatar,
        rating: 5,
        text: `"The sofa is not only incredibly stylish, but also very comfortable to lounge on. The clean lines and minimalist design make it a perfect fit for my modern living room, and the neutral color scheme allows me to easily incorporate other accent pieces. The sofa is also very sturdy and well-constructed, so I know it will last me for years to come."`,
    },
    {
        id: 2,
        name: "Sarah Williams",
        avatar: reviewerAvatar,
        rating: 5,
        text: `"A mid-century modern armchair! The leather upholstery is incredibly soft, and it can be easily incorporated into any living space with its timeless design. Truly a statement piece that everyone notices."`,
    },
    {
        id: 3,
        name: "Michael Chen",
        avatar: reviewerAvatar,
        rating: 5,
        text: `"Vintage feel that is sure to impress, with ample space for family movie nights and quality materials used in its construction. Arrived well-packaged and exactly as described."`,
    },
];

const CustomerReviews = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Set to 1 if you want Sarah's or Larry's default focus layout

    const prevIndex = (activeIndex - 1 + reviews.length) % reviews.length;
    const nextIndex = (activeIndex + 1) % reviews.length;

    return (
        <Box
            component="section"
            sx={{
                py: "80px",
                bgcolor: "#FFFFFF", // Matched pure white background from image
                overflow: "hidden",
                width: "100%",
            }}
        >
            {/* Section Header */}
            <Box sx={{ textAlign: "center", mb: "56px", px: "24px" }}>
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "22px", md: "26px" },
                        color: "#333333",
                        mb: "16px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                    }}
                >
                    REVIEWED BY CUSTOMERS
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "#8C8C8C",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                    }}
                >
                    What our customers think about us?
                </Typography>
            </Box>

            {/* Seamless Layout Track */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    px: { xs: "24px", md: "40px" },
                    gap: "48px",
                }}
            >
                {/* Left Side Column (Faded & Cutoff text) */}
                <Box
                    sx={{
                        flex: "1",
                        display: { xs: "none", md: "block" },
                        opacity: 0.8,
                        textAlign: "right",
                        maxWidth: "350px",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontStyle: "italic",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#333333",
                            lineHeight: 1.6,
                            whiteSpace: "nowrap",
                        }}
                    >
                        {reviews[prevIndex].text.slice(0, 80)}...
                    </Typography>
                </Box>

                {/* Main Focused Review */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        maxWidth: "680px",
                        width: "100%",
                    }}
                >
                    {/* Avatar Container with Outer Ring Styling */}
                    <Box
                        sx={{
                            position: "relative",
                            display: "inline-flex",
                            p: "6px",
                            border: "1px solid #999999",
                            borderRadius: "50%",
                            mb: "20px",
                        }}
                    >
                        <Box
                            component="img"
                            src={reviews[activeIndex].avatar}
                            alt={reviews[activeIndex].name}
                            sx={{
                                width: "64px",
                                height: "64px",
                                borderRadius: "50%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                    {/* Stars - Solid Black */}
                    <Box sx={{ display: "flex", gap: "4px", mb: "24px" }}>
                        {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                            <StarIcon key={i} sx={{ fontSize: "14px", color: "#000000" }} />
                        ))}
                    </Box>

                    {/* Review Body Text */}
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontStyle: "italic",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#333333",
                            lineHeight: 1.6,
                            mb: "24px",
                        }}
                    >
                        {reviews[activeIndex].text}
                    </Typography>

                    {/* Subdued Gray Name Line */}
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "12px",
                            color: "#A6A6A6",
                        }}
                    >
                        - {reviews[activeIndex].name} -
                    </Typography>
                </Box>

                {/* Right Side Column (Faded & Cutoff text) */}
                <Box
                    sx={{
                        flex: "1",
                        display: { xs: "none", md: "block" },
                        opacity: 0.8,
                        textAlign: "left",
                        maxWidth: "350px",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontStyle: "italic",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#333333",
                            lineHeight: 1.6,
                            whiteSpace: "nowrap",
                        }}
                    >
                        {reviews[nextIndex].text.slice(0, 80)}...
                    </Typography>
                </Box>
            </Box>

            {/* Custom Bottom Line Dots Indicator */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    mt: "56px",
                }}
            >
                {reviews.map((_, i) => (
                    <Box
                        key={i}
                        component="button"
                        onClick={() => setActiveIndex(i)}
                        sx={{
                            width: "28px",
                            height: "2px",
                            bgcolor: i === activeIndex ? "#000000" : "#D4D4D4",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "background-color 0.2s ease",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default CustomerReviews;