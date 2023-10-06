import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
// import { isEmail } from 'validator'
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

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className='errorMsg' role='alert'>
        От 3 до 20 символов
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: '',
      email: '',
      password: '',
      succesful: false,
      message: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: '',
      succesful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            succesful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            succesful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="wrapper forms__sign-up">
        <Form
          className="sign-up form-rl flex"
          onSubmit={this.handleRegister}
          ref={c => {
            this.form = c;
          }}
        >
          {!this.state.succesful && (
            <div>
              <h2 className="form-rl__name s-u-name">
                Регистрация
              </h2>
              <ul className='form-rl__list s-u list-reset flex'>
                <li className="form-rl__item">
                  <Input
                    type='text'
                    className='form-rl__input'
                    name='username'
                    placeholder="имя"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </li>
                <li className="form-rl__item">
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
                <li className="form-rl__item">
                  <PasswordShowHide />
                </li>
                <button className='form-rl__btn btn-reset sign-up__btn'>Зарегистрироваться</button>
              </ul>
            </div>
          )}

          {this.state.message && (
            <div className='form-rl__item'>
              <div
                className={
                  this.state.succesful
                    ? 'alert alert-success'
                    : 'alert alert-danger'
                }
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

