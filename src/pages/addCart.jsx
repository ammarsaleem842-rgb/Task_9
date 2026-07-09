import { Box, Typography, Button, Divider, IconButton, TextField, Select, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import CloseIcon from "@mui/icons-material/Close"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import VisibilityIcon from '@mui/icons-material/Visibility'
import NavBar from "../Components/navBar"
import WhyChoseUs from "../Components/whyChoseUs"
import BestCombined from "../Components/bestCombined"
import CustomerServices from "../Components/customerServices"
import Footer from "../Components/footer"
import { useCart } from "../hooks/useCart.jsx"

const AddCart = () => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()
    const subtotal = cartTotal

    return (
        <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh" }}>
            <NavBar />

            {}
            <Box sx={{ bgcolor: "#FFFFFF", py: "28px", textAlign: "center" }}>
                <Typography component="h1" sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: { xs: "22px", md: "28px" }, color: "#2F302C", textTransform: "uppercase", letterSpacing: "0.5px", mb: "6px" }}>
                    Shoping Cart
                </Typography>
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#9F9F9F", mb: 3 }}>
                    THIS IS YOUR CART BASED ON WHAT YOU WANTED TO BY
                </Typography>

                {}
                <Box sx={{ maxWidth: 900, mx: 'auto', mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ flex: 1, height: 2, bgcolor: '#EDEDED' }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: -3 }}>
                        <Box sx={{ textAlign: 'center', width: 200 }}>
                            <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: '#000', color: '#fff', mx: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <LockOutlinedIcon sx={{ fontSize: 20 }} />
                            </Box>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, mt: 1 }}>CART</Typography>
                            <Typography sx={{ fontSize: 11, color: '#9F9F9F' }}>Review all your product and edit their number.</Typography>
                        </Box>

                        <Box sx={{ textAlign: 'center', width: 200 }}>
                            <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: '#F5F5F5', color: '#2F302C', mx: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <AccountCircleIcon sx={{ fontSize: 20 }} />
                            </Box>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, mt: 1 }}>CUSTOMER INFORMATION</Typography>
                            <Typography sx={{ fontSize: 11, color: '#9F9F9F' }}>Add your name, phone number and address.</Typography>
                        </Box>

                        <Box sx={{ textAlign: 'center', width: 200 }}>
                            <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: '#F5F5F5', color: '#2F302C', mx: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <LocalShippingIcon sx={{ fontSize: 20 }} />
                            </Box>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, mt: 1 }}>SHIPPING & PAYMENT</Typography>
                            <Typography sx={{ fontSize: 11, color: '#9F9F9F' }}>With many payment method, included yours.</Typography>
                        </Box>

                        <Box sx={{ textAlign: 'center', width: 200 }}>
                            <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: '#F5F5F5', color: '#2F302C', mx: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <VisibilityIcon sx={{ fontSize: 20 }} />
                            </Box>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, mt: 1 }}>REVIEW</Typography>
                            <Typography sx={{ fontSize: 11, color: '#9F9F9F' }}>View all your information before the confirmation.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    gap: "40px",
                    px: { xs: "24px", md: "60px", lg: "100px" },
                    py: "60px",
                }}
            >
                {}
                <Box sx={{ flex: 2 }}>
                    {}
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
                        <Box key={item.id} sx={{ display: 'grid', gridTemplateColumns: '150px 1fr 120px', gap: 3, alignItems: 'center', py: 3, borderBottom: '1px solid #F0F0F0' }}>
                            <Box>
                                <Box component="img" src={item.image} alt={item.name} sx={{ width: 120, height: 120, objectFit: 'contain', bgcolor: '#F7F7F7', p: 2 }} />
                            </Box>

                            <Box>
                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, color: '#2F302C' }}>{item.name}</Typography>
                                <Typography sx={{ color: '#9F9F9F', fontSize: 13, mt: 1 }}>★★★★★</Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                                    <Box>
                                        <Typography sx={{ fontSize: 13, color: '#9F9F9F' }}>Type:</Typography>
                                        <Select size="small" defaultValue="Long" sx={{ mt: 1, minWidth: 120 }}>
                                            <MenuItem value="Long">Long</MenuItem>
                                            <MenuItem value="Short">Short</MenuItem>
                                        </Select>
                                    </Box>

                                    <Box>
                                        <Typography sx={{ fontSize: 13, color: '#9F9F9F' }}>Color:</Typography>
                                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                                            <Box sx={{ width: 16, height: 16, bgcolor: '#2F77F6', borderRadius: 1 }} />
                                            <Box sx={{ width: 16, height: 16, bgcolor: '#2F2F2F', borderRadius: 1 }} />
                                            <Box sx={{ width: 16, height: 16, bgcolor: '#A3A3A3', borderRadius: 1 }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                                <Typography sx={{ color: '#2F302C', fontWeight: 700, fontSize: 16 }}>${item.price.toFixed(2)}</Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                    <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)} sx={{ border: '1px solid #E0E0E0', width: 32, height: 32 }}>
                                        <RemoveIcon sx={{ fontSize: 18 }} />
                                    </IconButton>
                                    <Typography sx={{ minWidth: 28, textAlign: 'center', fontWeight: 600 }}>{item.quantity}</Typography>
                                    <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)} sx={{ border: '1px solid #E0E0E0', width: 32, height: 32 }}>
                                        <AddIcon sx={{ fontSize: 18 }} />
                                    </IconButton>
                                </Box>

                                <Typography sx={{ color: '#9F9F9F', fontSize: 13, mt: 1 }}>${(item.price * item.quantity).toFixed(2)}</Typography>

                                <IconButton onClick={() => removeFromCart(item.id)} sx={{ mt: 1 }}>
                                    <CloseIcon sx={{ color: '#9F9F9F' }} />
                                </IconButton>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {}
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
                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "20px", color: "#2F302C", textTransform: "uppercase", mb: "24px", textAlign: 'center' }}>Order Summary</Typography>

                    <Typography sx={{ fontSize: 13, color: '#9F9F9F', mb: 2 }}>Apply your monthly voucher to get more discount!</Typography>
                    <TextField placeholder="Your voucher code" size="small" fullWidth sx={{ mb: 3 }} />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#2F302C" }}>Price</Typography>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#9F9F9F" }}>${subtotal.toFixed(2)}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#2F302C" }}>Discount 10%</Typography>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#9F9F9F" }}>-${(subtotal * 0.1).toFixed(2)}</Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 700, color: "#2F302C" }}>Total Price</Typography>
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 700, color: "#D93A3A" }}>${(subtotal - subtotal * 0.1).toFixed(2)}</Typography>
                    </Box>

                    <TextField placeholder="Write your notes here.." multiline rows={3} fullWidth sx={{ mb: 3 }} />

                    <Button component={Link} to="/customerinfo" variant="contained" fullWidth sx={{ height: 48, bgcolor: '#000', color: '#fff', fontFamily: "'Poppins', sans-serif", fontWeight: 700, textTransform: 'uppercase', boxShadow: 'none', '&:hover': { bgcolor: '#2F302C' } }}>PROCEED TO CHECKOUT</Button>
                </Box>
            </Box>

            <WhyChoseUs />
            <BestCombined />
            <CustomerServices />
            <Footer />
        </Box>
    )
}
export default AddCart