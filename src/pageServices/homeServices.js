import async from "async";
import * as WebService from '../services/webService';
import * as actionTypes from "../constants/actionTypes";

const homeData = (data) => ({
    type: actionTypes.GET_HOME_DATA,
    payload: data
});

export const getHomeDataInit = (dispatch) => {
    return new Promise((resolve,failure)=>{
        async.series([
            (cb) => {
                WebService.getHomeData()
                    .then((res) => {
                        if (res.data) {
                            cb(null,res.data);
                        }
                    })
                    .catch((err) => {
                        //handle errors in here
                    })
            }
        ],(err,result)=>{
            dispatch(homeData(result[0]));
            resolve(result);
        });
    });


};