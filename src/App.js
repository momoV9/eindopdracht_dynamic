import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <nav>
                    <Link to="/">Home</Link> {" "}
                    <Link to="/anime">Anime's</Link> {" "}
                </nav>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/test" component={HomePage} />
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;