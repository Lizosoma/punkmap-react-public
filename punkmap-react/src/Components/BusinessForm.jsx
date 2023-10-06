import React from 'react';

const BusinessForm = () => {
  return (
    <div className="main__form form business-f flex">
        <h2 className="form__title">
          Привет!
        </h2>
        <p className="form__text">
          Если у&nbsp;тебя есть свой бизнес в&nbsp;ПУНКе, пожалуйста, заполни формочку:
        </p>
        <form className="form__content flex">
          <div className="business__descr-f flex">
            <p className="form__text">
              Опиши свой бизнес:
            </p>
            <textarea className="form__textarea" rows="7" cols="50" name="" id=""></textarea>
          </div>
          <div className="business__name-f flex">
            <p className="form__text">
              Дай ему название:
            </p>
            <input className="business-name-f" type="text" />
          </div>
          <p className="form__text">
            Какое место на карте обозначить?
          </p>
          <div className="business__place-f flex">
            <ul className="business__list-f list-reset flex">
              <li className="business__item-f flex">
                <span className="business__dorm-f">
                  № общежития:
                </span>
                <select className="business__select-f" name="dorm" id="">
                  <option value="12">12</option>
                  <option value="13">13</option>
                </select>
              </li>
              <li className="business__item-f flex">
                <span className="business__dorm-f">
                  № блока:
                </span>
                <input className="block-number-f" type="number" />
              </li>
            </ul>
          </div>
            <button className="send-btn btn-reset" type="submit">
              Отправить
            </button>
        </form>
      </div>
  );
};

export default BusinessForm;