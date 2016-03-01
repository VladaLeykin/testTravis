define(['react', 'router'],
    function (React, ReactRoute) {
        'use strict';

        var Link = ReactRoute.Link;

        return React.createClass(
            {
                contextTypes: {
                    router: React.PropTypes.object.isRequired
                },
                checkAndSignUp: function() {
                    var email = this.refs.email.value;
                    var password1 = this.refs.password1.value;
                    var password2 = this.refs.password2.value;

                    if (email === "") {
                        alert("Email can't be empty");
                        return;
                    }

                    if (this.props.route.storage.hasKey(email)) {
                        alert("Selected email already taken");
                        return;
                    }

                    if (password1 !== password2) {
                        alert("Passwords should match");
                        return;
                    }
                    if (password1.split('').length < 6) {
                        alert("Passwords should include at least 6 charachters");
                        return;
                    }

                    this.props.route.storage.save(email,password1);
                    this.context.router.push('/login')
                },
                render: function () {

                    return (
                        <div>
                            <input type="text" ref="email" placeholder="Email"/>
                            <input type="password" ref="password1" placeholder="Password"/>
                            <input type="password" ref="password2" placeholder="Repeat Password"/>
                            <input type="submit" value="Sign Up" onClick={this.checkAndSignUp}/>
                            <span>Already signed up?</span>
                            <Link to="/login">Log In</Link>
                        </div>
                    );
                },
            }
        );
    }
);
