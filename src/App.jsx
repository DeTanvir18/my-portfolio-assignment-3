import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


const App = () => {
  return (
    <div className="bg-slate-800">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default App;