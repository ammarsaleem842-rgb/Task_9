import NavBar from "../Components/navBar"
import CatagoriesBanner from "../Components/catagoriesBanner"
import Hero from "../Components/hero"
import TrustedBy from "../Components/trustedBy"
import WhyChoseUs from "../Components/whyChoseUs"
import CustomerReviews from "../Components/customerReviews"
import CustomerServices from "../Components/customerServices"
import Footer from "../Components/footer"

const HomePage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <CatagoriesBanner />
            <TrustedBy />
            <WhyChoseUs />
            <CustomerReviews />
            <CustomerServices />
            <Footer />
        </>
    )
}
export default HomePage
