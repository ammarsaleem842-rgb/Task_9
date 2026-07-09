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

    const listItems = ["HOME", "SHOP", "BLOG", "ABOUT US"]

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
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
            boxShadow: { xs: '0 1px 3px rgba(0,0,0,0.08)', md: '0 1px 2px rgba(0,0,0,0.04)' },
            position: { xs: 'sticky', md: 'relative' },
            top: 0,
            zIndex: 1000,
        }}>
            {/* Desktop Navigation */}
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                height: '80px',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '1400px',
                mx: 'auto',
                fontFamily: "'Poppins', sans-serif",
            }}>
                {/* Logo */}
                <svg width="140" height="28" viewBox="0 0 152 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.626 10.526H47.44V13.28H41.626V10.526ZM41.878 17.6H38.314V5H48.196V7.754H41.878V17.6Z" fill="#2F302C" />
                    <path d="M56.7568 17.852C54.8968 17.852 53.4448 17.342 52.4008 16.322C51.3568 15.302 50.8348 13.856 50.8348 11.984V5H54.3988V11.876C54.3988 12.956 54.6088 13.73 55.0288 14.198C55.4608 14.666 56.0488 14.9 56.7928 14.9C57.5368 14.9 58.1188 14.666 58.5388 14.198C58.9588 13.73 59.1688 12.956 59.1688 11.876V5H62.6788V11.984C62.6788 13.856 62.1568 15.302 61.1128 16.322C60.0688 17.342 58.6168 17.852 56.7568 17.852Z" fill="#2F302C" />
                </svg>

                {/* Navigation Links */}
                <Box>
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        gap: '32px',
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
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Box>

                {/* Icons */}
                <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <TextField
                        variant="standard"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearchSubmit}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: "#666666", fontSize: "18px" }} />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{
                            width: "180px",
                            "& .MuiInput-underline:before": {
                                borderBottomColor: "#E0E0E0",
                            },
                            "& .MuiInputBase-input": {
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                color: "#666666",
                                "&::placeholder": {
                                    color: "#999999",
                                },
                            },
                        }}
                    />
                    <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <Link
                            to="/homepage"
                            style={{
                                textDecoration: 'none',
                                color: '#2F302C',
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                            }}
                        >
                            LOVE
                        </Link>
                        <Badge badgeContent={cartCount} color="primary" sx={{
                            "& .MuiBadge-badge": {
                                bgcolor: "#B88E2F",
                                color: "#FFFFFF",
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 600,
                                fontSize: "11px",
                                height: "18px",
                                minWidth: "18px",
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
                    </Box>
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
                    py: 1,
                }}>
                    <svg width="120" height="24" viewBox="0 0 152 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                fontSize: "11px",
                                height: "18px",
                                minWidth: "18px",
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
                        <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)} sx={{ color: '#2F302C', padding: 0.5 }}>
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
                        borderTop: '1px solid #E8E8E8',
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
                                    borderBottomColor: "#E0E0E0",
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
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    py: 1,
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default NavBar