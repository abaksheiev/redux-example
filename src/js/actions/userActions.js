/*********************************************************************
 * Created by Anton Baksheiev on 30.12.2016.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
export function fetchUser() {
    return {
        type: "FETCH_USER_FULFILLED",
        payload: {
            name: "Will",
            age: 35,
        }
    }
}

export function setUserName(name) {
    return {
        type: 'SET_USER_NAME',
        payload: name,
    }
}

export function setUserAge(age) {
    return {
        type: 'SET_USER_AGE',
        payload: age,
    }
}