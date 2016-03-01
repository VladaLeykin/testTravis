define(['react'],
    function (React) {
        'use strict';

        return React.createClass({
                render: function () {
                    var content = this.props.children || "Nothing is here";
                    return (
                        <div>
                            <h1>Exercise 12: Signup / Login / Logout</h1>
                            {content}
                        </div>
                    );
                },
            }
        );
    }
);
