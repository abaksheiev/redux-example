/*********************************************************************
 * Created by Anton Baksheiev on 30.12.2016.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
import {combineReducers } from "redux"

import tweets from "./tweetsReducer.js"
import user from "./userReducer.js"

export default combineReducers({
    tweets,
    user
})