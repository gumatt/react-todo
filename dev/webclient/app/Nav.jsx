const React = require('react');
const { LinkContainer } = require('react-router-bootstrap');
const ReactBootstrap = require('react-bootstrap');
let { Navbar, Nav, NavItem, FormGroup, FormControl, Button } = ReactBootstrap;
const Modal = require('react-bootstrap/lib/Modal');


const AppNav = React.createClass({
    getInitialState() {
        return { view: { showModal: false } };
    },
    handleHideModal() {
        this.setState({ view: { showModal: false } });
    },
    handleShowModal(msg) {
        this.setState({ view: { showModal: true } });
    },
    render() {
        return (
            <Navbar fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <h1>{this.props.companyName}/</h1><h2>{this.props.appName}</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav activeKey={1}>
                        <LinkContainer to="/timer">
                            <NavItem eventKey={1}>Stopwatch</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/countdown">
                            <NavItem eventKey={2}>Timer</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/weather">
                            <NavItem eventKey={3}>Weather</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/todo">
                            <NavItem eventKey={4}>TodoApp</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/menu">
                            <NavItem eventKey={5}>Menu Sandbox</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/test">
                            <NavItem eventKey={5}>Menu Sandbox 2</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <Navbar.Brand>
                            <h2>Created By </h2>
                            <h3>
                                <a onClick={this.handleShowModal}>gumattic</a>
                            </h3>
                            <Modal show={this.state.view.showModal}
                              onHide={this.handleHideModal}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>About gumattic</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>gumattic</h4>
                                    <p>Is a personal project environment for
                                    building React apps for Powerhouse</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleHideModal}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    },
});

module.exports = AppNav;
