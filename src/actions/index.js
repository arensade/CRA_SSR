import * as WebService from "../services/webservice"
import * as actionTypes from "../constants/actionTypes"

// const layoutData = (data) => ({
//     type: actionTypes.GET_LAYOUT_DATA,
//     payload: data
// });
//
// export const getLayoutData = () =>  dispatch => {
//     WebService.getLayoutData()
//         .then((res)=>{
//             if (res.data.success) {
//                 dispatch(layoutData(res.data.success));
//             }
//         });
// };

const homeData = (data) => ({
    type: actionTypes.GET_HOME_DATA,
    payload: data
});

export const getHomeData = () =>  dispatch => {
    // WebService.getHomeData()
    //     .then((res)=>{
    //         if (res.data.success) {
    //             dispatch(homeData(res.data.success));
    //         }
    //     });
};

// const productsData = (data) => ({
//     type: actionTypes.GET_PRODUCTS_DATA,
//     payload: data
// });
//
// export const getProductsData = () =>  dispatch => {
//     WebService.getProductsData()
//         .then((res)=>{
//             if (res.data.success) {
//                 dispatch(productsData(res.data.success));
//             }
//         });
// };
//
// export const changeLang = (lang) => ({
//     type: actionTypes.CHANGE_LANG,
//     lang: lang
// });
//
// export const submitForm = (values) => dispatch => {
//     return WebService.submitForm(values);
// };
