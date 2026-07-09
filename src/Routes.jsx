import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import AddCart from "./pages/addCart";
import ProductDetail from "./pages/productDetail";
import Search from "./pages/search";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/addcart" element={<AddCart />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/homepage" element={<HomePage />} />
        </Routes>
    );
};
export default AppRoutes;
