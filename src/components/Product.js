import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {toggleToCompareTable} from "../actions/productActions";


class Product extends Component {
    toggleToCompareTable = () => {
        this.props.toggleToCompareTable(this.props.data)
    }


    render() {
        const data = this.props.data;
        const compareData = Object.keys(this.props.compareData);
        return (
            <div className="col-md-4 mt-2 mb-2">
                <div className="card product">
                    <div className="img-container text-center">
                        <div className="layer"/>
                        <img className="card-img-top img-fluid m-auto" style={{maxWidth: "200px", height: '200px'}}
                             src={"/images/"+this.props.image} alt="Card image cap"/>
                        <button onClick={this.toggleToCompareTable} type="button" className={ "btn cmp-btn "  + ( compareData.includes(data.id) ? 'btn-light' : 'btn-outline-light')}>{compareData.includes(data.id) ? 'REMOVE' : 'COMPARE'}</button>
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
    data: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    compareData: PropTypes.object.isRequired,
    toggleToCompareTable: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    compareData: state.product.compareData,
    random: state.product.random,
});
export default connect(mapStateToProps,{toggleToCompareTable})(Product);
