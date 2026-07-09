import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import heroBg from "../../assets/hero.jpg";

const Hero = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: 'auto', md: '560px' },
                minHeight: { xs: '400px', md: '560px' },
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                boxSizing: 'border-box',
                paddingLeft: { xs: '8%', sm: '48%', md: '53%', lg: '54%' },
                paddingRight: { xs: '8%', sm: '5%' },
                py: { xs: 8, sm: 0 },
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    maxWidth: '560px',
                    width: '100%'
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        color: '#4A4A4A',
                        textTransform: 'uppercase',
                        mb: 1.5,
                    }}
                >
                    Welcome To Our
                </Typography>
                <Typography
                    component="h1"
                    sx={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: { xs: '2.2rem', sm: '3rem', md: '4.2rem', lg: '4.6rem' },
                        fontWeight: 800,
                        lineHeight: 0.95,
                        letterSpacing: '0.02em',
                        color: '#2B2B2B',
                        textTransform: 'uppercase',
                    }}
                >
                    Funiture
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            color: '#525252',
                            fontWeight: 700
                        }}
                    >
                        Gallery
                    </Box>
                </Typography>
                <Divider
                    sx={{
                        width: '210px',
                        borderBottomWidth: '1.5px',
                        borderColor: '#A0A0A0',
                        mt: 2.5,
                        mb: 3,
                    }}
                />
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontFamily: '"Montserrat", "Helvetica", sans-serif',
                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        color: '#3A3A3A',
                        textTransform: 'uppercase',
                        mb: 1.5,
                    }}
                >
                    Browse Our Selections
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontFamily: '"Montserrat", "Helvetica", sans-serif',
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.78rem' },
                        fontWeight: 500,
                        color: '#9A9A9A',
                        lineHeight: 1.5,
                        maxWidth: '380px',
                        letterSpacing: '0.01em'
                    }}
                >
                    Featuring sleek designs and innovative materials that seamlessly blend form and function.
                </Typography>
            </Box>
        </Box>
    );
};

export default Hero;