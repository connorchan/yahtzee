import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SplashScreen from './SplashScreen';
import Rules from './Rules';
import Game from './Game';
import history from '../history';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Header/>
                        <Switch>
                            <Route path="/" exact component={SplashScreen} />
                            <Route path="/game" exact component={Game} />
                            <Route path="/rules" exact component={Rules} />
                        </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;