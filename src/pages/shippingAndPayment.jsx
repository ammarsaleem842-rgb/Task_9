import { Box, Typography, Button, Divider, TextField, RadioGroup, FormControlLabel, Radio, IconButton } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import { Link } from "react-router-dom";
import NavBar from "../Components/navBar";
import Footer from "../Components/footer";
import WhyChoseUs from "../Components/whyChoseUs";
import { useCart } from "../hooks/useCart.jsx";
import { useState } from "react";

const ShippingAndPayment = () => {
    const { cartItems, cartTotal } = useCart();
    const [selectedShipping, setSelectedShipping] = useState("dhl");
    const [selectedPayment, setSelectedPayment] = useState("credit");
    const discount = 125;
    const finalTotal = cartTotal - discount;

    const inputStyles = {
        width: '100%',
        '& .MuiInputBase-input': {
            fontFamily: "'Poppins', sans-serif",
            fontSize: '13px',
            color: '#2F302C',
            padding: '10px 0'
        },
        '& .MuiInput-underline:before': {
            borderBottom: '1px solid #E8E8E8',
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid #2F302C',
        }
    };

    const shippingOptions = [
        { id: "dhl", name: "DHL Express", description: "Estimated delivery time: Aug 20 - Aug 03", price: "Free Shipping" },
        { id: "fedex", name: "FedEx", description: "Estimated delivery time: Aug 20 - Aug 03", price: "$12.00" },
        { id: "express", name: "Express Expedition", description: "Estimated delivery time: Aug 20 - Aug 03", price: "$31.00" },
        { id: "jne", name: "JNE Express", description: "Estimated delivery time: Aug 20 - Aug 03", price: "$31.00" },
        { id: "pos", name: "POS Indonesia", description: "Estimated delivery time: Aug 20 - Aug 03", price: "$31.00" },
    ];

    const paymentMethods = [
        { id: "credit", name: "Credit Card", description: "We offer a safe and secure online payment via credit card." },
        { id: "paypal", name: "Paypal", description: "Express checkout and secure payments with PayPal." },
    ];

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
                    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
                        <Box sx={{ position: 'absolute', top: 20, left: '6%', right: '6%', height: '2px', bgcolor: '#E9E9E9', zIndex: 0 }} />
                        <Box sx={{ position: 'absolute', top: 20, left: '6%', height: '2px', bgcolor: '#2F302C', width: `${(activeIndex/(steps.length-1))*100}%`, zIndex: 1 }} />

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

            {/* Main Content */}
            <Box sx={{ px: { xs: 3, md: 6, lg: 8 }, pb: 8 }}>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1.5fr 1fr" }, gap: 4 }}>
                    {/* Left Column */}
                    <Box>
                        {/* Shipping Information (selected address) */}
                        <Box sx={{ mb: 4 }}>
                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 700, color: "#2F302C", textTransform: "uppercase", mb: 1 }}>Shipping Information</Typography>
                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#9F9F9F", mb: 2 }}>Please check before you finalize your order</Typography>

                            <Box sx={{ bgcolor: '#2F302C', color: '#fff', borderRadius: 1, p: 3, mb: 3, position: 'relative' }}>
                                <IconButton size="small" sx={{ position: 'absolute', top: 12, right: 12, color: '#fff' }}><EditOutlinedIcon fontSize="small"/></IconButton>
                                <Typography sx={{ fontWeight: 700 }}>Jane Cooper</Typography>
                                <Typography sx={{ fontSize: 13, color: '#D0D0D0', mt: 1 }}>(480) 555-0103</Typography>
                                <Typography sx={{ fontSize: 13, color: '#D0D0D0', mt: 1 }}>2972 Westheimer Rd. Santa Ana, Illinois 85486</Typography>
                                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.08)', my: 2 }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box>
                                        <Typography sx={{ fontWeight: 700 }}>FedEx</Typography>
                                        <Typography sx={{ fontSize: 12, color: '#D0D0D0' }}>Estimated delivery time: Jul 20 - Aug 03</Typography>
                                    </Box>
                                    <Typography sx={{ fontWeight: 700, color: '#fff' }}>Free shipping</Typography>
                                </Box>
                            </Box>

                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 700, color: "#2F302C", textTransform: "uppercase", mb: 1 }}>Shipping Service</Typography>
                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#9F9F9F", mb: 3 }}>Choose one best shipping service across your needs.</Typography>

                            <RadioGroup value={selectedShipping} onChange={(e) => setSelectedShipping(e.target.value)}>
                                {shippingOptions.map((option) => (
                                    <Box key={option.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0, mb: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                                            <FormControlLabel
                                                value={option.id}
                                                control={<Radio sx={{ color: '#2F302C', '&.Mui-checked': { color: '#2F302C' } }} />}
                                                label={
                                                    <Box sx={{ width: '100%' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, bgcolor: selectedShipping === option.id ? '#2F302C' : '#FFF', borderRadius: '4px', border: selectedShipping === option.id ? 'none' : '1px solid #EAEAEA' }}>
                                                            <Box>
                                                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: selectedShipping === option.id ? '#FFFFFF' : '#2F302C' }}>{option.name}</Typography>
                                                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: selectedShipping === option.id ? '#D0D0D0' : '#9F9F9F' }}>{option.description}</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: selectedShipping === option.id ? '#FFFFFF' : '#2F302C' }}>{option.price}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                }
                                            />
                                        </Box>
                                    </Box>
                                ))}
                            </RadioGroup>
                        </Box>

                        {/* Payment Method */}
                        <Box>
                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 700, color: "#2F302C", textTransform: "uppercase", mb: 1 }}>Payment Method</Typography>
                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#9F9F9F", mb: 3 }}>Please check before you finalize your order</Typography>

                            <RadioGroup value={selectedPayment} onChange={(e) => setSelectedPayment(e.target.value)}>
                                {paymentMethods.map((method) => (
                                    <Box key={method.id} sx={{ mb: 2 }}>
                                        <FormControlLabel
                                            value={method.id}
                                            control={<Radio />}
                                            label={
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, bgcolor: selectedPayment === method.id ? '#F5F5F5' : '#FFF', borderRadius: 1, border: '1px solid #EAEAEA' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                        {method.id === 'credit' && <CreditCardIcon sx={{ color: '#B88E2F' }} />}
                                                        <Box>
                                                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: '#2F302C' }}>{method.name}</Typography>
                                                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#9F9F9F' }}>{method.id === 'credit' ? '**** 7282 - Expired 8/2022' : 'Insert your account email of paypal. We will process your payment.'}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <IconButton size="small"><EditOutlinedIcon fontSize="small"/></IconButton>
                                                </Box>
                                            }
                                        />
                                    </Box>
                                ))}
                            </RadioGroup>

                            {/* Payment Form Fields (condensed) */}
                            <Box sx={{ mt: 3 }}>
                                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                                    <TextField placeholder="Jennie" variant="standard" sx={inputStyles} />
                                    <TextField placeholder="Card number" variant="standard" sx={inputStyles} />
                                </Box>
                                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2, mt: 2 }}>
                                    <TextField placeholder="Month" variant="standard" sx={inputStyles} />
                                    <TextField placeholder="Year" variant="standard" sx={inputStyles} />
                                    <TextField placeholder="CVV" variant="standard" sx={inputStyles} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Right Column - Order Summary */}
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
                            to="/revieworder"
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
                            Review Your Order
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

export default ShippingAndPayment;
