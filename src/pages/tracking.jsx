import { Box, Typography, Button, Divider, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../Components/navBar";
import Footer from "../Components/footer";
import { useCart } from "../hooks/useCart";
import CustomerServices from "../Components/customerServices";

const timeline = [
    { title: "Order confirmed by Seller & Furnitur system", date: "16 Jul 2020 - 08:00 PM" },
    { title: "Package received on DHL New York city", date: "16 Jul 2020 - 08:00 PM" },
    { title: "Package send from DHL New York city", date: "16 Jul 2020 - 08:00 PM" },
    { title: "Package arrive on DHL Washington DC", date: "16 Jul 2020 - 08:00 PM" },
    { title: "Package will send to your home by our courier (James)", date: "16 Jul 2020 - 08:00 PM", active: true },
];

const Tracking = () => {
    const { cartItems, cartTotal } = useCart();
    const shipping = 0; // screenshot shows shipping blank, set 0 for clarity
    const discount = Math.round(cartTotal * 0.1 * 100) / 100; // 10% discount
    const total = Math.max(0, cartTotal + shipping - discount);

    return (
        <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh" }}>
            <NavBar />

            <Box sx={{ bgcolor: "#FFFFFF", py: { xs: 6, md: 8 } }}>
                <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 4 } }}>
                    <Typography component="h1" sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: { xs: 20, md: 24 }, textAlign: "center", letterSpacing: 1, color: "#2F302C" }}>
                        ORDER TRACKING
                    </Typography>
                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", color: "#9F9F9F", textAlign: "center", mb: 4 }}>
                        REVIEW YOUR ORDER AND UPDATE SHIPPING PROCESS
                    </Typography>

                    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" }, gap: 4 }}>
                        {/* Left: Timeline */}
                        <Box>
                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: "#2F302C", mb: 1 }}>SHIPPING IN</Typography>
                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#9F9F9F", mb: 3 }}>Will sent to 2972 Westheimer Rd. Santa Ana, Illinois 85486.</Typography>

                            <Box sx={{ display: "flex", gap: 3 }}>
                                <Box sx={{ width: 40, display: "flex", justifyContent: "center" }}>
                                    <Box sx={{ position: "relative", width: 2, bgcolor: "transparent" }}>
                                        {/* vertical line created by spacing between dots */}
                                    </Box>
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    {timeline.map((item, i) => (
                                        <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 3 }}>
                                            <Box sx={{ position: "relative", width: 24, display: "flex", justifyContent: "center" }}>
                                                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: item.active ? "#2F302C" : "#E0E0E0", mt: 0.5 }} />
                                                {i < timeline.length - 1 && (
                                                    <Box sx={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 2, height: "calc(100% - 12px)", bgcolor: "#EDEDED" }} />
                                                )}
                                            </Box>

                                            <Box>
                                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: item.active ? "#2F302C" : "#2F302C" }}>{item.title}</Typography>
                                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#9F9F9F" }}>{item.date}</Typography>
                                            </Box>
                                        </Box>
                                    ))}

                                    <Divider sx={{ my: 3 }} />

                                    <Box sx={{ bgcolor: "#FFFFFF", border: "1px solid #F0F0F0", p: 3, borderRadius: 1 }}>
                                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: "#2F302C", mb: 1 }}>Have been trouble on your package?</Typography>
                                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#9F9F9F", mb: 2 }}>You can call us. We can help solve your problem</Typography>
                                        <Button variant="outlined" sx={{ borderColor: "#E0E0E0", color: "#2F302C", textTransform: "none" }}>Support me</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        {/* Right: Order summary */}
                        <Box>
                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: "#2F302C", mb: 1 }}>YOUR ORDER</Typography>
                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#9F9F9F", mb: 2 }}>Review all the products you want to buy</Typography>

                            <Box sx={{ bgcolor: "#FFFFFF", border: "1px solid #F0F0F0", borderRadius: 1, p: 2 }}>
                                {cartItems.length === 0 ? (
                                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", color: "#9F9F9F" }}>No items in your order.</Typography>
                                ) : (
                                    cartItems.map((item) => (
                                        <Box key={item.id} sx={{ display: "flex", gap: 2, alignItems: "center", borderBottom: "1px solid #F5F5F5", py: 1.5 }}>
                                            <Avatar variant="rounded" src={item.image} sx={{ width: 56, height: 56, bgcolor: "#F7F7F7" }} />
                                            <Box sx={{ flex: 1 }}>
                                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, color: "#2F302C" }}>{item.name}</Typography>
                                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#9F9F9F" }}>{item.quantity} item{item.quantity > 1 ? "s" : ""}</Typography>
                                            </Box>
                                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: "#2F302C" }}>${(item.price * item.quantity).toFixed(2)}</Typography>
                                        </Box>
                                    ))
                                )}

                                <Box sx={{ mt: 2 }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#2F302C" }}>Subtotal</Typography>
                                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#9F9F9F" }}>${cartTotal.toFixed(2)}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#2F302C" }}>Shipping</Typography>
                                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#9F9F9F" }}>{shipping === 0 ? "-" : `$${shipping.toFixed(2)}`}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#2F302C" }}>Discount 10%</Typography>
                                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#9F9F9F" }}>-${discount.toFixed(2)}</Typography>
                                    </Box>

                                    <Divider sx={{ my: 1.5 }} />

                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: "#2F302C" }}>Total Price</Typography>
                                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: "#D32F2F" }}>${total.toFixed(2)}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>

            <CustomerServices />
            <Footer />
        </Box>
    );
};

export default Tracking;
