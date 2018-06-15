import axios from 'axios';
import * as URLS from '../constants/urls';

export const getHomeData = () => {
    return axios.get(`${URLS.BASE_URL+URLS.API}repositories?sort=stars&q=alisch-ng2`);
}