import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import SignUp from "./pages/signUp";
import AddCart from "./pages/addCart";
import ProductDetail from "./pages/productDetail";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/addcart" element={<AddCart />} />
            <Route path="/productdetail" element={<ProductDetail />} />
        </Routes>
    );
};
export default AppRoutes;
