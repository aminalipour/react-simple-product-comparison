import {SET_COMPARE_DATA, SET_PRODUCTS_DATA, TOGGLE_LOADING} from "../actions/types";

const initialState = {
    products: [],
    isLoading: false,
    compareData: {},
}
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS_DATA:
            return {
                ...state,
                products: action.payload
            };
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case SET_COMPARE_DATA:
            return  {
                ...state,
                compareData: action.payload
            }
        default:
            return state;
    }
}
