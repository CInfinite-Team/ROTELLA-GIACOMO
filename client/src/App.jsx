import WorkBook2 from "./WorkBook2"
import CustomCursor from './components/CustomCursor.jsx'
import HeroSection from './components/sharedComponents/HeroSection.jsx'
import HomeMobile from './components/Pages/HomeMobile.jsx'
import './components/animations/animations.css'
function App() {


  return (
    <>
    <div className="lg:hidden">
      <HomeMobile />
      </div>
      <div className=" hidden lg:block">
      <CustomCursor />
      <HeroSection/>
      <WorkBook2 />
      </div>
    </>
  )
}

export default App

