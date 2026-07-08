import { Box, Typography } from "@mui/material";

const RegistrationHeader = () => {
    return (
        <Box
            sx={{
                py: "60px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                bgcolor: "#FFFFFF",
                borderBottom: "1px solid #F0F0F0",
            }}
        >
            <Typography
                component="h1"
                sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "24px", md: "32px" },
                    color: "#2F302C",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    textAlign: "center",
                }}
            >
                Register to Furnitur
            </Typography>
            <Typography
                sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#9F9F9F",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    textAlign: "center",
                }}
            >
                Get monthly voucher with just one click!
            </Typography>
        </Box>
    );
};

export default RegistrationHeader;