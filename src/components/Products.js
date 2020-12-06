import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Product from "./Product";

class Products extends Component {
    render() {
        const {products} = this.props;
        return (
            <React.Fragment>
                {products.map((item, key) => {
                    return (
                        <Product data={item} key={key}/>
                    )
                })}
            </React.Fragment>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired
};

export default Products;
