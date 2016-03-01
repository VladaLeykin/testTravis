define(['react','router'],
    function (React, ReactRoute) {
        'use strict';

        var Link = ReactRoute.Link;

        return React.createClass({
                contextTypes: {
                    router: React.PropTypes.object.isRequired
                },
                checkAndLogIn(){
                    var email = this.refs.email.value;
                    var password = this.refs.password.value;

                    if (!this.props.route.storage.hasKey(email)) {
                        alert("Email or password are incorrect");
                        return;
                    }

                    if (this.props.route.storage.get(email) !== password) {
                        alert("Email or password are incorrect");
                        return;
                    }

                    this.context.router.push('/login/loggedin');
                },
                render() {
                    return (
                        <div>
                            <input type="text" ref="email" placeholder="Email"/>
                            <input type="password" ref="password" placeholder="Password"/>
                            <input type="submit" value="Log In" onClick={this.checkAndLogIn}/>
                            <span>Don't have an account?</span>
                            <Link to="/login/signup">SignUp</Link>
                        </div>
                    );
                },
            });
    }
);
