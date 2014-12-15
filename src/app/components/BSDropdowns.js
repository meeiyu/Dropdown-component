'use strict';

/*
 * BSDropdown
 */

var React = require('react'),
    BSDropdowns;

BSDropdowns = React.createClass({
    propTypes: {
        buttonName      : React.PropTypes.string.isRequired,
        name            : React.PropTypes.string.isRequired,
        options         : React.PropTypes.array.isRequired,
        onClickHandler  : React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            options         : [],
            buttonName      : '',
            name            : '',
            onClickHandler  : function() {}
        };
    },
    getInitialState: function() {
        return {
            optionsList     : this.props.options
        };
    },
    clickHandler: function(id, name){
        var targetVal=this.props.options[parseInt(id)-1];
        //console.log(targetVal);
        if(targetVal.disabled)
        {
            return
        } else {
            this.props.onClickHandler(id, name);
        }
    },
    renderOptions: function() {
        var that = this;
        var buttonName = that.props.name;
        return this.state.optionsList.map(function(item, i) {
            var className = (item.disabled === true) ? 'disabled' : ' ';
            return (
                /* jshint ignore:start */
                <li key={i} value={item.id} role="presentation" className={className} onClick={that.clickHandler.bind(null, item.id, buttonName)} name={that.props.name}>
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
                    {this.props.buttonName}
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" 
                    role="menu"
                    aria-labelledby="dropdownMenu1" >
                    {this.renderOptions()}
                </ul>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = BSDropdowns;