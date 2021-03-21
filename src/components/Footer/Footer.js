import './styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper-bottom">
        <div className="footer__columns">
          <div className="footer__wrapper-socials">
            <svg className="footer__logo" width="67" height="70"><use xlinkHref="#logo-footer"></use></svg>
            <ul className="footer__socials-list">
              <li className="footer__social-item">
                <button className="footer__social-link" title="ссылка на страницу в фейсбуке">
                  <svg className="footer__social-icon" width="24" height="24"><use xlinkHref="#icon-fb"></use></svg>
                </button>
              </li>
              <li className="footer__social-item">
                <button className="footer__social-link" title="ссылка на страницу в инстаграмме">
                  <svg className="footer__social-icon" width="24" height="24"><use xlinkHref="#icon-inst"></use></svg>
                </button>
              </li>
              <li className="footer__social-item">
                <button className="footer__social-link" title="ссылка на страницу в твитере">
                  <svg className="footer__social-icon" width="24" height="24"><use xlinkHref="#icon-tw"></use></svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="footer__wrapper-links">
            <div className="footer__column">
              <h2 className="footer__heading footer__heading_about">О нас</h2>
              <p className="footer__about-text">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
              <p className="footer__about-text">Все инструменты проверены, отстроены и доведены до идеала!</p>
            </div>
            <div className="footer__column">
              <h2 className="footer__heading">Каталог</h2>
              <ul className="footer__column-list">
                <li className="footer__column-item">
                  <button className="footer__column-link">Акустические гитары</button>
                </li>
                <li className="footer__column-item">
                  <button className="footer__column-link">Классические гитары</button>
                </li>
                <li className="footer__column-item">
                  <button className="footer__column-link">Электрогитары</button>
                </li>
                <li className="footer__column-item">
                  <button className="footer__column-link">Бас-гитары</button>
                </li>
                <li className="footer__column-item">
                  <button className="footer__column-link">Укулеле</button>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <h2 className="footer__heading">Информация</h2>
              <ul className="footer__column-list">
                <li className="footer__column-item">
                  <button className="footer__column-link">Где купить?</button>
                </li>
                <li className="footer__column-item">
                  <button className="footer__column-link">Блог</button>
                </li>
                <li className="footer__column-item">
                  <button className="footer__column-link">Вопрос - ответ</button>
                </li>
                <li className="footer__column-item">
                  <button className="footer__column-link">Возврат</button>
                </li>
                <li className="footer__column-item">
                  <button className="footer__column-link">Сервис-центры</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__wrapper-contacts">
            <div className="footer__column">
              <h2 className="footer__heading">Контакты</h2>
              <p className="footer__contacts-text">
                <span className="footer__span">г. Санкт-Петербург,</span>
                <span className="footer__span">м. Невский проспект,</span>
                <span className="footer__span">ул. Казанская 6. </span>
                <a className="footer__span footer__span_type_phone" href="tel:+78125005050">8-812-500-50-50</a>
              </p>
              <p className="footer__contacts-text">
                <span className="footer__span">Режим работы:</span>
                <span className="footer__span footer__span_type_time">с 11:00 до 20:00,</span>
                <span className="footer__span">без выходных.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
