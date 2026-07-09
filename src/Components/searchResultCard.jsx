import { Box, Typography, Rating, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"

const SearchResultCard = ({ product }) => {
    const { addToCart } = useCart()

    const handleAddToCart = () => {
        addToCart(product)
    }

    return (
        <Box
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
            {/* Image Container */}
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

            {/* Content */}
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
                    <Link
                        to="/productdetail"
                        style={{ color: "#2F302C", textDecoration: "none" }}
                    >
                        {product.name}
                    </Link>
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
                        mb: "12px",
                    }}
                >
                    ${product.price.toFixed(2)}
                </Typography>
                <Button
                    onClick={handleAddToCart}
                    variant="contained"
                    fullWidth
                    sx={{
                        bgcolor: "#000000",
                        color: "#FFFFFF",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
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
            </Box>
        </Box>
    )
}

export default SearchResultCard