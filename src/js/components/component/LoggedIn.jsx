define(['react', 'router'],
    function (React, ReactRoute) {
        'use strict';

        var Link = ReactRoute.Link;

        return React.createClass({
                render: function () {
                    return (
                        <div>
                            <span>You've successfully logged in</span>
                            <Link to="/login">Log Out</Link>
                        </div>
                    );
                },
            }
        );
    }
);
