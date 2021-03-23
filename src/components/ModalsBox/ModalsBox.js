import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect, useCallback } from 'react';

import './styles/overlay.scss';

const ModalsContainer = ({
  children,
  status,
  onClosePopup,
  title
}) => {

  useEffect(() => {
    const closeEsc = (event) => {
      if (event.key === `Escape`) {
        onClosePopup();
      };
    };
    window.addEventListener(`keydown`, closeEsc);
    document.body.style.overflow = `hidden`;
    return () => {
      document.body.style.overflow = `auto`;
      window.removeEventListener(`keydown`, closeEsc);
    };
  });

  const classContainer = classNames({
    "overlay": true,
    "overlay_opened": status !== null,
  });

  const closePopup = useCallback((evt) => {
    if (evt.target === evt.currentTarget) {
      onClosePopup();
    };
  }, [onClosePopup]);

  return (
    <div onClick={closePopup} className={classContainer}>
      <div className="popup">
        <h2 className="popup__title">{title}</h2>
        {children}
        <button onClick={onClosePopup} className="popup__close" type="button">
          <svg className="popup__icon" width="11.5" height="11.5"><use xlinkHref="#icon-close"></use></svg>
        </button>
      </div>
    </div>
  );
};

ModalsContainer.propTypes = {
  status: PropTypes.string,
  onClosePopup: PropTypes.func,
  title: PropTypes.string
};

export default ModalsContainer;
