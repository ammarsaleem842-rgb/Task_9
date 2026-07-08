import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import reviewerAvatar from "../../assets/reviewer_avatar.png";

const reviews = [
    {
        id: 1,
        name: "Larry Johnson",
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
    const [activeIndex, setActiveIndex] = useState(0);

    const prevIndex = (activeIndex - 1 + reviews.length) % reviews.length;
    const nextIndex = (activeIndex + 1) % reviews.length;

    const handlePrev = () => setActiveIndex(prevIndex);
    const handleNext = () => setActiveIndex(nextIndex);

    return (
        <Box
            component="section"
            sx={{
                py: "80px",
                bgcolor: "#F9F1E7",
                overflow: "hidden",
            }}
        >
            {/* Section Header */}
            <Box sx={{ textAlign: "center", mb: "48px", px: "24px" }}>
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "24px", md: "30px" },
                        color: "#2F302C",
                        mb: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                    }}
                >
                    Reviewed by Customers
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#9F9F9F",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                    }}
                >
                    What our customers think about us?
                </Typography>
            </Box>

            {/* Carousel */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    px: { xs: "16px", md: "80px" },
                    gap: { xs: "12px", md: "24px" },
                }}
            >
                {/* Prev Button */}
                <IconButton
                    id="review-prev-btn"
                    onClick={handlePrev}
                    aria-label="Previous review"
                    sx={{
                        bgcolor: "#FFFFFF",
                        border: "1px solid #E0E0E0",
                        width: "48px",
                        height: "48px",
                        flexShrink: 0,
                        "&:hover": { bgcolor: "#B88E2F", color: "#FFFFFF", borderColor: "#B88E2F" },
                        transition: "all 0.2s",
                    }}
                >
                    <ArrowBackIosNewIcon sx={{ fontSize: "16px" }} />
                </IconButton>

                {/* Reviews track */}
                <Box
                    sx={{
                        display: "flex",
                        gap: { xs: "16px", md: "32px" },
                        overflow: "hidden",
                        maxWidth: "960px",
                        width: "100%",
                    }}
                >
                    {/* Prev card (faded) */}
                    <Box
                        sx={{
                            flexShrink: 0,
                            width: { xs: "0", md: "260px" },
                            overflow: "hidden",
                            opacity: 0.35,
                            display: { xs: "none", lg: "block" },
                        }}
                    >
                        <ReviewCard review={reviews[prevIndex]} />
                    </Box>

                    {/* Active card */}
                    <Box sx={{ flexShrink: 0, flex: 1, minWidth: 0 }}>
                        <ReviewCard review={reviews[activeIndex]} active />
                    </Box>

                    {/* Next card (faded) */}
                    <Box
                        sx={{
                            flexShrink: 0,
                            width: { xs: "0", md: "260px" },
                            overflow: "hidden",
                            opacity: 0.35,
                            display: { xs: "none", lg: "block" },
                        }}
                    >
                        <ReviewCard review={reviews[nextIndex]} />
                    </Box>
                </Box>

                {/* Next Button */}
                <IconButton
                    id="review-next-btn"
                    onClick={handleNext}
                    aria-label="Next review"
                    sx={{
                        bgcolor: "#FFFFFF",
                        border: "1px solid #E0E0E0",
                        width: "48px",
                        height: "48px",
                        flexShrink: 0,
                        "&:hover": { bgcolor: "#B88E2F", color: "#FFFFFF", borderColor: "#B88E2F" },
                        transition: "all 0.2s",
                    }}
                >
                    <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
                </IconButton>
            </Box>

            {/* Pagination Dots */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    mt: "40px",
                }}
            >
                {reviews.map((_, i) => (
                    <Box
                        key={i}
                        id={`review-dot-${i}`}
                        component="button"
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to review ${i + 1}`}
                        sx={{
                            width: i === activeIndex ? "32px" : "20px",
                            height: "4px",
                            borderRadius: "2px",
                            bgcolor: i === activeIndex ? "#B88E2F" : "#D9D9D9",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

const ReviewCard = ({ review, active = false }) => (
    <Box
        sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "8px",
            p: { xs: "28px 24px", md: "40px 32px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "16px",
            boxShadow: active ? "0px 8px 40px rgba(0,0,0,0.08)" : "none",
        }}
    >
        {/* Avatar */}
        <Box
            component="img"
            src={review.avatar}
            alt={review.name}
            sx={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #F9F1E7",
            }}
        />

        {/* Stars */}
        <Box sx={{ display: "flex", gap: "2px" }}>
            {[...Array(review.rating)].map((_, i) => (
                <StarIcon key={i} sx={{ fontSize: "18px", color: "#B88E2F" }} />
            ))}
        </Box>

        {/* Text */}
        <Typography
            sx={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: "italic",
                fontSize: "13px",
                color: "#6B6B6B",
                lineHeight: 1.9,
                maxWidth: "520px",
            }}
        >
            {review.text}
        </Typography>

        {/* Name */}
        <Typography
            sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                color: "#2F302C",
                letterSpacing: "0.5px",
            }}
        >
            — {review.name} —
        </Typography>
    </Box>
);

export default CustomerReviews;