import React, {Component,} from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import * as ROUTES from "../constants/routePaths";
import HomePage from '../pages/homePage';

class RoutesComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={HomePage}/>
                </Switch>
            </div>
        );
    }
}

export default RoutesComponent;
