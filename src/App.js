import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Advisory from "./Components/Advisory";
import Agriculture from "./Components/Agriculture";
import Contact from "./Components/Contact";
import Energy from "./Components/Energy";
import Estate from "./Components/Estate";
import Evaluation from "./Components/Evaluation";
import Footer from "./Components/Footer";
import History from "./Components/History";
import Home from "./Components/Home";
import Investment from "./Components/Investment";
import "./Components/Navbar1";
import Navbar1 from "./Components/Navbar1";
import Principal from "./Components/Principal";
import Strategic from "./Components/Strategic";
import Vision from "./Components/Vision";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app__navbar">
          <Navbar1 />
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/history" component={History}></Route>
          <Route exact path="/vision" component={Vision}></Route>
          <Route exact path="/advisory" component={Advisory}></Route>
          <Route exact path="/investment" component={Investment}></Route>
          <Route exact path="/principal" component={Principal}></Route>
          <Route exact path="/agriculture" component={Agriculture}></Route>
          <Route exact path="/energy" component={Energy}></Route>
          <Route exact path="/estate" component={Estate}></Route>
          <Route exact path="/strategic" component={Strategic}></Route>
          <Route exact path="/evaluation" component={Evaluation}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
