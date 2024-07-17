import "./App.css";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Info from "./components/Info.jsx";
import Interest from "./components/Interests.jsx";

function App() {
  return (
    <div className="page">
      <div className="card">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
