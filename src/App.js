import React from 'react';
import './App.css';
import '../src/font/font/font.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./components/navbar";
import {DetailPage, HomePage} from "./pages";
// noinspection ES6CheckImport
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div  style={{marginTop: '80px'}}/>
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route exact path="/detail/:id">
                            <DetailPage/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
            <div className="mb-5"/>
        </div>
    );
}

export default App;
