import { Box, Typography, Link } from "@mui/material";
import Rating from "@mui/material/Rating";

const FeaturedProducts = () => {
    return (
        <>
            <Box
                sx={{
                    mt: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                }}
            >
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
                            fontWeight: "bold",
                            fontSize: "32px",
                            lineHeight: "40px",
                            letterSpacing: 0,
                        }}
                    >
                        FEATURED PRODUCTS
                    </Typography>
                    <Box sx={{ gap: "48px", display: "flex", my: "30px" }}>
                        <Link href="#" underline="none" sx={{ color: "#2F302C" }}>
                            ALL
                        </Link>
                        <Link href="#" underline="none" sx={{ color: "#2F302C" }}>
                            ON SALE
                        </Link>
                        <Link href="#" underline="none" sx={{ color: "#2F302C" }}>
                            SOFA
                        </Link>
                        <Link href="#" underline="none" sx={{ color: "#2F302C" }}>
                            HANGING LIGHT
                        </Link>
                    </Box>
                </Box>

                {/* FIRST ROW */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px",
                    }}
                >
                    {/* Item 1: High Chair (Bottom aligned) */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                height: "400px",
                                width: "300px",
                                mb: "50px",
                                backgroundColor: "#F7F7F7",
                            }}
                        >
                            <img
                                src="assets\hignchair.png"
                                alt="High Chair"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom" }}
                            />
                        </Box>
                        <Typography>URBAN LUX HIGH CHAIR</Typography>
                        <Rating value={5} readOnly sx={{ color: "black" }} />
                        <Typography> $2668.15</Typography>
                    </Box>

                    {/* Item 2: Hanging Light (Top aligned) */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                height: "400px",
                                width: "300px",
                                backgroundColor: "#F7F7F7",
                                mb: "50px", // Restored margin to match row heights uniformly
                            }}
                        >
                            <img
                                src="assets\hanginglight.png"
                                alt="Black Hanging Light"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                            />
                        </Box>
                        <Typography>MORDERN BLACK HANGING LIGHT</Typography>
                        <Rating value={5} readOnly sx={{ color: "black" }} />
                        <Typography> $1595.6</Typography>
                    </Box>

                    {/* Item 3: Metro Table (Center/Right crop aligned) */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                height: "400px",
                                width: "300px",
                                backgroundColor: "#F7F7F7",
                                mb: "50px",
                            }}
                        >
                            <img
                                src="assets\metrotable.png"
                                alt="Metro Table"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                            />
                        </Box>
                        <Typography>METRO FUSION TABLE</Typography>
                        <Rating value={5} readOnly sx={{ color: "black" }} />
                        <Typography> $2238.30</Typography>
                    </Box>
                </Box>

                {/* SECOND ROW */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px",
                        my: "60px",
                    }}
                >
                    {/* Item 4: Desk Lamp (Bottom aligned) */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                height: "400px",
                                width: "300px",
                                backgroundColor: "#F7F7F7",
                                mb: "50px",
                            }}
                        >
                            <img
                                src="assets\penditlight.png"
                                alt="Lumin Desk Lamp"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom" }}
                            />
                        </Box>
                        <Typography>LUMIN DESK LAMP</Typography>
                        <Rating value={5} readOnly sx={{ color: "black" }} />
                        <Typography> $1477.80</Typography>
                    </Box>

                    {/* Item 5: Hanging Clock (Perfect Center aligned) */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                height: "400px",
                                width: "300px",
                                backgroundColor: "#F7F7F7",
                                mb: "50px",
                            }}
                        >
                            <img
                                src="assets\hangingclock.png"
                                alt="Hanging Clock"
                                style={{ width: "100%", height: "100%", objectFit: "contain", padding: "40px" }}
                            />
                        </Box>
                        <Typography>TIMELESS EDGE HANGING CLOCK</Typography>
                        <Rating value={5} readOnly sx={{ color: "black" }} />
                        <Typography> $1071.6</Typography>
                    </Box>

                    {/* Item 6: Pendant Light (Top aligned) */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                height: "400px",
                                width: "300px",
                                mb: "50px",
                                backgroundColor: "#F7F7F7",
                            }}
                        >
                            <img
                                src="assets\desklamp.png"
                                alt="Zenith Pendant Light"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                            />
                        </Box>
                        <Typography>ZENITH PENDANT LIGHT</Typography>
                        <Rating value={5} readOnly sx={{ color: "black" }} />
                        <Typography> $2069.59</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default FeaturedProducts;