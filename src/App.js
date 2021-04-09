import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Upload from './pages/Upload';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/upload" component={Upload} />
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>
    );
}

export default App;
