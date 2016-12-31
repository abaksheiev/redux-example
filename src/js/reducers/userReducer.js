/*********************************************************************
 * Created by Anton Baksheiev on 30.12.2016.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
export default function reducer(state={
    user: {
        id: null,
        name: null,
        age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
}, action = null) {

    switch (action.type) {
        case "FETCH_USER":
        {
            return {...state, fetching: true}
        }
        case "FETCH_USER_REJECTED":
        {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_USER_FULFILLED":
        {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        }
    }
   return state
}