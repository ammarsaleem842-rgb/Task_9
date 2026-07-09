import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Newsletter = () => {
    return (
        <Box
            component="section"
            sx={{
                py: "80px",
                px: { xs: "24px", md: "60px", lg: "100px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
                bgcolor: "#2F302C",
                backgroundImage: "linear-gradient(135deg, #2F302C 0%, #3d3e3a 100%)",
            }}
        >
            {}
            <Box sx={{ textAlign: "center", maxWidth: "600px" }}>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#B88E2F",
                        letterSpacing: "2px",
                        mb: "12px",
                        textTransform: "uppercase",
                    }}
                >
                    Stay Connected
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "24px", md: "32px" },
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        mb: "16px",
                    }}
                >
                    Subscribe to Our Newsletter
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#CCCCCC",
                        lineHeight: 1.7,
                    }}
                >
                    Get the latest updates on new products and upcoming sales directly to your inbox.
                    Be the first to know about exclusive offers!
                </Typography>
            </Box>

            {}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: "12px",
                    width: "100%",
                    maxWidth: "520px",
                }}
            >
                <TextField
                    variant="filled"
                    placeholder="Enter your email address"
                    fullWidth
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon sx={{ color: "#9F9F9F", fontSize: "20px" }} />
                                </InputAdornment>
                            ),
                            disableUnderline: true,
                        },
                    }}
                    sx={{
                        flex: 1,
                        "& .MuiInputBase-root": {
                            backgroundColor: "#FFFFFF",
                            borderRadius: "4px",
                            height: "50px",
                            "&:hover": {
                                backgroundColor: "#FFFFFF",
                            },
                        },
                        "& .MuiInputBase-input": {
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "14px",
                            color: "#2F302C",
                            paddingLeft: "8px",
                            "&::placeholder": {
                                color: "#9F9F9F",
                                opacity: 1,
                            },
                        },
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        height: "50px",
                        px: "36px",
                        bgcolor: "#B88E2F",
                        color: "#FFFFFF",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        borderRadius: "4px",
                        letterSpacing: "1px",
                        whiteSpace: "nowrap",
                        boxShadow: "none",
                        "&:hover": {
                            bgcolor: "#A07828",
                            boxShadow: "none",
                        },
                    }}
                >
                    Subscribe
                </Button>
            </Box>
        </Box>
    );
};

export default Newsletter;