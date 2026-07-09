import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import AddCart from "./pages/addCart";
import ProductDetail from "./pages/productDetail";
import Search from "./pages/search";
import CustomerInformation from "./pages/customerInformation";
import ShippingAndPayment from "./pages/shippingAndPayment";
import ReviewYourOrder from "./pages/reviewYourOrder";
import Tracking from "./pages/tracking";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/addcart" element={<AddCart />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/customerinfo" element={<CustomerInformation />} />
            <Route path="/shipping" element={<ShippingAndPayment />} />
            <Route path="/revieworder" element={<ReviewYourOrder />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/homepage" element={<HomePage />} />
        </Routes>
    );
};
export default AppRoutes;
