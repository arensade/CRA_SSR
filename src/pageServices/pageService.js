import * as actionTypes from "../constants/actionTypes";
import * as ROUTES from '../constants/routePaths';
import {
    getHomeDataInit
} from './homeServices';


export default class PageService {
    currentPage = ROUTES.HOME;

    constructor(url){
        this.currentPage = url;
    }

    getData = (dispatch) =>{
        return new Promise((resolve,reject)=>{
            switch (this.currentPage) {
                case ROUTES.HOME:
                    getHomeDataInit(dispatch)
                        .then((res)=>{
                            resolve(res);
                        });
                    break;
                case '':

            }
        });
    }
}