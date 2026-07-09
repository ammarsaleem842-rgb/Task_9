import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../Components/navBar";
import Footer from "../Components/footer";
import WhyChoseUs from "../Components/whyChoseUs";
import { useCart } from "../hooks/useCart.jsx";

const inputStyles = {
    width: "100%",
    '& .MuiInputBase-input': {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '13px',
        color: '#2F302C',
        padding: '10px 0',
    },
    '& .MuiInput-underline:before': {
        borderBottom: '1px solid #E8E8E8',
    },
    '& .MuiInput-underline:after': {
        borderBottom: '2px solid #2F302C',
    },
    '& .MuiInput-root': {
        padding: 0,
    }
};

const CustomerInformation = () => {
    const { cartItems, cartTotal } = useCart();
    const discount = 125;
    const finalTotal = cartTotal - discount;

    const steps = [
        { label: "CART" },
        { label: "CUSTOMER INFORMATION" },
        { label: "SHIPPING & PAYMENT" },
        { label: "REVIEW" },
    ];
    const activeIndex = 2;

    return (
        <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh" }}>
            <NavBar />

            {}
            <Box sx={{ bgcolor: "#FFFFFF", py: { xs: 4, md: 6 }, px: { xs: 3, md: 6 }, textAlign: "center" }}>
                <Typography component="h1" sx={{ fontFamily: "'Poppins', sans-serif", fontSize: { xs: "24px", md: "36px" }, fontWeight: 700, color: "#2F302C", textTransform: "uppercase", mb: 1 }}>
                    Shipping & Payment
                </Typography>
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#9F9F9F", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    CHOOSE THE PAYMENT AND SHIPPING METHOD YOU WANT
                </Typography>
            </Box>

            {}
            <Box sx={{ px: { xs: 3, md: 6, lg: 8 }, py: 5 }}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
                    {}
                    <Box sx={{ position: 'absolute', top: 20, left: '6%', right: '6%', height: '2px', bgcolor: '#E9E9E9', zIndex: 0 }} />
                    {}
                    <Box sx={{ position: 'absolute', top: 20, left: '6%', height: '2px', bgcolor: '#2F302C', width: `${(activeIndex / (steps.length - 1)) * 100}%`, zIndex: 1 }} />

                    {steps.map((step, index) => {
                        const state = index < activeIndex ? 'done' : index === activeIndex ? 'active' : 'future';
                        return (
                            <Box key={step.label} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 2, textAlign: 'center' }}>
                                <Box sx={{ mb: 1.5 }}>
                                    {state === 'done' && (
                                        <Box sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: '#2F302C', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>{index + 1}</Box>
                                    )}
                                    {state === 'active' && (
                                        <Box sx={{ width: 44, height: 44, borderRadius: '50%', border: '2px solid #2F302C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#2F302C' }} />
                                        </Box>
                                    )}
                                    {state === 'future' && (
                                        <Box sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: '#F5F5F5' }} />
                                    )}
                                </Box>
                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 600, color: '#2F302C', textTransform: 'uppercase' }}>{step.label}</Typography>
                                <Typography sx={{ fontSize: 11, color: '#9F9F9F', maxWidth: 140 }}>{index === 0 ? 'Review all your product and edit the number.' : index === 1 ? 'Add your name, phone number and address.' : index === 2 ? 'With many payment method, included yours.' : 'View all your information before the confirmation.'}</Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>

            {}
            <Box sx={{ px: { xs: 3, md: 6, lg: 8 }, pb: 8 }}>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.5fr 1fr" }, gap: 4 }}>
                    {}
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
                            {}
                            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                                <TextField placeholder="Your first name" variant="standard" sx={inputStyles} />
                                <TextField placeholder="Your last name" variant="standard" sx={inputStyles} />
                            </Box>

                            {}
                            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                                <TextField placeholder="Your email" variant="standard" sx={inputStyles} />
                                <TextField placeholder="Phone number" variant="standard" sx={inputStyles} />
                            </Box>

                            {}
                            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" }, gap: 2 }}>
                                <TextField placeholder="Country" variant="standard" sx={inputStyles} />
                                <TextField placeholder="City" variant="standard" sx={inputStyles} />
                                <TextField placeholder="ZIP Code" variant="standard" sx={inputStyles} />
                            </Box>

                            {}
                            <TextField placeholder="Address details" variant="standard" sx={inputStyles} />
                        </Box>
                    </Box>

                    {}
                    <Box sx={{ bgcolor: "#FFFFFF", p: 3, height: "fit-content", borderLeft: '1px solid #EAEAEA', pl: { xs: 0, lg: 6 } }}>
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

                        {}
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

                        {}
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

                        {}
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

                        {}
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

            {}
            <WhyChoseUs />

            <Footer />
        </Box>
    );
};

export default CustomerInformation;
