import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Button, PageHeader} from "react-bootstrap";
import {fetchProducts} from "../../store/actions/products";
import {Link} from "react-router-dom";

import ProductListItem from '../../components/ProductListItem/ProductListItem';

class Products extends Component {
    componentDidMount() {
        this.props.onFetchProducts();
    }

    render() {
        return (
            <Fragment>
                <PageHeader>
                    Products
                    { this.props.user && this.props.user.role === 'admin' &&
                    <Link to="/products/new">
                        <Button bsStyle="primary" className="pull-right">
                            Add product
                        </Button>
                    </Link>
                    }
                </PageHeader>

                {this.props.products.map(product => (
                    <ProductListItem
                        key={product._id}
                        id={product._id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(fetchProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);