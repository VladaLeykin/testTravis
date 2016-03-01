define(['react'],
    function (React) {
        'use strict';

        return React.createClass( {
                onButtonClick: function () {
                    this.props.setItemStatus(this.props.index, !this.props.data.done);
                },
                render: function () {
                    var styleObj;
                    styleObj = (this.props.data.done) ? {textDecoration: 'line-through'} : {textDecoration: 'none'};

                    return <li style={styleObj} onClick={this.onButtonClick}>{this.props.data.title}</li>;
                }
            }
        );
    }
);
