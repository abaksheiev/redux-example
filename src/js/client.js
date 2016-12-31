/*********************************************************************
 * Created by Anton Baksheiev on 30.12.2016.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import Layout from "./components/Layout"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
        <Layout />
    </Provider>, app)