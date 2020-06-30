import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./components/navbar";
import {Detail, HomePage} from "./pages";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route exact path="/detail/:id">
                            <Detail/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
