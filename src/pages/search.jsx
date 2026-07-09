import { Box, Typography, Button } from "@mui/material"
import { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import NavBar from "../Components/navBar"
import WhyChoseUs from "../Components/whyChoseUs"
import CustomerServices from "../Components/customerServices"
import Footer from "../Components/footer"
import SearchSidebar from "../Components/searchSidebar"
import SearchResultCard from "../Components/searchResultCard"
import AddProductModal from "../Components/addProductModal"
import { useCart } from "../hooks/useCart.jsx"
import { products as initialProducts } from "../data/products"

const Search = () => {
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get("q") || ""

    const [products, setProducts] = useState(initialProducts)
    const [modalOpen, setModalOpen] = useState(false)
    const [filters, setFilters] = useState({
        category: "",
        priceRange: [0, 3000],
    })
    const { addToCart } = useCart();

    const handleAddProduct = (newProduct) => {
        setProducts((prev) => [...prev, newProduct])
    }

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            // Search query filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase()
                const matchesName = product.name.toLowerCase().includes(query)
                const matchesCategory = product.category.toLowerCase().includes(query)
                if (!matchesName && !matchesCategory) return false
            }

            // Category filter
            if (filters.category) {
                if (product.category.toLowerCase() !== filters.category.toLowerCase()) return false
            }

            // Price range filter
            if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false

            return true
        })
    }, [products, searchQuery, filters])

    return (
        <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh" }}>
            <NavBar />

            {/* Main Content Area with Sidebar */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "40px",
                    px: { xs: "24px", md: "60px", lg: "100px" },
                    py: "60px",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    width: "100%",
                }}
            >
                {/* Sidebar */}
                <Box
                    sx={{
                        flex: "0 0 auto",
                        width: { xs: "100%", md: "260px", lg: "280px" },
                    }}
                >
                    <SearchSidebar filters={filters} onFilterChange={setFilters} />
                </Box>

                {/* Results Area */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    {/* Results Count & Add Product */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: "32px",
                            pb: "20px",
                            borderBottom: "1px solid #F0F0F0",
                            flexWrap: "wrap",
                            gap: "12px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "14px",
                                color: "#9F9F9F",
                            }}
                        >
                            {filteredProducts.length === 0
                                ? "No products found"
                                : `Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? "product" : "products"}`}
                            {searchQuery && (
                                <span> for "<strong style={{ color: "#2F302C" }}>{searchQuery}</strong>"</span>
                            )}
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => setModalOpen(true)}
                            sx={{
                                height: "40px",
                                px: "24px",
                                bgcolor: "#2F302C",
                                color: "#FFFFFF",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                borderRadius: "5px",
                                letterSpacing: "0.5px",
                                boxShadow: "none",
                                "&:hover": {
                                    bgcolor: "#1A1B19",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            + Add Product
                        </Button>
                    </Box>

                    {/* Products Grid */}
                    {filteredProducts.length === 0 ? (
                        <Box sx={{ textAlign: "center", py: "80px" }}>
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "18px",
                                    color: "#9F9F9F",
                                    mb: "12px",
                                }}
                            >
                                No products match your search.
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                    color: "#CCCCCC",
                                }}
                            >
                                Try adjusting your filters or search terms.
                            </Typography>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
                                gap: "24px",
                            }}
                        >
                            {filteredProducts.map((product) => (
                                <SearchResultCard key={product.id} product={product} />
                            ))}
                        </Box>
                    )}

                    {/* Pagination */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "12px",
                            mt: "48px",
                        }}
                    >
                        {[1, 2, 3, "...", 8].map((page, i) => (
                            <Box
                                key={i}
                                sx={{
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "4px",
                                    bgcolor: page === 1 ? "#B88E2F" : "#F0F0F0",
                                    color: page === 1 ? "#FFFFFF" : "#2F302C",
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    "&:hover": {
                                        bgcolor: page === 1 ? "#B88E2F" : "#E0E0E0",
                                    },
                                }}
                            >
                                {page}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Add Product Modal */}
            <AddProductModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onAddProduct={handleAddProduct}
            />

            <WhyChoseUs />
            <CustomerServices />
            <Footer />
        </Box>
    )
}
export default Search