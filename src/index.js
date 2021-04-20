import React from 'react';
import ReactDOM from 'react-dom';
import Main from './page';
import 'antd/dist/antd.css'
import {IdentityContextProvider} from "react-netlify-identity";

const url = "https://soundcloud-manager.netlify.app";

const main =
    <IdentityContextProvider url={url}>
         <Main/>
    </IdentityContextProvider>


ReactDOM.render(main, document.getElementById('root'));
