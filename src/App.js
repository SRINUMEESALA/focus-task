import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css"
import NotFound from "./components/NotFound"
import Home from "./components/Home.js";
import Login from "./components/Login";






document.title = "Focus";

const App = () => <>
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
</>


export default App




