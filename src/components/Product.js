import React, {Component} from 'react';
import PropTypes from 'prop-types';

const images = [
    'blackberry.png',
    'cherry.png',
    'kiwi.png',
    'peach.png'
];

class Product extends Component {
    render() {
        const data = this.props.data;
        const image = images[Math.floor(Math.random() * images.length)];
        return (
            <div className="col-md-4 mt-2 mb-2">
                <div className="card product">
                    <div className="img-container text-center">
                        <div className="layer"/>
                        <img className="card-img-top img-fluid m-auto" style={{maxWidth: "200px", height: '200px'}}
                             src={"/images/" + image} alt="Card image cap"/>
                        <button type="button" className="btn btn-outline-light cmp-btn">COMPARE</button>
                    </div>

                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{data.employee_name}</h5>
                            <div className="price text-success">
                                ${data.employee_salary}
                            </div>
                        </div>
                        <p className="card-text">
                            Age: {data.employee_age}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    data: PropTypes.object.isRequired
};

export default Product;
