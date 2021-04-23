import React from 'react';
import ReactDOM from 'react-dom';
import Main from './page';
import 'antd/dist/antd.css'
import netlifyIdentity from "netlify-identity-widget";

const url = "https://soundcloud-manager.netlify.app";

window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
netlifyIdentity.init({locale : 'fr'});

const main = <Main/>


ReactDOM.render(main, document.getElementById('root'));
