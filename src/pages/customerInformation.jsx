import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../Components/navBar";
import Footer from "../Components/footer";
import WhyChoseUs from "../Components/whyChoseUs";
import { useCart } from "../hooks/useCart";

const inputStyles = {
    width: "100%",
    "& .MuiInputBase-root": {
        borderRadius: "4px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8E8E8",
        px: 1.5,
        py: 0.2,
    },
    "& .MuiInputBase-input": {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "13px",
        color: "#2F302C",
        padding: "10px 12px",
        "&::placeholder": {
            color: "#9F9F9F",
            opacity: 1,
        },
    },
};

const CustomerInformation = () => {
    const { cartItems, cartTotal } = useCart();
    const discount = 125;
    const finalTotal = cartTotal - discount;

    const steps = [
        { label: "CART", done: true },
        { label: "CUSTOMER INFORMATION", done: false },
        { label: "SHIPPING & PAYMENT", done: false },
        { label: "REVIEW", done: false },
    ];

    return (
        <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh" }}>
            <NavBar />

            {/* Header */}
            <Box sx={{ bgcolor: "#FFFFFF", py: { xs: 4, md: 6 }, px: { xs: 3, md: 6 }, textAlign: "center" }}>
                <Typography component="h1" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: { xs: "24px", md: "36px" }, fontWeight: 700, color: "#2F302C", textTransform: "uppercase", mb: 1 }}>
                    Shipping & Payment
                </Typography>
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#9F9F9F", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    CHOOSE THE PAYMENT AND SHIPPING METHOD YOU WANT
                </Typography>
            </Box>

            {/* Progress Steps */}
            <Box sx={{ px: { xs: 3, md: 6, lg: 8 }, py: 5 }}>
                <Box sx={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
                    {/* Connecting Line */}
                    <Box sx={{
                        position: "absolute",
                        top: 20,
                        left: "5%",
                        right: "5%",
                        height: "2px",
                        bgcolor: "#2F302C",
                        zIndex: 0
                    }} />

                    {/* Steps */}
                    {steps.map((step, index) => (
                        <Box key={step.label} sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            flex: 1,
                            zIndex: 1,
                            textAlign: "center"
                        }}>
                            {/* Circle */}
                            <Box sx={{
                                width: 44,
                                height: 44,
                                borderRadius: "50%",
                                bgcolor: "#2F302C",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "16px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                mb: 1.5,
                                flexShrink: 0
                            }}>
                                {index + 1}
                            </Box>
                            {/* Label */}
                            <Typography sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "11px",
                                fontWeight: 600,
                                color: "#2F302C",
                                textTransform: "uppercase"
                            }}>
                                {step.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 3, md: 6, lg: 8 }, pb: 8 }}>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.5fr 1fr" }, gap: 4 }}>
                    {/* Left Column - Form */}
                    <Box>
                        <Typography sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#2F302C",
                            textTransform: "uppercase",
                            mb: 1.5
                        }}>
                            Your Information
                        </Typography>
                        <Typography sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "13px",
                            color: "#9F9F9F",
                            mb: 3
                        }}>
                            Add your name, phone number and address.
                        </Typography>

                        <Box component="form" sx={{ display: "grid", gap: 2 }}>
                            {/* First Name / Last Name */}
                            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                                <TextField placeholder="Your first name" variant="outlined" sx={inputStyles} />
                                <TextField placeholder="Your last name" variant="outlined" sx={inputStyles} />
                            </Box>

                            {/* Email / Phone */}
                            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                                <TextField placeholder="Your email" variant="outlined" sx={inputStyles} />
                                <TextField placeholder="Phone number" variant="outlined" sx={inputStyles} />
                            </Box>

                            {/* Country / City / ZIP */}
                            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" }, gap: 2 }}>
                                <TextField placeholder="Country" variant="outlined" sx={inputStyles} />
                                <TextField placeholder="City" variant="outlined" sx={inputStyles} />
                                <TextField placeholder="ZIP Code" variant="outlined" sx={inputStyles} />
                            </Box>

                            {/* Address */}
                            <TextField placeholder="Address details" variant="outlined" sx={inputStyles} />
                        </Box>
                    </Box>

                    {/* Right Column - Order Summary */}
                    <Box sx={{ bgcolor: "#F9F9F9", p: 3, borderRadius: "4px", height: "fit-content" }}>
                        <Typography sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#2F302C",
                            textTransform: "uppercase",
                            mb: 2.5
                        }}>
                            Your Order
                        </Typography>

                        {/* Products */}
                        <Box sx={{ display: "grid", gap: 2, mb: 3, maxHeight: "300px", overflowY: "auto" }}>
                            {cartItems.map((item) => (
                                <Box key={item.id} sx={{
                                    display: "flex",
                                    gap: 2,
                                    alignItems: "flex-start"
                                }}>
                                    {item.image && (
                                        <Box sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: "4px",
                                            overflow: "hidden",
                                            flexShrink: 0,
                                            bgcolor: "#E0E0E0"
                                        }}>
                                            <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        </Box>
                                    )}
                                    <Box sx={{ flex: 1 }}>
                                        <Typography sx={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            color: "#2F302C",
                                            textTransform: "uppercase",
                                            mb: 0.5
                                        }}>
                                            {item.name}
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "11px",
                                            color: "#9F9F9F"
                                        }}>
                                            {item.quantity} Items
                                        </Typography>
                                    </Box>
                                    <Typography sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        color: "#2F302C",
                                        flexShrink: 0
                                    }}>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        {/* Pricing */}
                        <Box sx={{ mb: 2.5 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#2F302C"
                                }}>
                                    Subtotal
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#2F302C",
                                    fontWeight: 600
                                }}>
                                    ${cartTotal.toFixed(2)}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#2F302C"
                                }}>
                                    Shipping
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#2F302C"
                                }}>
                                    -
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#2F302C"
                                }}>
                                    Price
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#2F302C",
                                    fontWeight: 600
                                }}>
                                    ${cartTotal.toFixed(2)}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#2F302C"
                                }}>
                                    Discount 10%
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#E74C3C",
                                    fontWeight: 600
                                }}>
                                    -${discount.toFixed(2)}
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        {/* Total */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                            <Typography sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                fontWeight: 700,
                                color: "#2F302C"
                            }}>
                                Total Price
                            </Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#E74C3C"
                            }}>
                                ${finalTotal.toFixed(2)}
                            </Typography>
                        </Box>

                        {/* Button */}
                        <Button
                            component={Link}
                            to="/shipping"
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: "#2F302C",
                                py: 1.5,
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 700,
                                fontSize: "11px",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                "&:hover": {
                                    bgcolor: "#000000"
                                }
                            }}
                        >
                            Continue to Shipping
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Why Choose Us Section */}
            <WhyChoseUs />

            <Footer />
        </Box>
    );
};

export default CustomerInformation;
