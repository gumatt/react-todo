import React from 'react';
const PropTypes = React.PropTypes;

class TodoItem extends React.Component {
    render() {
        const { id, text } = this.props;

        return (
            <div ref="test">
                {id}. {text}
            </div>
        );
    }

}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
};

module.exports = TodoItem;
