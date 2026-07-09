import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";

const BestCombined = () => {
    const navigate = useNavigate();
    const items = products.slice(0, 3);

    return (
        <Box component="section" sx={{ py: 8, px: { xs: 3, md: 8, lg: 12 }, textAlign: 'center' }}>
            <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1, textTransform: 'uppercase' }}>BEST COMBINED WITH:</Typography>
            <Typography sx={{ fontSize: 12, color: '#9F9F9F', mb: 4 }}>THESE COMBINATION WILL MAKE YOUR HOME TONE - SUB - TONE</Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4, alignItems: 'start' }}>
                {items.map((p) => (
                    <Box key={p.id} sx={{ cursor: 'pointer' }} onClick={() => navigate(`/productdetail/${p.id}`)}>
                        <Box sx={{ bgcolor: '#F7F7F7', height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                        <Typography sx={{ fontSize: 12, fontWeight: 600, mt: 2, textTransform: 'uppercase', color: '#2F302C' }}>{p.name}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
                            <Rating value={p.rating} readOnly size="small" sx={{ color: '#000' }} />
                        </Box>
                        <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#2F302C', mt: 1 }}>${p.price.toFixed(2)}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BestCombined;
