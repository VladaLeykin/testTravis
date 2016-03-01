define(['lodash', 'react', 'reactDOM', 'router',
        'components/component/AppToDo',
        'components/component/SignUp',
        'components/component/LoggedIn',
        'components/component/LogIn',
        'components/component/SignUpLogIn',
        'components/logic/keyValueStorage',
        'components/component/ModalOwner'],
    function (_, React, ReactDOM, ReactRouter,
              AppToDo, SignUp, LoggedIn, LogIn, SignUpLogIn, keyValueStorage, ModalOwner) {
        'use strict';

        var Router = ReactRouter.Router;
        var Route = ReactRouter.Route;
        var History = ReactRouter.History;
        var IndexRoute = ReactRouter.IndexRoute;
        var Link = ReactRouter.Link;

        /*var PageHeader = React.createClass({
         displayName: 'PageHeader',
         render: function () {
         return (
         <div>
         <h1>MarkBook</h1>
         </div>
         );
         }
         });

         var ErrorMsg = React.createClass({
         displayName: 'ErrorMsg',
         render: function () {
         return (
         <span className='error'>{this.props.errorMsg}</span>
         );
         }
         });

         var LoginPage = React.createClass({
         mixins: [History, React.addons.LinkedStateMixin],
         displayName: 'LoginPage',
         getInitialState: function () {
         return {
         email: '',
         password: '',
         errorMsg: ''
         };
         },
         validateUserCredentials: function () {
         var users = JSON.parse(localStorage.getItem('users')) || [];
         var user = {
         email: this.state.email,
         password: this.state.password
         };
         return _.find(users, user);
         },
         goToMainApp: function (evt) {
         evt.preventDefault();
         evt.stopPropagation();

         if (this.validateUserCredentials()) {
         this.history.push('/main');
         } else {
         this.setState({errorMsg: 'Wrong e-mail/password !!!'});
         }
         },
         goToSignUp: function () {
         this.history.push('/signup');
         },
         render: function () {
         return (
         <div>
         <PageHeader />
         <form onSubmit={this.goToMainApp}>
         <input
         type='email'
         name='email'
         placeholder='Email'
         valueLink={this.linkState('email')}
         required
         />
         <input
         type='password'
         name='password'
         placeholder='Password'
         pattern="\d{6,}"
         valueLink={this.linkState('password')}
         required
         />
         <button type='submit'>Login</button>
         <ErrorMsg errorMsg={this.state.errorMsg}/>
         </form>
         <div>
         <span>Don't have an account?</span>
         <button onClick={this.goToSignUp}>Sign up</button>
         </div>
         </div>
         );
         }
         });

         var SignUpPage = React.createClass({
         mixins: [History, React.addons.LinkedStateMixin],
         displayName: 'SignUpPage',
         getInitialState: function () {
         return {
         email: '',
         password: '',
         passwordRepeat: '',
         errorMsg: ''
         };
         },
         validateUserNameNotExist: function (user, users) {
         var findResult = _.find(users, {email: this.state.email});
         return !findResult;
         },
         validatePasswordMatches: function () {
         return this.state.password === this.state.passwordRepeat;
         },
         addUser: function (user, users) {
         users.push(user);
         localStorage.setItem('users', JSON.stringify(users));
         },
         createUser: function () {
         var users = JSON.parse(localStorage.getItem('users')) || [];
         var user = {
         email: this.state.email,
         password: this.state.password
         };

         if (!this.validateUserNameNotExist(user, users)) {
         this.setState({errorMsg: 'User name already exists'});
         return false;
         }

         if (!this.validatePasswordMatches()) {
         this.setState({errorMsg: 'Password does not match'});
         return false;
         }

         this.addUser(user, users);
         return true;
         },
         goToMainApp: function (evt) {
         evt.preventDefault();
         evt.stopPropagation();

         if (this.createUser()) {
         this.history.push('/main');
         }
         },
         render: function () {
         return (
         <div>
         <PageHeader />
         <form onSubmit={this.goToMainApp}>
         <input
         type='email'
         name='email'
         placeholder='Email'
         valueLink={this.linkState('email')}
         required
         />
         <input
         type='password'
         name='password'
         placeholder='Password'
         pattern="\d{6,}"
         valueLink={this.linkState('password')}
         required
         />
         <input
         type='password'
         name='repeatPassword'
         placeholder='Repeat password'
         pattern="\d{6,}"
         valueLink={this.linkState('passwordRepeat')}
         required
         />
         <button type='submit'>Sign Up</button>
         <ErrorMsg errorMsg={this.state.errorMsg}/>
         </form>
         <div>
         <span>Already have an account?</span>
         <button onClick={this.goToLogin}>Login</button>
         </div>
         </div>
         );
         }
         });

         var MainApp = React.createClass({
         mixins: [History],
         displayName: 'MainApp',
         goToLogin: function (evt) {
         evt.preventDefault();
         this.history.push('/');
         },
         render: function () {
         return (
         <button onClick={this.goToLogin}>Logout</button>
         );
         }
         });
         */

        var App = React.createClass({
            render: function () {
                return (
                    <div>
                        <h1>React Tests Week</h1>
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/todo">Todo App</Link></li>
                            <li><Link to="/modal">Modal</Link></li>
                        </ul>
                        <hr/>
                        {this.props.children}
                    </div>
                );
            }
        });

        return React.createClass({
            displayName: 'MainView',
            render: function () {
                return (
                    <Router>
                        <Route path="/" component={App}>
                            <Route path="/login" component={SignUpLogIn}>
                                <IndexRoute storage={keyValueStorage} component={LogIn}/>
                                <Route path="signup" storage={keyValueStorage} component={SignUp}/>
                                <Route path="loggedin" storage={keyValueStorage} component={LoggedIn}/>
                            </Route>
                            <Route path="/todo" component={AppToDo}/>
                            <Route path="/modal" component={ModalOwner}/>
                        </Route>
                    </Router>
                );
            }
        });
    });
