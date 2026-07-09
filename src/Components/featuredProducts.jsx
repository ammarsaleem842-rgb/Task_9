import { Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { products, categories } from "../data/products";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart.jsx";

const FeaturedProducts = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const { addToCart } = useCart();
    const [snackbar, setSnackbar] = useState({ open: false, message: "" });

    const filteredProducts = selectedCategory === "ALL"
        ? products
        : products.filter(product => product.category === selectedCategory);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleViewAll = () => {
        navigate("/search");
    };

    const handleAddToCart = (product, e) => {
        e.stopPropagation();
        addToCart(product);
        setSnackbar({
            open: true,
            message: `${product.name} added to cart!`
        });
    };

    return (
        <Box
            sx={{
                mt: "20px",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                px: { xs: "24px", md: "60px", lg: "100px" },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    mb: "48px",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontSize: "32px",
                        lineHeight: "40px",
                        letterSpacing: 0,
                        color: "#2F302C",
                        mb: "24px",
                    }}
                >
                    FEATURED PRODUCTS
                </Typography>
                <Box sx={{ gap: "48px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            sx={{
                                color: selectedCategory === category ? "#B88E2F" : "#2F302C",
                                fontWeight: selectedCategory === category ? 700 : 400,
                                textTransform: "uppercase",
                                fontSize: "14px",
                                fontFamily: "'Poppins', sans-serif",
                                minWidth: "auto",
                                px: 0,
                                py: 0,
                                borderBottom: selectedCategory === category ? "2px solid #B88E2F" : "2px solid transparent",
                                borderRadius: 0,
                                "&:hover": {
                                    bgcolor: "transparent",
                                    color: "#B88E2F",
                                },
                            }}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "1fr 1fr 1fr",
                    },
                    gap: "32px",
                    mb: "48px",
                }}
            >
                {filteredProducts.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            cursor: "pointer",
                            transition: "transform 0.3s",
                            "&:hover": {
                                transform: "translateY(-8px)",
                            },
                        }}
                        onClick={() => navigate(`/productdetail/${product.id}`)}
                    >
                        <Box
                            sx={{
                                height: "400px",
                                width: "100%",
                                maxWidth: "300px",
                                mb: "16px",
                                backgroundColor: "#F7F7F7",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.3s",
                                }}
                                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                            />
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: "16px",
                                color: "#2F302C",
                                mb: "8px",
                                textAlign: "center",
                            }}
                        >
                            {product.name.toUpperCase()}
                        </Typography>
                        <Rating value={product.rating} readOnly sx={{ color: "black", mb: "8px" }} />
                        <Typography sx={{ fontWeight: 700, fontSize: "18px", color: "#B88E2F" }}>
                            ${product.price.toFixed(2)}
                        </Typography>
                        <Box sx={{ display: "flex", gap: "8px", width: "100%", maxWidth: "300px" }}>
                            <Button
                                onClick={(e) => handleAddToCart(product, e)}
                                variant="contained"
                                sx={{
                                    flex: 1,
                                    bgcolor: "#000000",
                                    color: "#FFFFFF",
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    borderRadius: "4px",
                                    letterSpacing: "0.5px",
                                    boxShadow: "none",
                                    py: "8px",
                                    "&:hover": {
                                        bgcolor: "#2F302C",
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleViewAll();
                                }}
                                sx={{
                                    color: "#2F302C",
                                    border: "1px solid #2F302C",
                                    borderRadius: "4px",
                                    px: "16px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    "&:hover": {
                                        bgcolor: "#2F302C",
                                        color: "#FFFFFF",
                                    },
                                }}
                            >
                                View
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity="success"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        bgcolor: "#2F302C",
                        color: "#FFFFFF",
                        "& .MuiAlert-icon": {
                            color: "#FFFFFF",
                        },
                    }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "32px", mb: "64px" }}>
                <Button
                    onClick={handleViewAll}
                    variant="contained"
                    sx={{
                        bgcolor: "#000000",
                        color: "#FFFFFF",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        borderRadius: "5px",
                        letterSpacing: "1px",
                        px: "40px",
                        py: "16px",
                        boxShadow: "none",
                        "&:hover": {
                            bgcolor: "#2F302C",
                            boxShadow: "none",
                        },
                    }}
                >
                    View All Products
                </Button>
            </Box>
        </Box>
    );
};

export default FeaturedProducts;