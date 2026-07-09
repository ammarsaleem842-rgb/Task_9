import { Box, Typography, Button, Divider, IconButton, Rating, Snackbar, Alert } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import NavBar from "../Components/navBar"
import WhyChoseUs from "../Components/whyChoseUs"
import CustomerServices from "../Components/customerServices"
import Footer from "../Components/footer"
import sofaImg from "../../assets/sofa.png"
import { products } from "../data/products"
import { useCart } from "../hooks/useCart.jsx"
import { useState } from "react"

const ProductDetail = () => {
    const { id } = useParams();
    const productId = Number(id);
    const baseProduct = products.find((item) => item.id === productId) || products[0];
    const defaultDetails = {
        sold: 261,
        watched: "3.1k",
        descriptionShort:
            "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function.",
        descriptionLong:
            "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        features: [
            "Minimal sofas have sleek designs with sturdy frames and firm cushions.",
            "They feature neutral-colored upholstery made of leather or high-quality fabric.",
            "Some designs may have modular components or hidden storage.",
            "Minimal sofas are practical, versatile, and timeless.",
            "Upgrade your living space with a minimal sofa today.",
        ],
    };
    const product = {
        ...defaultDetails,
        ...baseProduct,
    };
    const { addToCart } = useCart();
    const [snackbar, setSnackbar] = useState({ open: false, message: "" });
    const [quantity, setQuantity] = useState(1);
    const [selectedType, setSelectedType] = useState("Long");
    const [selectedColor, setSelectedColor] = useState("Emerald");

    const types = ["Long", "Medium", "Short"];
    const colors = [
        { label: "Ceban", value: "#F5F1E8" },
        { label: "Saphire", value: "#F4F7FA" },
        { label: "Emerald", value: "#4A8A6A" },
        { label: "Ruby", value: "#D94A4A" },
    ];

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image || sofaImg || sofaImg,
            category: product.category,
            quantity,
        });
        setSnackbar({
            open: true,
            message: `${product.name} added to cart!`,
        });
    };

    return (
        <Box sx={{ bgcolor: "#F8F8F8", minHeight: "100vh" }}>
            <NavBar />

            <Box sx={{ px: { xs: "20px", md: "60px", lg: "100px" }, py: "28px" }}>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#9F9F9F",
                    }}
                >
                    <Link to="/homepage" style={{ color: "#2F302C", textDecoration: "none" }}>Home</Link>
                    {" / "}
                    <Link to="/homepage" style={{ color: "#2F302C", textDecoration: "none" }}>Furniture</Link>
                    {" / "}
                    <span style={{ color: "#2F302C", fontWeight: 600 }}>{product.name}</span>
                </Typography>
            </Box>

            <Box sx={{ px: { xs: "20px", md: "60px", lg: "100px" }, pb: "60px" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" },
                        gap: "40px",
                        bgcolor: "#FFFFFF",
                        borderRadius: "32px",
                        p: { xs: 4, md: 6 },
                        boxShadow: "0px 28px 80px rgba(45, 50, 62, 0.08)",
                    }}
                >
                    <Box sx={{ flex: 1, position: "relative", minHeight: "520px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box
                            sx={{
                                position: "absolute",
                                width: { xs: "240px", md: "320px" },
                                height: { xs: "240px", md: "320px" },
                                borderRadius: "50%",
                                bgcolor: "#F2F3F7",
                                zIndex: 1,
                            }}
                        />
                        <Box
                            component="img"
                            src={sofaImg}
                            alt={product.name}
                            sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: "520px",
                                height: "auto",
                                zIndex: 2,
                            }}
                        />
                    </Box>

                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: { xs: "28px", md: "36px" },
                                    fontWeight: 700,
                                    color: "#1D1F20",
                                    mb: "20px",
                                }}
                            >
                                {product.name}
                            </Typography>

                            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", mb: "24px" }}>
                                <Rating name="read-only" value={5} readOnly size="small" precision={0.5} sx={{ color: "#FFB400" }} />
                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#7C7E81" }}>
                                    {product.sold} products sold • {product.watched} products watched
                                </Typography>
                                <Box
                                    sx={{
                                        px: "12px",
                                        py: "6px",
                                        bgcolor: "#D50F0F",
                                        color: "#FFFFFF",
                                        borderRadius: "999px",
                                        fontSize: "12px",
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                    }}
                                >
                                    On Sale
                                </Box>
                            </Box>

                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                    color: "#6E7277",
                                    lineHeight: 1.8,
                                    mb: "32px",
                                }}
                            >
                                {descriptionShort}
                            </Typography>

                            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "32px", mb: "32px" }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            color: "#9F9F9F",
                                            mb: "14px",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Type
                                    </Typography>
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                                        {types.map((type) => (
                                            <Button
                                                key={type}
                                                onClick={() => setSelectedType(type)}
                                                sx={{
                                                    minWidth: "86px",
                                                    bgcolor: selectedType === type ? "#1D1F20" : "#F6F6F6",
                                                    color: selectedType === type ? "#FFFFFF" : "#2F302C",
                                                    borderRadius: "8px",
                                                    textTransform: "none",
                                                    boxShadow: "none",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    fontSize: "13px",
                                                    fontWeight: 600,
                                                    '&:hover': { bgcolor: selectedType === type ? '#1D1F20' : '#E8E8E8' },
                                                }}
                                            >
                                                {type}
                                            </Button>
                                        ))}
                                    </Box>
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            color: "#9F9F9F",
                                            mb: "14px",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Color
                                    </Typography>
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                                        {colors.map((color) => (
                                            <Box
                                                key={color.label}
                                                onClick={() => setSelectedColor(color.label)}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    px: "14px",
                                                    py: "10px",
                                                    borderRadius: "12px",
                                                    cursor: "pointer",
                                                    bgcolor: selectedColor === color.label ? "#F1F3F7" : "#FAFAFA",
                                                    border: selectedColor === color.label ? "1px solid #D0D5DD" : "1px solid transparent",
                                                }}
                                            >
                                                <Box sx={{ width: "16px", height: "16px", borderRadius: "50%", bgcolor: color.value, border: "1px solid #DADADA" }} />
                                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#2F302C" }}>
                                                    {color.label}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: "20px", alignItems: { xs: "flex-start", md: "center" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #E5E7EB", borderRadius: "12px" }}>
                                    <IconButton
                                        size="small"
                                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                        sx={{ width: "40px", height: "40px", color: "#2F302C" }}
                                    >
                                        <RemoveIcon sx={{ fontSize: "18px" }} />
                                    </IconButton>
                                    <Typography sx={{ minWidth: "52px", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontSize: "15px", fontWeight: 700, color: "#2F302C" }}>
                                        {quantity}
                                    </Typography>
                                    <IconButton
                                        size="small"
                                        onClick={() => setQuantity((prev) => prev + 1)}
                                        sx={{ width: "40px", height: "40px", color: "#2F302C" }}
                                    >
                                        <AddIcon sx={{ fontSize: "18px" }} />
                                    </IconButton>
                                </Box>

                                <Button
                                    variant="contained"
                                    onClick={handleAddToCart}
                                    sx={{
                                        height: "48px",
                                        px: "40px",
                                        bgcolor: "#1D1F20",
                                        color: "#FFFFFF",
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "14px",
                                        fontWeight: 700,
                                        borderRadius: "12px",
                                        textTransform: "none",
                                        boxShadow: "none",
                                        '&:hover': { bgcolor: '#262B33' },
                                    }}
                                >
                                    + Add to Cart
                                </Button>
                            </Box>

                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: { xs: "28px", md: "34px" },
                                    fontWeight: 700,
                                    color: "#E52323",
                                }}
                            >
                                ${product.price.toFixed(2)}
                            </Typography>
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
                                    '& .MuiAlert-icon': {
                                        color: "#FFFFFF",
                                    },
                                }}
                            >
                                {snackbar.message}
                            </Alert>
                        </Snackbar>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ px: { xs: "20px", md: "60px", lg: "100px" }, pb: "60px" }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: "32px",
                        bgcolor: "#FFFFFF",
                        borderRadius: "32px",
                        p: { xs: 4, md: 6 },
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#1D1F20",
                                mb: "20px",
                            }}
                        >
                            Description
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "14px",
                                color: "#6E7277",
                                lineHeight: 1.8,
                            }}
                        >
                            {product.descriptionLong}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#1D1F20",
                                mb: "20px",
                            }}
                        >
                            Fits and Features
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            {product.features.map((feature, index) => (
                                <Box key={index} sx={{ display: "flex", gap: "14px" }}>
                                    <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", bgcolor: "#1D1F20", mt: "10px" }} />
                                    <Typography
                                        sx={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "14px",
                                            color: "#6E7277",
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {feature}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ px: { xs: "20px", md: "60px", lg: "100px" }, pb: "60px" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" },
                        gap: "30px",
                        alignItems: "center",
                        bgcolor: "#FFFFFF",
                        borderRadius: "32px",
                        p: { xs: 4, md: 6 },
                        boxShadow: "0px 20px 60px rgba(45, 50, 62, 0.08)",
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "24px",
                                fontWeight: 700,
                                color: "#1D1F20",
                                mb: "12px",
                            }}
                        >
                            Get in Touch
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "14px",
                                color: "#6E7277",
                                lineHeight: 1.8,
                                mb: "28px",
                            }}
                        >
                            We’d love to hear from you: connect with us for a seamless shopping experience and personalized assistance.
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "16px", alignItems: "center" }}>
                            <Box sx={{ flex: 1 }}>
                                <Box
                                    component="input"
                                    placeholder="Your E-mail"
                                    sx={{
                                        width: "100%",
                                        minHeight: "52px",
                                        px: "18px",
                                        borderRadius: "10px",
                                        border: "1px solid #D1D5DB",
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "14px",
                                        color: "#2F302C",
                                        outline: "none",
                                    }}
                                />
                            </Box>
                            <Button
                                variant="contained"
                                sx={{
                                    height: "52px",
                                    px: "36px",
                                    bgcolor: "#1D1F20",
                                    color: "#FFFFFF",
                                    textTransform: "none",
                                    borderRadius: "12px",
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 700,
                                    '&:hover': { bgcolor: '#262B33' },
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <Box
                            component="img"
                            src={sofaImg}
                            alt="Get in touch sofa"
                            sx={{ width: "100%", maxWidth: "520px", borderRadius: "24px" }}
                        />
                    </Box>
                </Box>
            </Box>

            <WhyChoseUs />
            <CustomerServices />
            <Footer />
        </Box>
    )
}

export default ProductDetail
