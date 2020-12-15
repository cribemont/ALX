import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import TextComponent from './TextComponent';

// Nothing too crazy happening here, just a components with behaviours passed from App.js
// refer to App.js for function @handleFilter and @handleReset

const FilterBar = (props) => {
    return(
        <>
            <TextComponent content="Filter" Tag="small" />
            <Form id="form_filter">
                <Form.Row className="align-items-center">
                    <Col sm={3}>
                        <Form.Group>
                            <Form.Control type="text" id="input-filter" placeholder="Enter a service name (min. 3 char.)" onChange={props.handleFilter} />
                        </Form.Group>
                    </Col>
                    <Col sm={2} className="btn-reset-wrapper">
                        <Button variant="outline-secondary" as="input" type="reset" block onClick={props.handleReset} value="Reset" />
                    </Col>
                </Form.Row>
            </Form>
        </>
    );
}

export default FilterBar;