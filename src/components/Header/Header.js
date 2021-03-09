import './styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper-top">
        <div className="header__wrapper">
          <a className="header__logo-link" href="#">
            <svg className="header__logo" width="67" height="70"><use xlinkHref="#logo"></use></svg>
          </a>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Каталог</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Где купить?</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">О компании</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Cервис-центры</a>
              </li>
            </ul>
          </nav>
          <ul className="header__buttons-list">
            <li className="header__buttons-item">
              <a href="#" className="header__button">
                <svg className="header__button-icon" width="14" height="17"><use xlinkHref="#icon-map"></use></svg>
              </a>
            </li>
            <li className="header__buttons-item">
              <a href="#" className="header__button">
                <svg className="header__button-icon" width="14" height="14"><use xlinkHref="#icon-search"></use></svg>
              </a>
            </li>
            <li className="header__buttons-item">
              <a href="./basket.html" className="header__button header__button_basket">
                <span className="header__button-indicator">1</span>
                <svg className="header__button-icon" width="13" height="13"><use xlinkHref="#icon-basket"></use></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__image-wrapper">
        <picture className="header__picture">
          <source className="header__guitar-image-webp" type="image/webp" srcSet="./img/guitar-header.webp" />

          <img src="./img/guitar-header.png" alt="Гитара" className="header__guitar-image" width="828" height="296" />
        </picture>
      </div>
    </header>
  )
};

export default Header;

