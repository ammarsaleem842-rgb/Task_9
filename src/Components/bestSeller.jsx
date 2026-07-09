import { Box, Typography, Rating } from "@mui/material";
import sofaImg from "../../assets/sofa.png";
import chairImg from "../../assets/chair.png";
import lightbulb from "../../assets/lightbulb.png";

const bestSellers = [
    {
        id: 1,
        name: "Designed Sofa",
        price: 250.00,
        image: sofaImg,
        rating: 5,
        reviews: 24,
    },
    {
        id: 2,
        name: "Nova Chair",
        price: 180.00,
        image: chairImg,
        rating: 5,
        reviews: 18,
    },
    {
        id: 3,
        name: "Modern Hanging Lamp",
        price: 95.00,
        image: lightbulb,
        rating: 4,
        reviews: 12,
    },
    {
        id: 4,
        name: "Premium Sofa Set",
        price: 420.00,
        image: sofaImg,
        rating: 5,
        reviews: 31,
    },
];

const BestSeller = () => {
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
                    Top Picks
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
                    Best Seller
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "repeat(4, 1fr)" },
                    gap: "24px",
                    width: "100%",
                    maxWidth: "1200px",
                }}
            >
                {bestSellers.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            bgcolor: "#FFFFFF",
                            borderRadius: "8px",
                            overflow: "hidden",
                            boxShadow: "0px 2px 15px rgba(0,0,0,0.04)",
                            transition: "transform 0.25s, box-shadow 0.25s",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0px 8px 25px rgba(0,0,0,0.08)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: "220px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: "#F7F7F7",
                                p: "20px",
                            }}
                        >
                            <Box
                                component="img"
                                src={product.image}
                                alt={product.name}
                                sx={{
                                    maxWidth: "80%",
                                    maxHeight: "80%",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                        <Box sx={{ p: "20px" }}>
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "#2F302C",
                                    mb: "8px",
                                }}
                            >
                                {product.name}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "8px" }}>
                                <Rating value={product.rating} readOnly size="small" sx={{ color: "#000000" }} />
                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", color: "#9F9F9F" }}>
                                    ({product.reviews})
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: "#B88E2F",
                                }}
                            >
                                ${product.price.toFixed(2)}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BestSeller;