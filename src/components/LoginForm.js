import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {loginUser} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import Header from './header';

export class LogInForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(loginUser(values.Email, values.Password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <>
         
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>{
                  
                    this.onSubmit(values)
                }
                    )}>
                    <Header />
                       <h1>Login</h1>
                {error}
                <label htmlFor="email-address">Email Address</label>
                <Field
                    component={Input}
                    type="text"
                    name="Email"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="Password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Part The Veil
                </button>
                
            </form>
            </>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LogInForm);