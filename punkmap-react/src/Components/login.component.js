import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import PasswordShowHide from './PasswordShowHide'

import AuthService from '../Services/auth.service'

const required = value => {
  if (!value) {
    return (
      <div className='errorMsg' role='alert'>
        Пожалуйста, заполните это поле
      </div>
    );
  }
};

function isEmail(value) {
  return /^st[0-9]{6}@student\.spbu\.ru/i.test(value);
}

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className='errorMsg' role='alert'>
        Пожалуйста, введите st почту
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: '',
      password: '',
      loading: false,
      message: ''
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: '',
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(
        this.state.email,
        this.state.password
      ).then(
        () => {
          this.props.history.push('/profile');
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="wrapper forms__sign-in">
        <Form
          className='sign-in form-rl flex'
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
          <div>
            <h2 className="form-rl__name s-i-name">
              Вход
            </h2>
            <ul className='form-rl__list s-i list-reset flex'>
              <li className='form-rl__item'>
                <Input
                  type='text'
                  className='form-rl__input'
                  name='email'
                  placeholder="stXXXXXX"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  validations={[required, email]}
                />
              </li>
              <li className='form-rl__item'>
                <PasswordShowHide />
              </li>
              <button
                className='form-rl__btn btn-reset sign-in__btn'
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className='spinner-border'></span>
                )}
                <span>Войти</span>
              </button>
            </ul>
          </div>

          {this.state.message && (
            <div className='form-rl__item'>
              <div
                className='errorMsg'
                role='alert'
              >
                {this.state.message}
              </div>
            </div>
          )}
          <CheckButton
            style={{ display: 'none' }}
            ref={c => {
              this.checkBtn = c;
            }}
          />
        </Form>
      </div>

    );
  }
}