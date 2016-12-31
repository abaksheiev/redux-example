/*********************************************************************
 * Created by Anton Baksheiev on 30.12.2016.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
import axios from "axios";

export function fetchTweets() {
    return function(dispatch) {
        axios.get("http://rest.learncode.academy/api/test123/tweets")
            .then((response) => {
                dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
            })
    }
}

export function addTweet(id, text) {
    return {
        type: 'ADD_TWEET',
        payload: {
            id,
            text,
        },
    }
}

export function updateTweet(id, text) {
    return {
        type: 'UPDATE_TWEET',
        payload: {
            id,
            text,
        },
    }
}

export function deleteTweet(id) {
    return { type: 'DELETE_TWEET', payload: id}
}