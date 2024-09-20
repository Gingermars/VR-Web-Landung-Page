import FeatureSection from "./Components/FeatureSection"
import Footer from "./Components/Footer"
import GameFlow from "./Components/GameFlow"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import Reviews from "./Components/Reviews"

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <GameFlow />
      <Pricing />
      <Reviews />
      <Footer />
      </div>
    </div>
  )
}

export default App