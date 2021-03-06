import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/nav/Navigation';
import Home from './components/home/Home';
import EnsureLoggedIn from './containers/EnsureLoggedIn';
import SearchArtist from './containers/forms/SearchArtist';
import Albums from './containers/Albums';
import AlbumVideos from './containers/AlbumVideos';
import LoginPage from './containers/forms/LoginPage';
import SignUpPage from './containers/forms/SignUpPage';


export default ( 
    <div>
      <Navigation/>
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignUpPage} />

      <EnsureLoggedIn>
        <Route path='/home' component={Home}/>
        <Route path='/find_artist' component={SearchArtist} />
            <Switch>
                <Route path='/results/videos' component={AlbumVideos} />
                <Route path='/results' component={Albums} />
            </Switch>
      </EnsureLoggedIn>
    </div>
);