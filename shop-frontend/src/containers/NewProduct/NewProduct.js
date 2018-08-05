import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";

import ProductForm from "../../components/ProductForm/ProductForm";
import {createProduct} from "../../store/actions/products";
import {fetchCategories} from "../../store/actions/categories";

class NewProduct extends Component {
    componentDidMount () {
        this.props.fetchCategories();
    }

    createProduct = productData => {
        this.props.onProductCreated(productData);
    };

    render() {
        return (
            <Fragment>
                <PageHeader>New product</PageHeader>
                <ProductForm
                    onSubmit={this.createProduct}
                    categories={this.props.categories}
                />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onProductCreated: productData => {
        return dispatch(createProduct(productData))
    },
    fetchCategories: () => dispatch(fetchCategories())
});

const mapStateToProps = state => ({
    categories: state.categories.allCategories
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);