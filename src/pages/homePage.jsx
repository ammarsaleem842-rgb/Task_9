import NavBar from "../Components/navBar"
import Hero from "../Components/hero"
import FeaturedProducts from "../Components/featuredProducts"
import CatagoriesBanner from "../Components/catagoriesBanner"
import WhyChoseUs from "../Components/whyChoseUs"
import TrustedBy from "../Components/trustedBy"
// import PromotionBanner from "../Components/promotionBanner"
import CustomerReviews from "../Components/customerReviews"
import BestSeller from "../Components/bestSeller"
import Blog from "../Components/blog"
import InstagramGallery from "../Components/instagramGallery"
import Newsletter from "../Components/newsletter"
import CustomerServices from "../Components/customerServices"
import Footer from "../Components/footer"
import GetInTouch from "../Components/getInTouch"

const HomePage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <FeaturedProducts />
            <CatagoriesBanner />
            <WhyChoseUs />
            <TrustedBy />
            <GetInTouch />
            <CustomerReviews />
            <BestSeller />
            <Blog />
            <InstagramGallery />
            <Newsletter />
            <CustomerServices />
            <Footer />
        </>
    )
}
export default HomePage