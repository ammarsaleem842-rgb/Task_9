import { Box, Divider, Typography } from "@mui/material"

const CustomerServices = () => {
    return (
        <Box component="section" sx={{ bgcolor: "#FFFFFF" }}>
            <Divider sx={{ mx: { xs: "20px", md: "100px" } }} />

            <Box sx={{
                mx: { xs: "20px", md: "60px", lg: "100px" },
                py: '50px',
                display: 'flex',
                flexWrap: "wrap",
                justifyContent: 'space-evenly',
                gap: "40px",
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    minWidth: "160px",
                }}>
                    <Typography sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#2F302C',
                        fontSize: '18px',
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                    }}>CUSTOMER SERVICE</Typography>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                    }}>
                        {["Help & FAQs", "Return & Refund", "Shipping Policy", "Customs and Taxes", "Customers's Reviews"].map((item, i) => (
                            <li key={i} style={{
                                color: '#7E7F7C',
                                fontSize: '14px',
                                fontFamily: "'Poppins', sans-serif",
                                cursor: "pointer",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#2F302C"}
                            onMouseLeave={(e) => e.target.style.color = "#7E7F7C"}
                            >{item}</li>
                        ))}
                    </ul>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    minWidth: "160px",
                }}>
                    <Typography sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#2F302C',
                        fontSize: '18px',
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                    }}>COMPANY</Typography>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                    }}>
                        {["About Japan with love", "Contact Us", "Special Deals & Offers", "Terms of Service", "Privacy Policy"].map((item, i) => (
                            <li key={i} style={{
                                color: '#7E7F7C',
                                fontSize: '14px',
                                fontFamily: "'Poppins', sans-serif",
                                cursor: "pointer",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#2F302C"}
                            onMouseLeave={(e) => e.target.style.color = "#7E7F7C"}
                            >{item}</li>
                        ))}
                    </ul>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    minWidth: "160px",
                }}>
                    <Typography sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#2F302C',
                        fontSize: '18px',
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                    }}>HELP CENTER</Typography>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                    }}>
                        {["Order Information", "Shipping Options", "International Shipping", "Payment Options"].map((item, i) => (
                            <li key={i} style={{
                                color: '#7E7F7C',
                                fontSize: '14px',
                                fontFamily: "'Poppins', sans-serif",
                                cursor: "pointer",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#2F302C"}
                            onMouseLeave={(e) => e.target.style.color = "#7E7F7C"}
                            >{item}</li>
                        ))}
                    </ul>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    minWidth: "160px",
                }}>
                    <Typography sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#2F302C',
                        fontSize: '18px',
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                    }}>RETURN & WARRANTY</Typography>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                    }}>
                        {["Returns & Exchange Policy", "Returns Center", "Warranty Policy", "Warranty Registration", "Warranty Repair Center"].map((item, i) => (
                            <li key={i} style={{
                                color: '#7E7F7C',
                                fontSize: '14px',
                                fontFamily: "'Poppins', sans-serif",
                                cursor: "pointer",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#2F302C"}
                            onMouseLeave={(e) => e.target.style.color = "#7E7F7C"}
                            >{item}</li>
                        ))}
                    </ul>
                </Box>
            </Box>
            <Divider sx={{ mx: { xs: "20px", md: "100px" } }} />
        </Box>
    )
}
export default CustomerServices