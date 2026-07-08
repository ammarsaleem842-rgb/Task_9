import NavBar from "../Components/navBar"
import ViewMoreLink from "../Components/catagoriesBanner"
import Hero from "../Components/hero"
import TrustedBy from "../Components/trustedBy"
import WhyChoseUs from "../Components/whyChoseUs"
import CustomerReviews from "../Components/customerReviews"
import CustomerServices from "../Components/customerServices"
import Footer from "../Components/footer"

const HomeaPage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ViewMoreLink />
            <TrustedBy />
            <WhyChoseUs />
            <CustomerReviews />
            <CustomerServices />
            <Footer />
        </>
    )
}
export default HomeaPage