import { Box, Typography, Button, Divider, IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import CloseIcon from "@mui/icons-material/Close"
import NavBar from "../Components/navBar"
import WhyChoseUs from "../Components/whyChoseUs"
import CustomerServices from "../Components/customerServices"
import Footer from "../Components/footer"
import { useCart } from "../hooks/useCart"

const AddCart = () => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()
    const subtotal = cartTotal

    return (
        <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh" }}>
            <NavBar />

            {/* Page Header */}
            <Box
                sx={{
                    bgcolor: "#FFFFFF",
                    py: "40px",
                    textAlign: "center",
                }}
            >
                <Typography
                    component="h1"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "24px", md: "32px" },
                        color: "#2F302C",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        mb: "8px",
                    }}
                >
                    Shopping Cart
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#9F9F9F",
                    }}
                >
                    <Link to="/homepage" style={{ color: "#2F302C", textDecoration: "none" }}>Home</Link> / Cart
                </Typography>
            </Box>

            {/* Cart Content */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    gap: "40px",
                    px: { xs: "24px", md: "60px", lg: "100px" },
                    py: "60px",
                }}
            >
                {/* Cart Items */}
                <Box sx={{ flex: 2 }}>
                    {/* Header Row */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr 1fr 1fr 40px",
                            gap: "16px",
                            pb: "16px",
                            borderBottom: "1px solid #E0E0E0",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#9F9F9F",
                            textTransform: "uppercase",
                        }}
                    >
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 600, color: "#9F9F9F" }}>Product</Typography>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 600, color: "#9F9F9F", textAlign: "center" }}>Price</Typography>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 600, color: "#9F9F9F", textAlign: "center" }}>Quantity</Typography>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 600, color: "#9F9F9F", textAlign: "right" }}>Subtotal</Typography>
                        <Box />
                    </Box>

                    {cartItems.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "2fr 1fr 1fr 1fr 40px",
                                gap: "16px",
                                alignItems: "center",
                                py: "24px",
                                borderBottom: "1px solid #F0F0F0",
                            }}
                        >
                            {/* Product Info */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                <Box
                                    component="img"
                                    src={item.image}
                                    alt={item.name}
                                    sx={{
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "8px",
                                        objectFit: "contain",
                                        bgcolor: "#F7F7F7",
                                        p: "8px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "15px",
                                        fontWeight: 500,
                                        color: "#2F302C",
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </Box>

                            {/* Price */}
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                    color: "#9F9F9F",
                                    textAlign: "center",
                                }}
                            >
                                ${item.price.toFixed(2)}
                            </Typography>

                            {/* Quantity */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                }}
                            >
                                <IconButton
                                    size="small"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    sx={{
                                        border: "1px solid #E0E0E0",
                                        borderRadius: "4px",
                                        width: "28px",
                                        height: "28px",
                                    }}
                                >
                                    <RemoveIcon sx={{ fontSize: "16px" }} />
                                </IconButton>
                                <Typography
                                    sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        color: "#2F302C",
                                        minWidth: "24px",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.quantity}
                                </Typography>
                                <IconButton
                                    size="small"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    sx={{
                                        border: "1px solid #E0E0E0",
                                        borderRadius: "4px",
                                        width: "28px",
                                        height: "28px",
                                    }}
                                >
                                    <AddIcon sx={{ fontSize: "16px" }} />
                                </IconButton>
                            </Box>

                            {/* Subtotal */}
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "#2F302C",
                                    textAlign: "right",
                                }}
                            >
                                ${(item.price * item.quantity).toFixed(2)}
                            </Typography>

                            {/* Remove */}
                            <IconButton
                                size="small"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <CloseIcon sx={{ fontSize: "18px", color: "#9F9F9F" }} />
                            </IconButton>
                        </Box>
                    ))}
                </Box>

                {/* Cart Totals */}
                <Box
                    sx={{
                        flex: 1,
                        bgcolor: "#F9F9F9",
                        borderRadius: "8px",
                        p: "32px",
                        height: "fit-content",
                        minWidth: { lg: "280px" },
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: "20px",
                            color: "#2F302C",
                            textTransform: "uppercase",
                            mb: "32px",
                            textAlign: "center",
                        }}
                    >
                        Cart Totals
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: "16px" }}>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 500, color: "#2F302C" }}>Subtotal</Typography>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#9F9F9F" }}>${subtotal.toFixed(2)}</Typography>
                    </Box>

                    <Divider sx={{ mb: "16px" }} />

                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: "32px" }}>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 500, color: "#2F302C" }}>Total</Typography>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 700, color: "#B88E2F" }}>${subtotal.toFixed(2)}</Typography>
                    </Box>

                    <Button
                        component={Link}
                        to="/customerinfo"
                        variant="contained"
                        fullWidth
                        sx={{
                            height: "48px",
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
                        Check Out
                    </Button>
                </Box>
            </Box>

            <WhyChoseUs />
            <CustomerServices />
            <Footer />
        </Box>
    )
}
export default AddCart