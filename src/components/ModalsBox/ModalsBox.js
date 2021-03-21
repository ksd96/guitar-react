import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './styles/overlay.scss';

const ModalsContainer = ({
  children,
  status,
  onClosePopup,
}) => {

  const classContainer = classNames({
    "overlay": true,
    "overlay_opened": status !== null,
  });

  return (
    <div onClick={ (evt) => { if (evt.target === evt.currentTarget) { onClosePopup(); } } } className={classContainer}>
      {children}
    </div>
  );
};

ModalsContainer.propTypes = {
  status: PropTypes.string,
  onClosePopup: PropTypes.func,
};

export default ModalsContainer;
