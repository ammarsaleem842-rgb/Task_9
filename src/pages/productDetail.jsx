import { Box, Typography, Button, Divider, IconButton, Rating, Snackbar, Alert } from "@mui/material"
import { Link } from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import NavBar from "../Components/navBar"
import WhyChoseUs from "../Components/whyChoseUs"
import CustomerServices from "../Components/customerServices"
import Footer from "../Components/footer"
import sofaImg from "../../assets/sofa.png"
import { useCart } from "../hooks/useCart"

const ProductDetail = () => {
    const { addToCart } = useCart();
    const [snackbar, setSnackbar] = useState({ open: false, message: "" });

    const handleAddToCart = () => {
        addToCart({
            id: 1,
            name: "Designed Sofa",
            price: 250.00,
            image: sofaImg,
            rating: 5,
            reviews: 24,
            category: "Sofa",
        });
        setSnackbar({
            open: true,
            message: "Designed Sofa added to cart!"
        });
    };

    return (
        <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh" }}>
            <NavBar />

            {/* Breadcrumb */}
            <Box
                sx={{
                    bgcolor: "#F6F6F6",
                    py: "20px",
                    px: { xs: "24px", md: "60px", lg: "100px" },
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#9F9F9F",
                    }}
                >
                    <Link to="/homepage" style={{ color: "#2F302C", textDecoration: "none" }}>Home</Link>
                    {" / "}
                    <Link to="/homepage" style={{ color: "#2F302C", textDecoration: "none" }}>Shop</Link>
                    {" / "}
                    <span style={{ color: "#2F302C", fontWeight: 600 }}>Product Detail</span>
                </Typography>
            </Box>

            {/* Product Detail Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "48px",
                    px: { xs: "24px", md: "60px", lg: "100px" },
                    py: "60px",
                }}
            >
                {/* Product Images */}
                <Box sx={{ flex: 1, display: "flex", gap: "16px", flexDirection: { xs: "column", sm: "row" } }}>
                    {/* Thumbnails */}
                    <Box
                        sx={{
                            display: { xs: "flex", sm: "flex" },
                            flexDirection: { xs: "row", sm: "column" },
                            gap: "12px",
                            order: { xs: 2, sm: 1 },
                        }}
                    >
                        {[1, 2, 3, 4].map((item) => (
                            <Box
                                key={item}
                                sx={{
                                    width: { xs: "60px", sm: "80px" },
                                    height: { xs: "60px", sm: "80px" },
                                    borderRadius: "8px",
                                    bgcolor: "#F7F7F7",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: item === 1 ? "2px solid #B88E2F" : "2px solid transparent",
                                    cursor: "pointer",
                                    overflow: "hidden",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={sofaImg}
                                    alt="Product thumbnail"
                                    sx={{
                                        width: "80%",
                                        height: "80%",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>

                    {/* Main Image */}
                    <Box
                        sx={{
                            flex: 1,
                            bgcolor: "#F9F9F9",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            p: "32px",
                            minHeight: "400px",
                            order: { xs: 1, sm: 2 },
                        }}
                    >
                        <Box
                            component="img"
                            src={sofaImg}
                            alt="Product main image"
                            sx={{
                                width: "100%",
                                maxWidth: "400px",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                </Box>

                {/* Product Info */}
                <Box sx={{ flex: 1, maxWidth: "500px" }}>
                    <Typography
                        component="h1"
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: { xs: "24px", md: "32px" },
                            color: "#2F302C",
                            mb: "12px",
                        }}
                    >
                        Designed Sofa
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "20px",
                            fontWeight: 600,
                            color: "#B88E2F",
                            mb: "16px",
                        }}
                    >
                        $250.00
                    </Typography>

                    {/* Rating */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "24px" }}>
                        <Rating value={5} readOnly size="small" sx={{ color: "#000000" }} />
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "12px",
                                color: "#9F9F9F",
                            }}
                        >
                            (5 Customer Reviews)
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "14px",
                            color: "#666666",
                            lineHeight: 1.7,
                            mb: "24px",
                        }}
                    >
                        Introducing our newest sofa, the perfect combination of style and comfort,
                        designed to elevate your living space. Featuring clean lines and minimalist design,
                        it seamlessly blends form and function.
                    </Typography>

                    <Divider sx={{ mb: "24px" }} />

                    {/* Size */}
                    <Box sx={{ mb: "24px" }}>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "#9F9F9F",
                                mb: "12px",
                                textTransform: "uppercase",
                            }}
                        >
                            Size
                        </Typography>
                        <Box sx={{ display: "flex", gap: "12px" }}>
                            {["L", "XL", "XXL"].map((size) => (
                                <Box
                                    key={size}
                                    sx={{
                                        width: "48px",
                                        height: "48px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "4px",
                                        bgcolor: size === "L" ? "#B88E2F" : "#F0F0F0",
                                        color: size === "L" ? "#FFFFFF" : "#2F302C",
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    {size}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Color */}
                    <Box sx={{ mb: "32px" }}>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                fontWeight: 500,
                                color: "#9F9F9F",
                                mb: "12px",
                                textTransform: "uppercase",
                            }}
                        >
                            Color
                        </Typography>
                        <Box sx={{ display: "flex", gap: "12px" }}>
                            {["#000000", "#B88E2F", "#4A90D9"].map((color) => (
                                <Box
                                    key={color}
                                    sx={{
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "50%",
                                        bgcolor: color,
                                        cursor: "pointer",
                                        border: color === "#B88E2F" ? "3px solid #2F302C" : "3px solid transparent",
                                        transition: "all 0.2s",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>

                    {/* Quantity and Add to Cart */}
                    <Box sx={{ display: "flex", gap: "16px", alignItems: "center", mb: "24px" }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #E0E0E0",
                                borderRadius: "4px",
                            }}
                        >
                            <IconButton size="small" sx={{ borderRadius: 0, px: "12px" }}>
                                <RemoveIcon sx={{ fontSize: "16px" }} />
                            </IconButton>
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "#2F302C",
                                    px: "16px",
                                }}
                            >
                                1
                            </Typography>
                            <IconButton size="small" sx={{ borderRadius: 0, px: "12px" }}>
                                <AddIcon sx={{ fontSize: "16px" }} />
                            </IconButton>
                        </Box>

                    <Button
                        variant="contained"
                        onClick={handleAddToCart}
                        sx={{
                            height: "48px",
                            px: "40px",
                            bgcolor: "#000000",
                            color: "#FFFFFF",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "14px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            borderRadius: "5px",
                            letterSpacing: "1px",
                            boxShadow: "none",
                            "&:hover": {
                                bgcolor: "#2F302C",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Add To Cart
                    </Button>

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

                        <IconButton
                            sx={{
                                border: "1px solid #E0E0E0",
                                borderRadius: "50%",
                                width: "48px",
                                height: "48px",
                            }}
                        >
                            <FavoriteBorderIcon sx={{ color: "#2F302C" }} />
                        </IconButton>
                    </Box>

                    <Divider sx={{ mb: "24px" }} />

                    {/* Additional Info */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {[
                            { label: "SKU", value: "SS001" },
                            { label: "Category", value: "Sofas" },
                            { label: "Tags", value: "Sofa, Chair, Home, Modern" },
                        ].map((info) => (
                            <Box key={info.label} sx={{ display: "flex", gap: "16px" }}>
                                <Typography
                                    sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "13px",
                                        color: "#9F9F9F",
                                        minWidth: "80px",
                                    }}
                                >
                                    {info.label}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "13px",
                                        color: "#2F302C",
                                    }}
                                >
                                    {info.value}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Description / Reviews Tabs */}
            <Box
                sx={{
                    px: { xs: "24px", md: "60px", lg: "100px" },
                    py: "60px",
                    bgcolor: "#F9F9F9",
                }}
            >
                <Box sx={{ display: "flex", gap: "40px", mb: "32px" }}>
                    {["Description", "Additional Info", "Reviews (5)"].map((tab, i) => (
                        <Typography
                            key={tab}
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "14px",
                                fontWeight: i === 0 ? 600 : 400,
                                color: i === 0 ? "#2F302C" : "#9F9F9F",
                                cursor: "pointer",
                                textTransform: "uppercase",
                                borderBottom: i === 0 ? "2px solid #B88E2F" : "2px solid transparent",
                                pb: "8px",
                            }}
                        >
                            {tab}
                        </Typography>
                    ))}
                </Box>

                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#666666",
                        lineHeight: 1.8,
                        maxWidth: "800px",
                    }}
                >
                    Introducing our newest sofa, the perfect combination of style and comfort,
                    designed to elevate your living space. Featuring clean lines and minimalist design,
                    it seamlessly blends form and function. The sofa is not only incredibly stylish,
                    but also very comfortable to lounge on. The clean lines and minimalist design make
                    it a perfect fit for any modern living room.
                </Typography>
            </Box>

            <WhyChoseUs />
            <CustomerServices />
            <Footer />
        </Box>
    )
}
export default ProductDetail