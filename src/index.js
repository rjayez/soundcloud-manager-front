import React from 'react';
import ReactDOM from 'react-dom';
import Main from './page';
import 'antd/dist/antd.css'
import netlifyIdentity from "netlify-identity-widget";

window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
netlifyIdentity.init({locale : 'fr'});

ReactDOM.render(<Main/>, document.getElementById('root'));
