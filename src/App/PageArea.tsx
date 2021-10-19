import React from 'react';
import style from './LeftNav.module.scss';
import {  Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import TaskPage from './pages/tasks/TasksPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ClientsPage from './pages/clients/ClientsPage';
import ClientRequestsPage from './pages/client-requests/ClientRequestsPage';

const PageArea = () => {
    return (
        <div className={style.pageArea}>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/tasks" component={TaskPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/clients" component={ClientsPage} />
                <Route path="/client-requests" component={ClientRequestsPage} />
           </Switch>
        </div>
    )
}

export default PageArea
