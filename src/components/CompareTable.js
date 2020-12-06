import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class CompareTable extends Component {
    render() {
        const compareData = this.props.compareData;
        const ids = Object.keys(compareData)
        return (
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th/>
                                {ids.map((item, key) => {
                                    return (<th key={key}>{compareData[item].employee_name}</th>)
                                })}
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Price</td>
                            {ids.map((item, key) => {
                                return (<td key={key} className="text-success">${compareData[item].employee_salary}</td>)
                            })}
                        </tr>
                        <tr>
                            <td>Age</td>
                            {ids.map((item, key) => {
                                return (<td key={key}>{compareData[item].employee_age}</td>)
                            })}
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

CompareTable.propTypes = {
    compareData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    compareData: state.product.compareData,
    random: state.product.random,
});
export default connect(mapStateToProps, {})(CompareTable);
