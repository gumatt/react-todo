var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');

var MyModal = React.createClass({
    getInitialState: function() {
        return { showModal : true};
    },
    close: function() {
        this.setState({ showModal : false });
    },
    open: function() {
        this.setState({ showModal : true});
    },
    render: function() {
        return (
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="warning" onClick={this.close}>OK</Button>
                </Modal.Footer>
            </Modal>
        );
    }

});

module.exports = MyModal;
