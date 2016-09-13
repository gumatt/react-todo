import React from 'react';
import Nav from './Nav.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

const App = (props) => {
    return (
        <div>
            <Nav companyName="Powerhouse" appName="template" />
            <Grid className="page-body">
                <Row>
                    <Col xs={12} mdOffset={3} med={6} lgOffset={4} lg={4}>
                        {props.children}
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

module.exports = App;
