import React, { Fragment, useEffect, useState } from 'react';
import WithPageView from './Helpers/GoogelAnalytics/WithPageView';

import Layout from './Components/Layouts/Layout';
import NotFound from './Components/Layouts/NotFound';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Index from './Components/Pages/Index/Index';
import Services from './Components/Pages/Services/Services';
import Blog from './Components/Pages/Blog/Blog'
import DetailBlog from './Components/Pages/Blog/DetailBlog'
import Contact from './Components/Pages/Contact/Contact'
import FAQ from './Components/Pages/FAQ/FAQ'

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" component={WithPageView(Index)} exact />
                        <Route path="/about" component={WithPageView(AboutUs)} exact />
                        <Route path="/services" component={WithPageView(Services)} exact />
                        <Route path="/detail-blog" component={WithPageView(DetailBlog)} exact />
                        <Route path="/blog" component={WithPageView(Blog)} exact />
                        <Route path="/contact" component={WithPageView(Contact)} exact />
                        <Route path="/faq" component={WithPageView(FAQ)} exact />
                        <Route path="/404" component={(WithPageView(NotFound))} exact/>
                        <Redirect to="404"/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
