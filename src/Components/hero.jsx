import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import heroBg from "../../assets/hero.jpg";

const Hero = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: 'auto', md: '520px' }, // Fixes structural stretching
                minHeight: { xs: '320px' },
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left center', // Ensures the chair doesn't get cut off on wide viewports
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                boxSizing: 'border-box',
                // Explicit layouts percentages matching the exact location of the text block
                paddingLeft: { xs: '10%', sm: '48%', md: '52%' },
                paddingRight: { xs: '10%', sm: '5%' },
                py: { xs: 6, sm: 0 }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    maxWidth: '520px',
                }}
            >
                {/* Top Kicker Text */}
                <Typography
                    variant="caption"
                    sx={{
                        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
                        fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: '#555555',
                        textTransform: 'uppercase',
                        mb: 1.5,
                    }}
                >
                    Welcome To Our
                </Typography>

                {/* Main Heading */}
                <Typography
                    component="h1"
                    sx={{
                        fontFamily: '"Montserrat", "Arial Black", sans-serif',
                        fontSize: { xs: '2rem', sm: '2.8rem', md: '4rem' },
                        fontWeight: 800,
                        lineHeight: 0.9, // Tightly compressed line height exactly matching design
                        letterSpacing: '-0.01em',
                        color: '#333333',
                        textTransform: 'uppercase',
                    }}
                >
                    Funiture<br />Gallery
                </Typography>

                {/* Accent Line Divider */}
                <Divider
                    sx={{
                        width: '180px',
                        borderBottomWidth: 1.5,
                        borderColor: '#999999',
                        mt: 3,
                        mb: 3,
                    }}
                />

                {/* Sub-heading */}
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontFamily: '"Montserrat", "Helvetica", sans-serif',
                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: '#444444',
                        textTransform: 'uppercase',
                        mb: 1.5,
                    }}
                >
                    Browse Our Selections
                </Typography>

                {/* Description Paragraph */}
                <Typography
                    variant="body2"
                    sx={{
                        fontFamily: '"Montserrat", "Helvetica", sans-serif',
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                        color: '#888888',
                        lineHeight: 1.6,
                        maxWidth: '360px',
                        letterSpacing: '0.02em'
                    }}
                >
                    Featuring sleek designs and innovative materials that seamlessly blend form and function.
                </Typography>
            </Box>
        </Box>
    );
};

export default Hero;