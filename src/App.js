import "./App.css";
import react, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import TextForm from "./components/TextForm.js";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Home-Light Mode";
    } else {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils-Home-Dark Mode";
    }
  };

  // Alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <div
          className={`vh-100 vw-100 ${
            mode === "light" ? "theme-light" : "theme-dark"
          }`}
        >
          <Navbar
            title="PP"
            aboutText="About"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/">
              <div className="container my-3">
                  <TextForm
                    showAlert={showAlert}
                    heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces"
                    mode={mode}
                  />
              </div>
            </Route>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
          </Switch>
        </div>
       </Router>
    </>
  );
}
export default App;
