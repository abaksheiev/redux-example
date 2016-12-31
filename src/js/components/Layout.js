/*********************************************************************
 * Created by Anton Baksheiev on 30.12.2016.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
import React from "react"
import {connect} from "react-redux"

import {fetchUser} from "../actions/userActions"
import {fetchTweets} from "../actions/tweetsActions"
@connect((store)=>{
    "use strict";
    return{
        user:store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets
    };
})

export default class layout extends React.Component{

    componentWillMount(){
        "use strict";
        this.props.dispatch(fetchUser());
    }
    fetchTweets(){
        "use strict";
        this.props.dispatch(fetchTweets());
    }

    render(){
        "use strict";
        const { user, tweets } = this.props;
        console.log(tweets);
        if(!tweets.length){
            return <button onClick={this.fetchTweets.bind(this)}>Load Tweets</button>
        }

        const mappedTweets = tweets.map(tweet => <li> {tweet.text}</li>)
        return <div>
                <h1>{this.props.user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>

    }
}
