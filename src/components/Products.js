import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Product from "./Product";
const images = [
    'blackberry.png',
    'cherry.png',
    'kiwi.png',
    'peach.png'
];

class Products extends Component {
    render() {
        const {products} = this.props;
        return (
            <React.Fragment>
                {products.map((item, key) => {
                    const image = images[Math.floor(Math.random() * images.length)];
                    return (
                        <Product image={image} data={item} key={key}/>
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
