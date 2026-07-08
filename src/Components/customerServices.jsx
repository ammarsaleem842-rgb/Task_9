import { Box, Divider, Typography } from "@mui/material"

const CustomerServices = () => {
    return (
        <>
            <Divider sx={{
                mx: '100px'
            }} />

            <Box sx={{
                mx: '20px',
                py: '50px',
                display: 'flex',
                justifyContent: 'space-evenly',
                borderTop: '1px solid #D4D4D4'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <Typography sx={{
                        color: '#2F302C',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}>CUSTOMER SERVICE</Typography>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        listStyle: 'none'
                    }}>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Help & FAQs</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Return & Refund</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Shipping Policy</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Customs and Taxes</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Customers’s Reviews</li>
                    </ul>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <Typography sx={{
                        color: '#2F302C',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}>COMPANY</Typography>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        listStyle: 'none'
                    }}>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>About Japan with love</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Contact Us</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Special Deals & Offers</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Terms of Service</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Privacy Policy</li>
                    </ul>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <Typography sx={{
                        color: '#2F302C',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}>HELP CENTER</Typography>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        listStyle: 'none'
                    }}>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Order Information</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Shipping Options</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>International Shipping</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Payment Options</li>
                    </ul>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <Typography sx={{
                        color: '#2F302C',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}>RETURN & WARRANTLY</Typography>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        listStyle: 'none'
                    }}>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Returns & Exchange Policy</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Returns Center</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Warranty Policy</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Warranty Registration</li>
                        <li style={{
                            color: '#7E7F7C',
                            fontSize: '16px'
                        }}>Warranty Repair Center</li>
                    </ul>
                </Box>
            </Box>
            <Divider sx={{
                mx: '100px'
            }} />
        </>
    )
}
export default CustomerServices