import * as actionTypes from "../constants/actionTypes"

export const homeData = (data) => ({
    type: actionTypes.GET_HOME_DATA,
    payload: data
});
