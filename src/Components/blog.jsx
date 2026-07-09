import { Box, Typography } from "@mui/material";
// import sofaImg from "../../assets/sofa.png";
import plantImg from "../../assets/plant.jpg";
import chairImg from "../../assets/chair.jpg";
import stoolImg from "../../assets/stool.jpg";

const blogPosts = [
    {
        id: 1,
        title: "The Evolving Landscape of Furniture Design: Latest Trends and Innovations.",
        excerpt: "Furniture design has come a long way in recent years, with new trends and innovations constantly emerging to push the boundaries of what's possible. From sustainable materials to...",
        image: plantImg,
        date: "20.04.2021 | 14:45",
        tags: ["Living", "Furniture Design", "Smart home"],
    },
    {
        id: 2,
        title: "Upgrade Your Home or Office with the Latest in Sleek and Stylish Designs.",
        excerpt: "One of the key features of modern furniture is its versatility. Today's furniture is designed to serve multiple purposes, whether it's a sofa bed that transforms into a comfortable...",
        image: chairImg,
        date: "20.04.2021 | 14:45",
        tags: ["Innovative", "Comfort", "Multi Purpose"],
    },
    {
        id: 3,
        title: "\"Functionality Meets Style\" - The Perfect Combination for Today's Homes and Offices.",
        excerpt: "Modern furniture is a reflection of our evolving tastes and needs, combining both form and function to create pieces that are both aesthetically pleasing and practical. With its sleek...",
        image: stoolImg, // Replace with your stool/third image asset
        date: "20.04.2021 | 14:45",
        tags: ["Convenient", "Sleek Design", "Mordern"],
    },
];

const Blog = () => {
    return (
        <Box
            component="section"
            sx={{
                py: "80px",
                px: { xs: "24px", md: "60px", lg: "100px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "56px",
                bgcolor: "#FFFFFF",
            }}
        >
            {/* Section Header */}
            <Box sx={{ textAlign: "center" }}>
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "28px", md: "34px" },
                        color: "#1C1C1C",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        mb: "16px",
                    }}
                >
                    Our Blogs
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#707070",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                    }}
                >
                    What we think about interior design?
                </Typography>
            </Box>

            {/* Blog Posts Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" },
                    gap: "40px 24px",
                    width: "100%",
                    maxWidth: "1200px",
                }}
            >
                {blogPosts.map((post) => (
                    <Box
                        key={post.id}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            bgcolor: "#FFFFFF",
                        }}
                    >
                        {/* Image Container - Full Bleed / Aspect Ratio Square */}
                        <Box
                            sx={{
                                width: "100%",
                                paddingTop: "100%", // Forces 1:1 Aspect Ratio like the design
                                position: "relative",
                                overflow: "hidden",
                                mb: "20px",
                            }}
                        >
                            <Box
                                component="img"
                                src={post.image}
                                alt={post.title}
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover", // Covers the container completely
                                }}
                            />
                        </Box>

                        {/* Content */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {/* Date / Time Meta */}
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#8C8C8C",
                                }}
                            >
                                {post.date}
                            </Typography>

                            {/* Title */}
                            <Typography
                                component="h3"
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: "#1C1C1C",
                                    lineHeight: 1.4,
                                }}
                            >
                                {post.title}
                            </Typography>

                            {/* Excerpt */}
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    color: "#707070",
                                    lineHeight: 1.6,
                                    mb: "8px",
                                }}
                            >
                                {post.excerpt}
                            </Typography>

                            {/* Inline Tags */}
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                {post.tags.map((tag, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            bgcolor: "#F5F5F5",
                                            color: "#555555",
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "11px",
                                            px: "10px",
                                            py: "4px",
                                            borderRadius: "2px",
                                        }}
                                    >
                                        {tag}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Blog;