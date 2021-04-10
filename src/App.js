import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import Upload from './pages/Upload';

const App = () => {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route path="/upload" component={Upload} />
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>
    );
}

export default App;
