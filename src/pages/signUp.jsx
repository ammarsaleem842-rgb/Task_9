import CustomerServices from "../Components/customerServices";
import Footer from "../Components/footer";
import NavBar from "../Components/navBar";
import RegistrationHeader from "../Components/registrationHeader";
import SignUpTextFields from "../Components/SignUpTextFields";
import WhyChoseUs from "../Components/whyChoseUs";

const SignUp = () => {
    return (
        <>
            <NavBar />
            <RegistrationHeader />
            <SignUpTextFields />
            <WhyChoseUs />
            <CustomerServices />
            <Footer />
        </>
    );
};

export default SignUp;