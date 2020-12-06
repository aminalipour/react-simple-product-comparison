import {SET_COMPARE_DATA, SET_PRODUCTS_DATA, TOGGLE_LOADING} from "./types";
import store from "../store";

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

export const toggleToCompareTable = (product) => dispatch => {
    let currentCompareTable = store.getState().product.compareData;
    const ids = Object.keys(currentCompareTable);
    if (ids.includes(product.id)){
        //Remove from compare table
        delete currentCompareTable[product.id]
    } else {
        //Add to compare table
        currentCompareTable[product.id] = product
    }
    dispatch({
        type: SET_COMPARE_DATA,
        payload: currentCompareTable
    })
};
