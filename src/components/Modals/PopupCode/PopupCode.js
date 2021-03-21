import PropTypes from 'prop-types';
import { useEffect } from 'react';

const PopupCode = ({text, closePopup}) => {
  useEffect(() => {
    const page = document.querySelector(`.page`);
    const button = document.querySelector(`.popup__close`);
    const closeEsc = (event) => {
      if (event.key === `Escape`) {
        closePopup();
      }
    };
    window.addEventListener(`keydown`, closeEsc);
    page.classList.add(`page_no-scrole`);
    button.focus();
    return () => {
      page.classList.remove(`page_no-scrole`);
      window.removeEventListener(`keydown`, closeEsc);
    };
  });

  return (
    <div className="popup popup_basket">
      <button onClick={closePopup} className="popup__close" type="button">
        <svg className="popup__icon" width="11.5" height="11.5"><use xlinkHref="#icon-close"></use></svg>
      </button>
      <h2 className="popup__title">{text}</h2>
    </div>
  );
};

PopupCode.propTypes = {
  text: PropTypes.string,
  closePopup: PropTypes.func
};

export default PopupCode;
