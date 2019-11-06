import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Footer from '../../components/Footer/';

import CDNPlanning from '../../views/CDNPlanning/'; 

class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props} />
                    <main className="main">
                        <Breadcrumb />
                        <Container fluid>
                            <Switch>
                                <Route path="/CDNPlanning" name="CDNPlanning" component={CDNPlanning} />
                                <Redirect from="/" to="/CDNPlanning" />
                            </Switch>
                        </Container>
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Full;
