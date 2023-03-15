import {
  Hero,
  Navbar,
  About,
  Tech,
  Works,
  Contact,
  StarsCanvas,
  Footer
} from "./components";

const App = () => {
  return (
    <div className="relative z-0 bg-primary ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-[-2]">
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Tech/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
