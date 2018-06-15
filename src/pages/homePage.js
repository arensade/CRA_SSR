import React, {Component} from 'react';
import PageService from '../pageServices/pageService';
import * as ROUTES from "../constants/routePaths";
import {connect} from "react-redux";


class HomePage extends Component{
    pageService = null;

    componentDidMount() {
        this.pageService = new PageService(ROUTES.HOME);
        this.pageService.getData(this.props.dispatch);
    }

    render(){

        return (
            <div>
                <p>HOME PAGE</p>

                {
                    this.props.HomeData && this.props.HomeData.items && this.props.HomeData.items.map((homeDataVal,homeDataInx)=>

                        <div>
                            <p>{JSON.stringify(homeDataVal)}</p>
                        </div>
                    )
                }
            </div>

        )
    }
}

// export default HomePage;

const mapStateToProps = (state) =>({

    HomeData:(state.homeReducer && state.homeReducer.success) ? state.homeReducer.success : []

});

export  default connect(mapStateToProps)(HomePage);