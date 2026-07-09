import { Box, Typography, Slider, Button } from "@mui/material";

const SearchSidebar = ({ filters, onFilterChange }) => {

    const handleCategoryClick = (category) => {
        onFilterChange({
            ...filters,
            category: filters.category === category ? "" : category,
        });
    };

    const handlePriceChange = (event, newValue) => {
        onFilterChange({
            ...filters,
            priceRange: newValue,
        });
    };

    const handleApplyPrice = () => {
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "260px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                fontFamily: "'Poppins', sans-serif",
                color: "#333333",
                backgroundColor: "#ffffff",
                p: 2,
            }}
        >
            {}
            <Box>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        mb: "6px",
                    }}
                >
                    Category
                </Typography>
                <Box sx={{ width: "35px", height: "3px", bgcolor: "#222222", mb: "24px" }} />

                {}
                <Box sx={{ mb: "20px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            pb: "8px",
                            borderBottom: "1px solid #EAEAEA",
                            mb: "12px",
                        }}
                    >
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.5px" }}>
                            FUNITURE
                        </Typography>
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#666" }}>−</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", pl: "2px" }}>
                        {["Chair", "Sofa", "Couch", "Desk", "Lamp"].map((item) => (
                            <Typography
                                key={item}
                                onClick={() => handleCategoryClick(item)}
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    color: filters.category === item ? "#222222" : "#888888",
                                    fontWeight: filters.category === item ? 600 : 400,
                                    cursor: "pointer",
                                    "&:hover": { color: "#222222" },
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                {}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: "10px",
                        borderBottom: "1px solid #EAEAEA",
                        cursor: "pointer",
                    }}
                >
                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.5px" }}>
                        SHIPPING
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: 400, color: "#666" }}>+</Typography>
                </Box>

                {}
                <Box
                    onClick={() => handleCategoryClick("")}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: "10px",
                        borderBottom: "1px solid #EAEAEA",
                        cursor: "pointer",
                    }}
                >
                    <Typography sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "13px",
                        letterSpacing: "0.5px",
                        color: !filters.category ? "#222222" : "#888888",
                    }}>
                        ALL PRODUCT
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: 400, color: "#666" }}>+</Typography>
                </Box>
            </Box>

            {}
            <Box sx={{ mt: "8px" }}>
                <Typography
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        mb: "6px",
                    }}
                >
                    Shop By
                </Typography>
                <Box sx={{ width: "35px", height: "3px", bgcolor: "#222222", mb: "24px" }} />

                {}
                <Box sx={{ mb: "20px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            pb: "8px",
                            borderBottom: "1px solid #EAEAEA",
                            mb: "12px",
                        }}
                    >
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.5px" }}>
                            MATERIALS
                        </Typography>
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#666" }}>−</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            { label: "Bronze", count: "(08)" },
                            { label: "Oak wood", count: "(12)" },
                            { label: "Stainless metal", count: "(36)" },
                            { label: "Titanium", count: "(04)" },
                            { label: "Alloy", count: "(08)" },
                            { label: "Ceramic", count: "(17)" },
                        ].map((item) => (
                            <Box key={item.label} sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#888888" }}>
                                    {item.label}
                                </Typography>
                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#888888" }}>
                                    {item.count}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {}
                <Box sx={{ mb: "20px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            pb: "8px",
                            borderBottom: "1px solid #EAEAEA",
                            mb: "16px",
                        }}
                    >
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.5px" }}>
                            PRICE
                        </Typography>
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#666" }}>−</Typography>
                    </Box>
                    <Box sx={{ px: "4px", mb: "16px" }}>
                        <Slider
                            value={filters.priceRange}
                            onChange={handlePriceChange}
                            min={0}
                            max={3000}
                            sx={{
                                color: "#444444",
                                height: "3px",
                                padding: "13px 0",
                                "& .MuiSlider-thumb": {
                                    width: "8px",
                                    height: "8px",
                                    backgroundColor: "#222222",
                                    border: "none",
                                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                                        boxShadow: "none",
                                    },
                                },
                                "& .MuiSlider-rail": {
                                    backgroundColor: "#EAEAEA",
                                    opacity: 1,
                                },
                                "& .MuiSlider-track": {
                                    backgroundColor: "#444444",
                                    border: "none",
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <Box
                            sx={{
                                flex: 1,
                                height: "32px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#F7F7F7",
                                border: "1px solid #EAEAEA",
                            }}
                        >
                            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#666666" }}>
                                ${filters.priceRange[0]} - ${filters.priceRange[1]}
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            disableElevation
                            onClick={handleApplyPrice}
                            sx={{
                                height: "32px",
                                minWidth: "65px",
                                backgroundColor: "#222222",
                                color: "#ffffff",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "11px",
                                fontWeight: 600,
                                borderRadius: "0px",
                                textTransform: "capitalize",
                                "&:hover": { backgroundColor: "#444444" },
                            }}
                        >
                            Apply
                        </Button>
                    </Box>
                </Box>

                {}
                <Box
                    onClick={() => handleCategoryClick("")}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: "10px",
                        borderBottom: "1px solid #EAEAEA",
                        mb: "12px",
                        cursor: "pointer",
                    }}
                >
                    <Typography sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "13px",
                        letterSpacing: "0.5px",
                        color: !filters.category ? "#222222" : "#888888",
                    }}>
                        ALL PRODUCT
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: 400, color: "#666" }}>+</Typography>
                </Box>

                {}
                <Box sx={{ mb: "20px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            pb: "8px",
                            borderBottom: "1px solid #EAEAEA",
                            mb: "12px",
                        }}
                    >
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.5px" }}>
                            SIZE
                        </Typography>
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#666" }}>−</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                            { label: "S", count: "(08)" },
                            { label: "M", count: "(12)" },
                            { label: "L", count: "(36)" },
                        ].map((item) => (
                            <Box key={item.label} sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#888888" }}>
                                    {item.label}
                                </Typography>
                                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#888888" }}>
                                    {item.count}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {}
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            pb: "8px",
                            borderBottom: "1px solid #EAEAEA",
                            mb: "12px",
                        }}
                    >
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.5px" }}>
                            COMPARE
                        </Typography>
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#666" }}>−</Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "12px",
                            color: "#888888",
                            lineHeight: "1.6",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur, Bibendum iaculis velit dolor id.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SearchSidebar;