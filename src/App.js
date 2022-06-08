import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './components/Header'
import Home from "./components/Home";
import About from "./components/About";
import AddEntry from "./components/AddEntry";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <Router>
        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/about" exact element={<About />}/>
            <Route path="/new" exact element={<AddEntry />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
