import React from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import Dashboard from "./Dashboard";
import SignIn from "./SignIn";

export const DashboardRoute = "/Dashboard";

class Routing extends React.Component {
    render() {
        return (
            <SignIn>
                <Route path={DashboardRoute} component={Dashboard} />
            </SignIn>
        );
    }
}
export default withRouter(Routing);