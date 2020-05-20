import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import {Page1, Page2, Page3} from './Page';
import ReduxComponent from './ReduxComponent';
import FormComponent from './FormComponent'

export default function App() {
    return (
        <div>
            <p>hey</p>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
            <Link to="/page3">Page3</Link>
            <Switch>
                <Route path="/page1">{Page1}</Route>
                <Route path="/page2">{Page2}</Route>
                <Route path="/page3">{Page3}</Route>
            </Switch>
            <ReduxComponent />
            <FormComponent />
        </div>
    )
}
