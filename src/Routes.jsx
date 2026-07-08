import { Routes, Route } from "react-router-dom";
import HomeaPage from "./pages/homePage";
import SignUp from "./pages/signUp";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/homepage" element={<HomeaPage />} />

        </Routes>
    );
};
export default AppRoutes;