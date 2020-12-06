import {SET_PRODUCTS_DATA, TOGGLE_LOADING} from "./types";

export const fetchProducts = () => dispatch => {
    dispatch({
        type: TOGGLE_LOADING,
        payload: true
    })
    fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: SET_PRODUCTS_DATA,
                payload: data.data
            })
            dispatch({
                type: TOGGLE_LOADING,
                payload: false
            })
        });

};
