import React, { Component } from 'react'
import Input from 'react-validation/build/input'

const required = value => {
  if (!value) {
    return (
      <div className='errorMsg' role='alert'>
        Пожалуйста, заполните это поле
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 8 || value.length > 20) {
    return (
      <div className='errorMsg' role='alert'>
        Пароль должен содержать 8-20 символов, прописные и строчные латинские буквы и хотя бы одну цифру
      </div>
    );
  }
};

export default class PasswordShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: '',
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  render() {
    return (
      <div>
        <Input
          type={this.state.hidden ? 'password' : 'text'}
          value={this.state.password}
          onChange={this.handlePasswordChange}
          className='form-rl__input'
          name='password'
          placeholder="пароль"
          validations={[required, vpassword]}
        />
        <span className='eye' onClick={this.toggleShow}></span>
      </div>
    );
  }
}