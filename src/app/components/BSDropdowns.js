'use strict';

/*
 * BSDropdown
 */

var React = require('react'),
    BSDropdowns;

BSDropdowns = React.createClass({
    propTypes: {
        text            : React.PropTypes.string.isRequired,
        options         : React.PropTypes.array.isRequired
    },
    getDefaultProps: function() {
        return {
            text            : '',
            options         : [],
            name            : ''
        };
    },
    getInitialState: function() {
        return {
            optionsList     : this.props.options
        };
    },
    renderOptions: function() {
        return this.state.optionsList.map(function(item, i) {
            var className = (item.disabled === true) ? 'disabled' : ' ';
            return (
                /* jshint ignore:start */
                <li key={i} value={item.id} role="presentation" className={className}>
                    <a role="menuitem" className="dropdown-option" href={item.href}>
                        <img className="dropdown-img" src={item.imageSrc}></img>
                        <span className="dropdown-text">{item.text}</span>
                        <span className="dropdown-desc">{item.description}</span>
                    </a>
                </li>
                /* jshint ignore:end */
            );
        });
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="dropdown">
                <button 
                    className="btn btn-default dropdown-toggle" 
                    type="button" 
                    id="dropdownMenu1" 
                    data-toggle="dropdown" 
                    aria-expanded="true">
                    Dropdown
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" 
                    role="menu" 
                    aria-labelledby="dropdownMenu1" 
                    name={this.props.text} >
                    {this.renderOptions()}
                </ul>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = BSDropdowns;