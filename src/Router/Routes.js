import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../App';
import AppChild from '../AppChild';
import AppChild2 from '../AppChild2';

const Routes = (props) => {
    return (
        <Router {...props}>
            <Route path="/" component={App}>
                <IndexRoute component={AppChild} />
                <Route path="/example" component={AppChild2} />
            </Route>
        </Router>
    );
}

export default Routes;
