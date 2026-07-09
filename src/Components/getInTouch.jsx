import { Box, Typography, Button, InputBase } from "@mui/material";
import sofaImg from "../../assets/sofa.png";

const GetInTouch = () => {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: "60px", md: "80px" },
                px: { xs: "24px", md: "60px", lg: "100px" },
                bgcolor: "#F9F9F9",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: "40px", md: "80px" },
                maxWidth: "1400px",
                margin: "0 auto",
                position: "relative",
                overflow: "visible",
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <Box
                    component="img"
                    src={sofaImg}
                    alt="Get in touch sofa setup"
                    sx={{
                        width: "100%",
                        maxWidth: "540px",
                        height: "auto",
                        objectFit: "contain",
                    }}
                />
            </Box>
            <Box
                sx={{
                    flex: 1,
                    maxWidth: "500px",
                    width: "100%",
                }}
            >
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "28px", md: "34px" },
                        color: "#2F302C",
                        mb: "16px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                    }}
                >
                    Get In Touch
                </Typography>

                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#707070",
                        lineHeight: 1.5,
                        mb: "40px",
                    }}
                >
                    We'd love to hear from you: connect with us for a seamless shopping experience and personalized assistance.
                </Typography>
                <Box
                    component="form"
                    onSubmit={(e) => e.preventDefault()}
                    sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "16px",
                        width: "100%",
                    }}
                >
                    <InputBase
                        placeholder="Your E-mail"
                        type="email"
                        required
                        sx={{
                            flex: 1,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "14px",
                            color: "#2F302C",
                            borderBottom: "1px solid #D3D3D3",
                            pb: "8px",
                            "& input::placeholder": {
                                color: "#8C8C8C",
                                opacity: 1,
                            },
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            bgcolor: "#2F302C",
                            color: "#FFFFFF",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "13px",
                            fontWeight: 500,
                            textTransform: "none",
                            borderRadius: "0px",
                            px: "36px",
                            py: "12px",
                            boxShadow: "none",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                bgcolor: "#1A1B19",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Subcribes
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default GetInTouch;