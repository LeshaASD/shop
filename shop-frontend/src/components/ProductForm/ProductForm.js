import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "react-bootstrap";
import FormElement from "../UI/Form/FormElement";

class ProductForm extends Component {
    state = {
        category: '',
        title: '',
        price: '',
        description: '',
        image: ''
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.onSubmit(formData);
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    render() {
        const categories = this.props.categories.map(category => {
            return {id: category._id, title: category.title};
        });

        return (
            <Form horizontal onSubmit={this.submitFormHandler}>
                <FormElement
                    propertyName="category"
                    title="Product category"
                    type="select"
                    options={categories}
                    value={this.state.category}
                    changeHandler={this.inputChangeHandler}
                    required
                />

                <FormElement
                    propertyName="title"
                    title="Product title"
                    type="text"
                    value={this.state.title}
                    changeHandler={this.inputChangeHandler}
                    required
                />

                <FormElement
                    propertyName="price"
                    title="Product price"
                    type="number"
                    value={this.state.price}
                    changeHandler={this.inputChangeHandler}
                    required
                />

                <FormElement
                    propertyName="description"
                    title="Product description"
                    type="textarea"
                    value={this.state.description}
                    changeHandler={this.inputChangeHandler}
                    required
                />

                <FormElement
                    propertyName="image"
                    title="Product image"
                    type="file"
                    changeHandler={this.fileChangeHandler}
                />

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button bsStyle="primary" type="submit">Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default ProductForm;
