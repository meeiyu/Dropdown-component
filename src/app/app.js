/** @jsx React.DOM */

'use strict';

var React = require('react'),
    BSDropdowns = require('./components/BSDropdowns'),
    ExampleApp,
    DropdownSelectOptions1 = [
        {id:1, text:'This is Select1', href:'index1', disabled: true, description:'Description', imageSrc:''},
        {id:2, text:'Select2', href:'index2', disabled: false, description:'Description', imageSrc:'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png'},
        {id:3, text:'Select3', href:'index3', disabled: false, description:'Description', imageSrc:'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png'}
    ],
    DropdownSelectOptions2 = [
        {id:1, text:'This is Select4', href:'index4', disabled: false, description:'Description', imageSrc:'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png'},
        {id:2, text:'Select5', href:'index5', disabled: false, description:'Description', imageSrc:'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png'},
        {id:3, text:'Select6', href:'index6', disabled: false, description:'Description', imageSrc:'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png'}
    ];

ExampleApp = React.createClass({
    render: function() {
        return (
            /*jshint ignore:start */
            <div>
                <BSDropdowns
                    buttonName="Test1" 
                    name="dropdown"
                    options={DropdownSelectOptions1} />

                <BSDropdowns
                    buttonName="Test2" 
                    name="dropdown2"
                    options={DropdownSelectOptions2} />
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
