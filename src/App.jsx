import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";


const App = () => {
  return (
    <div className="bg-slate-800">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Projects></Projects>
    </div>
  );
};

export default App;