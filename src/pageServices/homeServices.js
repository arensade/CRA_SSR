import async from "async";
import * as WebService from '../services/webService';
import * as actionTypes from "../constants/actionTypes";
import * as Actions from './../actions/index';

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
            dispatch(Actions.homeData(result[0]));
            resolve(result);
        });
    });


};