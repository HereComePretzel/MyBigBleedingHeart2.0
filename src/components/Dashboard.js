import React from 'react';
import { Switch, Route } from 'react-router-dom'
import DashboardContainer from './DashboardContainer'
import NoMatch from './NoMatch'
import NavHeader from './NavBar'


const Dashboard = () => {
    return(
        <div>
            <NavHeader />
            <Switch>
                <Route exact path='/dashboard' component={ DashboardContainer } />
                <Route path='*' component={ NoMatch } />
            </Switch>
        </div>
    )
}

export default Dashboard