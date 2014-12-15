/** @jsx React.DOM */

'use strict';

var React = require('react'),
    BSDropdowns = require('./components/BSDropdowns'),
    ExampleApp,
    DropdownSelectOptions1 = [
        {id:1, text:'This is Select1', href:'#', disabled: true, description:'Description', imageSrc:''},
        {id:2, text:'Select2', href:'#', disabled: false, description:'Description', imageSrc:'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png'},
        {id:3, text:'Select3', href:'#', disabled: false, description:'Description', imageSrc:'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png'}
    ],
    DropdownSelectOptions2 = [
        {id:1, text:'This is Select4', href:'#', disabled: false, description:'Description', imageSrc:'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png'},
        {id:2, text:'Select5', href:'#', disabled: false, description:'Description', imageSrc:'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png'},
        {id:3, text:'Select6', href:'#', disabled: false, description:'Description', imageSrc:'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png'}
    ];

ExampleApp = React.createClass({
    clickHandler: function(name, val){
        console.log(name);
        console.log(val)
    },
    render: function() {
        return (
            /*jshint ignore:start */
            <div>
                <BSDropdowns
                    buttonName="Test1" 
                    name="dropdown"
                    options={DropdownSelectOptions1}
                    onClickHandler={this.clickHandler} />

                <BSDropdowns
                    buttonName="Test2" 
                    name="dropdown2"
                    options={DropdownSelectOptions2}
                    onClickHandler={this.clickHandler} />
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
