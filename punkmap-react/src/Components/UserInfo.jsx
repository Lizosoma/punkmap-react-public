import React from 'react'

const UserInfo = () => {
  return (
    <div class="main__other-data other-data">
      <div class="other-data__tabs tabs flex">
        <input class="tabs__tab" type="radio" id="tabs__tab1" name="tabstab" checked="checked" />
        <label class="tabs__title" for="tabs__tab1">№ блока</label>
        <div class="tabs__content content flex">
          <p class="content__text">
            В каком блоке ты живешь?
          </p>
          <ul class="content__list list-reset flex">
            <li class="content__item flex">
              <span class="content__name">
                № общежития:
              </span>
              <select class="content__select notPunk" name="dorm" id="">
                <option value="12">12</option>
                <option value="13">13</option>
              </select>
            </li>
            <li class="content__item flex">
              <span class="content__name">
                № блока:
              </span>
              <input class="block-number notPunk" type="number" />
            </li>
          </ul>
          <div class="content__descr flex">
            <p class="content__text">
              Комментарий/описание:
            </p>
            <textarea class="content__textarea notPunk" rows="7" cols="50" name="" id=""></textarea>
          </div>
          <div class="content__choice flex">
            <label for="not-punk" class="content__text"><input class="choice" id="not-punk" type="checkbox" />Живу не в ПУНКе</label>
          </div>
        </div>
        <input class="tabs__tab" type="radio" id="tabs__tab2" name="tabstab" checked="checked" />
        <label class="tabs__title" for="tabs__tab2">Бизнес</label>
        <div class="tabs__content content flex">
          <div class="content__descr flex">
            <p class="content__text">
              Описание:
            </p>
            <textarea class="content__textarea noBusiness" rows="7" cols="50" name="" id=""></textarea>
          </div>
          <div class="content__title flex">
            <p class="content__text">
              Название:
            </p>
            <input class="business-name noBusiness" type="text" />
          </div>
          <ul class="content__list list-reset flex">
            <li class="content__item flex">
              <span class="content__name">
                № общежития:
              </span>
              <select class="content__select noBusiness" name="dorm" id="">
                <option value="12">12</option>
                <option value="13">13</option>
              </select>
            </li>
            <li class="content__item flex">
              <span class="content__name">
                № блока:
              </span>
              <input class="block-number noBusiness" type="number" />
            </li>
          </ul>
          <div class="content__choice flex">
            <label for="no-business" class="content__text"><input class="choice" id="no-business" type="checkbox" />Нет бизнеса</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo