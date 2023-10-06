import React, { Component } from "react";
import AuthService from '../Services/auth.service'
import { Container } from "react-bootstrap";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Container>
        <div className="main flex">
          <div className="main__userdata userdata">
            <div className="userdata__top flex">
              <img src="" alt="" className="avatar" />
              <p className="username">pfeffferkuchen</p>
              {/* <p className="username">{currentUser.username}</p> */}
            </div>
            <div className="userdata__info info flex">
              <ul className="info__list list-reset flex">
                <li className="info__item flex">
                  <span className="info__name">
                    Статус:
                  </span>
                  <p className="info__text">
                    fff
                  </p>
                  {/* <p className="info__text">
                    {currentUser.roles &&
                      currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                  </p> */}
                </li>
                <li className="info__item flex">
                  <span className="info__name">
                    Почта:
                  </span>
                  <p className="info__text">
                    fff
                  </p>
                  {/* <p className="info__text">
                  {currentUser.email}
                  </p> */}
                </li>
                <li className="info__item flex">
                  <span className="info__name">
                    Пароль:
                  </span>
                  <p className="info__text">
                    fff
                  </p>
                </li>
              </ul>
            </div>
            <button className="edit-btn btn-reset">
              Редактировать
            </button>
          </div>
        </div>
        {/* <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong>
            Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.subString(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authirities</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul> */}
      </Container>

    );
  }
}