var React = require('react');
var Nav = require('./Nav.jsx');
var ReactBootstrap = require('react-bootstrap');
var {Grid, Row, Col} = ReactBootstrap;

var App = (props) => {
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
}

module.exports = App;
