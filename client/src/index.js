import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as RouterWrapper } from 'react-router-dom'
import Routes from "./Routes";

ReactDOM.render(
    <RouterWrapper>
        <Routes />
    </RouterWrapper>,
    document.querySelector('#root')
)