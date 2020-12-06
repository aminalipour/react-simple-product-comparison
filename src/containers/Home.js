import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchProducts} from "../actions/productActions";
import Products from "../components/Products";

class Home extends Component {
    componentWillMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Products products={this.props.products}/>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    fetchProducts:PropTypes.func.isRequired,
    products:PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    products: state.product.products
})
export default connect(mapStateToProps,{fetchProducts})(Home);
