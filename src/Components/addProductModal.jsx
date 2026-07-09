import { Box, Typography, TextField, Button, Modal, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState, useRef } from "react"

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "480px" },
    bgcolor: "#FFFFFF",
    borderRadius: "12px",
    boxShadow: "0px 20px 60px rgba(0,0,0,0.15)",
    p: "36px",
    outline: "none",
}

const AddProductModal = ({ open, onClose, onAddProduct }) => {
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productImage, setProductImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const fileInputRef = useRef(null)

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setProductImage(file)
            const reader = new FileReader()
            reader.onload = (event) => {
                setImagePreview(event.target.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleRemoveImage = () => {
        setProductImage(null)
        setImagePreview(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const handleSubmit = () => {
        if (!productName.trim() || !productPrice || !productImage) return

        const newProduct = {
            id: Date.now(),
            name: productName.trim(),
            price: parseFloat(productPrice),
            image: imagePreview,
            rating: 5,
            reviews: 0,
            category: "Custom",
        }

        onAddProduct(newProduct)
        handleClose()
    }

    const handleClose = () => {
        setProductName("")
        setProductPrice("")
        setProductImage(null)
        setImagePreview(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
        onClose()
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                {/* Header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "28px" }}>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#2F302C",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Add Product
                    </Typography>
                    <IconButton onClick={handleClose} size="small" sx={{ color: "#9F9F9F", "&:hover": { color: "#2F302C" } }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Image Upload */}
                <Box sx={{ mb: "24px" }}>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#9F9F9F",
                            mb: "10px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Product Image
                    </Typography>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                        id="product-image-upload"
                    />
                    {imagePreview ? (
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "200px",
                                borderRadius: "8px",
                                overflow: "hidden",
                                bgcolor: "#F7F7F7",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                component="img"
                                src={imagePreview}
                                alt="Product preview"
                                sx={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                }}
                            />
                            <IconButton
                                onClick={handleRemoveImage}
                                size="small"
                                sx={{
                                    position: "absolute",
                                    top: "8px",
                                    right: "8px",
                                    bgcolor: "rgba(0,0,0,0.5)",
                                    color: "#FFFFFF",
                                    "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                                }}
                            >
                                <CloseIcon sx={{ fontSize: "16px" }} />
                            </IconButton>
                        </Box>
                    ) : (
                        <Box
                            component="label"
                            htmlFor="product-image-upload"
                            sx={{
                                width: "100%",
                                height: "200px",
                                borderRadius: "8px",
                                border: "2px dashed #E0E0E0",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                bgcolor: "#FAFAFA",
                                transition: "all 0.2s",
                                "&:hover": {
                                    borderColor: "#B88E2F",
                                    bgcolor: "#FFFDF5",
                                },
                            }}
                        >
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#9F9F9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 8L12 3L7 8" stroke="#9F9F9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 3V15" stroke="#9F9F9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <Typography
                                sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    color: "#9F9F9F",
                                    mt: "12px",
                                }}
                            >
                                Click to upload product image
                            </Typography>
                        </Box>
                    )}
                </Box>

                {/* Product Name */}
                <Box sx={{ mb: "20px" }}>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#9F9F9F",
                            mb: "8px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Product Name
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        variant="outlined"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "14px",
                                borderRadius: "6px",
                                "& fieldset": {
                                    borderColor: "#E0E0E0",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#B88E2F",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#2F302C",
                                },
                            },
                            "& input::placeholder": {
                                color: "#9F9F9F",
                                opacity: 1,
                            },
                        }}
                    />
                </Box>

                {/* Product Price */}
                <Box sx={{ mb: "32px" }}>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#9F9F9F",
                            mb: "8px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Price ($)
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="0.00"
                        type="number"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        variant="outlined"
                        inputProps={{ min: 0, step: 0.01 }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "14px",
                                borderRadius: "6px",
                                "& fieldset": {
                                    borderColor: "#E0E0E0",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#B88E2F",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#2F302C",
                                },
                            },
                            "& input::placeholder": {
                                color: "#9F9F9F",
                                opacity: 1,
                            },
                        }}
                    />
                </Box>

                {/* Add Button */}
                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={!productName.trim() || !productPrice || !productImage}
                    sx={{
                        height: "48px",
                        bgcolor: "#2F302C",
                        color: "#FFFFFF",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        borderRadius: "6px",
                        letterSpacing: "1px",
                        boxShadow: "none",
                        "&:hover": {
                            bgcolor: "#1A1B19",
                            boxShadow: "none",
                        },
                        "&.Mui-disabled": {
                            bgcolor: "#E0E0E0",
                            color: "#9F9F9F",
                        },
                    }}
                >
                    Add Product
                </Button>
            </Box>
        </Modal>
    )
}

export default AddProductModal