/*********************************************************************
 * Created by Anton Baksheiev on 30.12.2016.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
import {applyMiddleware, createStore} from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)