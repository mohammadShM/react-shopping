import React from "react";
import "./App.css";
import "./font/font/font.css";
import "../src/font/font/font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/navbar";
import { DetailPage, HomePage, CartPage } from "./pages";
// noinspection ES6CheckImport
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Navbar />
            <div style={{ marginTop: "80px" }} />
            <div className="container">
               <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/detail/:id">
                     <DetailPage />
                  </Route>
                  <Route exact path="/cart">
                     <CartPage />
                  </Route>
               </Switch>
            </div>
            <div className="mb-5" />
         </div>
      </BrowserRouter>
   );
}

export default App;
