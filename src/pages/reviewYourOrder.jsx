import { Box, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../Components/navBar";
import Footer from "../Components/footer";
import { useCart } from "../hooks/useCart";
import CustomerServices from "../Components/customerServices";
import WhyChoseUs from "../Components/whyChoseUs";

const ReviewYourOrder = () => {
    const { cartItems, cartTotal } = useCart();
    const shipping = 0;
    const discount = 125;
    const priceTotal = cartTotal;
    const finalTotal = cartTotal - discount;

    const steps = [
        { label: "CART", description: "Review all your product and edit the number.", icon: "🛍️" },
        { label: "CUSTOMER INFORMATION", description: "Add your name, phone number and address.", icon: "⚙️" },
        { label: "SHIPPING & PAYMENT", description: "With many payment method, included yours.", icon: "📦" },
        { label: "REVIEW", description: "View all your information before the confirmation.", icon: "👁️" },
    ];

    return (
        <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh" }}>
            <NavBar />

            {/* Header Section */}
            <Box sx={{ bgcolor: "#FFFFFF", py: { xs: 4, md: 6 }, px: { xs: 3, md: 6 }, textAlign: "center" }}>
                <Typography component="h1" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: { xs: "24px", md: "36px" }, fontWeight: 700, color: "#2F302C", textTransform: "uppercase", mb: 1 }}>
                    Review and Confirmation
                </Typography>
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#9F9F9F", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    LOOKBACK ONE MORE TIME TO CONFIRM YOUR ADDRESS AND ALL YOUR PRODUCTS
                </Typography>
            </Box>

            {/* Progress Steps */}
            <Box sx={{ px: { xs: 3, md: 6, lg: 8 }, py: 6 }}>
                <Box sx={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 6 }}>
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
                            {/* Circle Icon */}
                            <Box sx={{
                                width: 48,
                                height: 48,
                                borderRadius: "50%",
                                bgcolor: "#2F302C",
                                color: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "24px",
                                mb: 2,
                                flexShrink: 0
                            }}>
                                {step.icon}
                            </Box>
                            {/* Label and Description */}
                            <Typography sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#2F302C",
                                textTransform: "uppercase",
                                mb: 0.5
                            }}>
                                {step.label}
                            </Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "11px",
                                color: "#9F9F9F",
                                maxWidth: "100px"
                            }}>
                                {step.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={{ px: { xs: 3, md: 6, lg: 8 }, pb: 8 }}>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.5fr 1fr" }, gap: 4 }}>
                    {/* Left Column - Shipping & Payment */}
                    <Box>
                        {/* Shipping Information */}
                        <Box sx={{ mb: 5 }}>
                            <Typography sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#2F302C",
                                textTransform: "uppercase",
                                mb: 2
                            }}>
                                Shipping Information
                            </Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                color: "#9F9F9F",
                                mb: 3
                            }}>
                                Please check below finalize your order
                            </Typography>

                            {/* Shipping Details Box */}
                            <Box sx={{
                                bgcolor: "#2F302C",
                                color: "#FFFFFF",
                                p: 3,
                                borderRadius: "4px",
                                mb: 2
                            }}>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    mb: 2
                                }}>
                                    Jane Cooper
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#E0E0E0",
                                    mb: 1
                                }}>
                                    (603) 555-0123
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    color: "#E0E0E0"
                                }}>
                                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                                </Typography>
                            </Box>

                            {/* Delivery Option */}
                            <Box sx={{
                                bgcolor: "#2F302C",
                                color: "#FFFFFF",
                                p: 3,
                                borderRadius: "4px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Box>
                                    <Typography sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        mb: 1
                                    }}>
                                        FedEx
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "12px",
                                        color: "#E0E0E0"
                                    }}>
                                        Estimated delivery time: Aug 20 - Aug 03
                                    </Typography>
                                </Box>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    color: "#B88E2F"
                                }}>
                                    Free shipping
                                </Typography>
                            </Box>
                        </Box>

                        {/* Payment Method */}
                        <Box>
                            <Typography sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#2F302C",
                                textTransform: "uppercase",
                                mb: 2
                            }}>
                                Payment Method
                            </Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                color: "#9F9F9F",
                                mb: 3
                            }}>
                                Please check below finalize your order
                            </Typography>

                            {/* Credit Card */}
                            <Box sx={{
                                bgcolor: "#F5F5F5",
                                border: "1px solid #E0E0E0",
                                p: 3,
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                                gap: 2
                            }}>
                                <Box sx={{
                                    width: 50,
                                    height: 32,
                                    borderRadius: "4px",
                                    background: "linear-gradient(90deg, #FF5F00 0%, #EB001B 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <Typography sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: 700 }}>MC</Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "#2F302C"
                                    }}>
                                        Credit Card
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "12px",
                                        color: "#9F9F9F"
                                    }}>
                                        **** - Expired 01/2025
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    border: "2px solid #B88E2F",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>
                                    <Box sx={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: "50%",
                                        bgcolor: "#B88E2F"
                                    }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Right Column - Order Summary */}
                    <Box sx={{ bgcolor: "#F9F9F9", p: 4, borderRadius: "4px", height: "fit-content" }}>
                        <Typography sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#2F302C",
                            textTransform: "uppercase",
                            mb: 3
                        }}>
                            Your Order
                        </Typography>

                        {/* Products List */}
                        <Box sx={{ display: "grid", gap: 2, mb: 3, maxHeight: "300px", overflowY: "auto" }}>
                            {cartItems.map((item) => (
                                <Box key={item.id} sx={{
                                    display: "flex",
                                    gap: 2,
                                    alignItems: "flex-start"
                                }}>
                                    {item.image && (
                                        <Box sx={{
                                            width: 60,
                                            height: 60,
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
                                            fontSize: "13px",
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
                                        fontSize: "13px",
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

                        {/* Pricing Summary */}
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    color: "#2F302C"
                                }}>
                                    Subtotal
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    color: "#2F302C",
                                    fontWeight: 600
                                }}>
                                    ${cartTotal.toFixed(2)}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    color: "#2F302C"
                                }}>
                                    Shipping
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    color: "#2F302C"
                                }}>
                                    -
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    color: "#2F302C"
                                }}>
                                    Price
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    color: "#2F302C",
                                    fontWeight: 600
                                }}>
                                    ${priceTotal.toFixed(2)}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    color: "#2F302C"
                                }}>
                                    Discount 10%
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
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
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#2F302C"
                            }}>
                                Total Price
                            </Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "16px",
                                fontWeight: 700,
                                color: "#E74C3C"
                            }}>
                                ${finalTotal.toFixed(2)}
                            </Typography>
                        </Box>

                        {/* Button */}
                        <Button
                            component={Link}
                            to="/tracking"
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: "#2F302C",
                                py: 1.5,
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 700,
                                fontSize: "12px",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                "&:hover": {
                                    bgcolor: "#000000"
                                }
                            }}
                        >
                            Confirm My Order
                        </Button>
                    </Box>
                </Box>
            </Box>

            <WhyChoseUs />
            <CustomerServices />
            <Footer />
        </Box>
    );
};

export default ReviewYourOrder;
