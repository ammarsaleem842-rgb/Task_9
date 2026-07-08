import { Box, Typography } from "@mui/material";
const TrustedBy = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "bolder",
                        fontSize: "32px",
                        lineHeight: "60px",
                        letterSpacing: "0",
                    }}
                >
                    TRUSTED BY
                </Typography>
                <Box sx={{ display: "flex", gap: "3em" }}>
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\AspenIcon.png"
                        alt=""
                    />
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\crop&highlightIcon.png"
                        alt=""
                    />
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\NetIcon.png"
                        alt=""
                    />
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\missiIcon.png"
                        alt=""
                    />
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\pepperMintIcon.png"
                        alt=""
                    />
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\pixelLabIcon.png"
                        alt=""
                    />
                </Box>
                <Box sx={{ display: "flex", gap: "3em" }}>
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\netIcon.png"
                        alt=""
                    />
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\pixelLabIcon.png"
                        alt=""
                    />
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\pepperMintIcon.png"
                        alt=""
                    />
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\missiIcon.png"
                        alt=""
                    />
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\aspenIcon.png"
                        alt=""
                    />
                    <img
                        style={{ height: "150px", width: "150px" }}
                        src="assets\crop&highlightIcon.png"
                        alt=""
                    />
                </Box>
            </Box>
        </>
    );
};
export default TrustedBy;