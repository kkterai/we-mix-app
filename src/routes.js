import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/nav/Navigation';
import App from './App';
import Home from './components/Home';
import AboutPage from './components/about/AboutPage';

import SearchArtist from './containers/SearchArtist';
import Albums from './containers/Albums';
import AlbumVideos from './containers/AlbumVideos';
import LoginPage from './containers/LoginPage';

export default ( 
    <div>
    <Navigation />
        <Route exact path='/' component={App} />
            <Route path='/about' component={AboutPage} />
            <Route path='/login' component={LoginPage} />
            
            <Route path='/home' component={Home}/>
            <Route path='/find_artist' component={SearchArtist} />
                <Switch>
                    <Route path='/results/videos' component={AlbumVideos} />
                    <Route path='/results' component={Albums} />
                </Switch>

    </div>
);