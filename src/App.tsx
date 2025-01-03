import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import {MainPage} from "./pages/main-page.tsx";

function App() {

  return (
      <div className="mainDiv">
          <div className="darkerDiv">
              <div className={"defaultDiv"}>
                  <Router>
                      <Routes>
                          <Route path="/" element={<MainPage/>} />
                      </Routes>
                  </Router>
              </div>

          </div>

    </div>

  )
}

export default App
