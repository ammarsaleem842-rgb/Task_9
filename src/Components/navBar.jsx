import { Box, TextField, InputAdornment, Badge, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../hooks/useCart";

const NavBar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const { cartCount } = useCart();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const listItems = ["HOME", "SHOP", 'BLOG', "ABOUT US"]

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
            setMobileMenuOpen(false);
        }
    };

    const handleNavClick = (path) => {
        navigate(path);
        setMobileMenuOpen(false);
    };

    return (
        <Box sx={{
            bgcolor: '#FFFFFF',
            py: { xs: 1.5, md: 0 },
            px: { xs: 2, sm: 3, md: 0 },
            boxShadow: { xs: '0 2px 8px rgba(0,0,0,0.1)', md: 'none' },
            position: { xs: 'sticky', md: 'relative' },
            top: 0,
            zIndex: 1000,
        }}>
            {/* Desktop Navigation */}
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                height: '100px',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                fontFamily: "'Poppins', sans-serif",
            }}>
                <svg width="152" height="32" viewBox="0 0 152 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.626 10.526H47.44V13.28H41.626V10.526ZM41.878 17.6H38.314V5H48.196V7.754H41.878V17.6Z" fill="#2F302C" />
                    <path d="M56.7568 17.852C54.8968 17.852 53.4448 17.342 52.4008 16.322C51.3568 15.302 50.8348 13.856 50.8348 11.984V5H54.3988V11.876C54.3988 12.956 54.6088 13.73 55.0288 14.198C55.4608 14.666 56.0488 14.9 56.7928 14.9C57.5368 14.9 58.1188 14.666 58.5388 14.198C58.9588 13.73 59.1688 12.956 59.1688 11.876V5H62.6788V11.984C62.6788 13.856 62.1568 15.302 61.1128 16.322C60.0688 17.342 58.6168 17.852 56.7568 17.852Z" fill="#2F302C" />
                    <path d="M66.1732 17.6V5H71.9332C73.0852 5 74.0752 5.186 74.9032 5.558C75.7432 5.93 76.3912 6.47 76.8472 7.178C77.3032 7.874 77.5312 8.702 77.5312 9.662C77.5312 10.61 77.3032 11.432 76.8472 12.128C76.3912 12.812 75.7432 13.34 74.9032 13.712C74.0752 14.072 73.0852 14.252 71.9332 14.252H68.1532L69.7372 12.758V17.6H66.1732ZM73.9672 17.6L70.8352 13.01H74.6332L77.7832 17.6H73.9672ZM69.7372 13.136L68.1532 11.498H71.7172C72.4612 11.498 73.0132 11.336 73.3732 11.012C73.7452 10.688 73.9312 10.238 73.9312 9.662C73.9312 9.074 73.7452 8.618 73.3732 8.294C73.0132 7.97 72.4612 7.808 71.7172 7.808H68.1532L69.7372 6.17V13.136Z" fill="#2F302C" />
                    <path d="M80.5774 17.6V5H83.5114L90.4594 13.388H89.0734V5H92.5654V17.6H89.6314L82.6834 9.212H84.0694V17.6H80.5774Z" fill="#2F302C" />
                    <path d="M96.1594 17.6V5H99.7234V17.6H96.1594Z" fill="#2F302C" />
                    <path d="M106.021 17.6V7.826H102.151V5H113.437V7.826H109.585V17.6H106.021Z" fill="#2F302C" />
                    <path d="M121.465 17.852C119.605 17.852 118.153 17.342 117.109 16.322C116.065 15.302 115.543 13.856 115.543 11.984V5H119.107V11.876C119.107 12.956 119.317 13.73 119.737 14.198C120.169 14.666 120.757 14.9 121.501 14.9C122.245 14.9 122.827 14.666 123.247 14.198C123.667 13.73 123.877 12.956 123.877 11.876V5H127.387V11.984C127.387 13.856 126.865 15.302 125.821 16.322C124.777 17.342 123.325 17.852 121.465 17.852Z" fill="#2F302C" />
                    <path d="M130.882 17.6V5H136.642C137.794 5 138.784 5.186 139.612 5.558C140.452 5.93 141.1 6.47 141.556 7.178C142.012 7.874 142.24 8.702 142.24 9.662C142.24 10.61 142.012 11.432 141.556 12.128C141.1 12.812 140.452 13.34 139.612 13.712C138.784 14.072 137.794 14.252 136.642 14.252H132.862L134.446 12.758V17.6H130.882ZM138.676 17.6L135.544 13.01H139.342L142.492 17.6H138.676ZM134.446 13.136L132.862 11.498H136.426C137.17 11.498 137.722 11.336 138.082 11.012C138.454 10.688 138.64 10.238 138.64 9.662C138.64 9.074 138.454 8.618 138.082 8.294C137.722 7.97 137.17 7.808 136.426 7.808H132.862L134.446 6.17V13.136Z" fill="#2F302C" />
                </svg>

                <TextField
                    variant="filled"
                    placeholder="Search something"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchSubmit}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "#2F302C", height: "16px", width: '16px' }} />
                                </InputAdornment>
                            ),
                            disableUnderline: true,
                        },
                    }}
                    sx={{
                        width: { sm: "200px", md: "264px" },
                        maxWidth: "600px",
                        display: 'flex',
                        alignItems: 'center',
                        alignContent: 'center',
                        "& .MuiInputBase-root": {
                            backgroundColor: "transparent !important",
                            paddingLeft: 0,
                            borderRadius: 0,
                            borderBottom: "1px solid #CCCCCC",
                            "&:before, &:after": {
                                borderBottom: "none !important"
                            },
                            "&:hover:not(.Mui-disabled):before": {
                                borderBottom: "none !important"
                            },
                        },
                        "& .MuiInputBase-input": {
                            fontSize: "16px",
                            color: "#757575",
                            paddingLeft: "8px",
                            paddingBottom: "4px",
                            "&::placeholder": {
                                color: "#757575",
                                opacity: 1,
                            },
                        },
                    }}
                />
                <Box>
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        gap: '20px',
                        padding: 0,
                        margin: 0,
                    }}>
                        {listItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={
                                        item === "HOME" ? "/homepage" :
                                        item === "SHOP" ? "/search" :
                                        item === "BLOG" ? "#" :
                                        item === "ABOUT US" ? "#" : "#"
                                    }
                                    style={{
                                        textDecoration: 'none',
                                        color: '#2F302C',
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Box>

                <Box>
                    <ul style={{
                        display: 'flex',
                        gap: '20px',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        alignItems: 'center',
                    }}>
                        <li>
                            <Link
                                to="/homepage"
                                style={{
                                    textDecoration: 'none',
                                    color: '#2F302C',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                }}
                            >
                                LOVE
                            </Link>
                        </li>
                        <li>
                            <Badge badgeContent={cartCount} color="primary" sx={{
                                "& .MuiBadge-badge": {
                                    bgcolor: "#B88E2F",
                                    color: "#FFFFFF",
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 600,
                                }
                            }}>
                                <Link
                                    to="/addcart"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#2F302C',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <ShoppingCartIcon sx={{ fontSize: "24px" }} />
                                </Link>
                            </Badge>
                        </li>
                    </ul>
                </Box>
            </Box>

            {/* Mobile Navigation */}
            <Box sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column',
                gap: 2,
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <svg width="120" height="26" viewBox="0 0 152 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.626 10.526H47.44V13.28H41.626V10.526ZM41.878 17.6H38.314V5H48.196V7.754H41.878V17.6Z" fill="#2F302C" />
                        <path d="M56.7568 17.852C54.8968 17.852 53.4448 17.342 52.4008 16.322C51.3568 15.302 50.8348 13.856 50.8348 11.984V5H54.3988V11.876C54.3988 12.956 54.6088 13.73 55.0288 14.198C55.4608 14.666 56.0488 14.9 56.7928 14.9C57.5368 14.9 58.1188 14.666 58.5388 14.198C58.9588 13.73 59.1688 12.956 59.1688 11.876V5H62.6788V11.984C62.6788 13.856 62.1568 15.302 61.1128 16.322C60.0688 17.342 58.6168 17.852 56.7568 17.852Z" fill="#2F302C" />
                    </svg>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <Badge badgeContent={cartCount} color="primary" sx={{
                            "& .MuiBadge-badge": {
                                bgcolor: "#B88E2F",
                                color: "#FFFFFF",
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 600,
                            }
                        }}>
                            <Link
                                to="/addcart"
                                style={{
                                    textDecoration: 'none',
                                    color: '#2F302C',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <ShoppingCartIcon sx={{ fontSize: "20px" }} />
                            </Link>
                        </Badge>
                        <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)} sx={{ color: '#2F302C', padding: 0 }}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Box>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                        py: 2,
                        borderTop: '1px solid #E0E0E0',
                    }}>
                        <TextField
                            variant="standard"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearchSubmit}
                            fullWidth
                            sx={{
                                "& .MuiInput-underline:before": {
                                    borderBottomColor: "#D9D9D9",
                                },
                                "& .MuiInputBase-input": {
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                },
                            }}
                        />
                        {listItems.map((item, index) => (
                            <Link
                                key={index}
                                to={
                                    item === "HOME" ? "/homepage" :
                                    item === "SHOP" ? "/search" : "#"
                                }
                                onClick={() => {
                                    const path = item === "HOME" ? "/homepage" : item === "SHOP" ? "/search" : "#";
                                    handleNavClick(path);
                                }}
                                style={{
                                    textDecoration: 'none',
                                    color: '#2F302C',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    py: 1,
                                    borderBottom: '1px solid #F0F0F0',
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            to="/homepage"
                            onClick={() => handleNavClick("/homepage")}
                            style={{
                                textDecoration: 'none',
                                color: '#2F302C',
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "14px",
                                fontWeight: 500,
                                py: 1,
                            }}
                        >
                            LOVE
                        </Link>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default NavBar