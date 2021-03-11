import classNames from 'classnames/bind';
import PopupAddBasket from '../PopupAddBasket/PopupAddBasket.js';
import PopupGoBasket from '../PopupGoBasket/PopupGoBasket.js';
import PopupDeleteCard from '../PopupDeleteCard/PopupDeleteCard.js';
import PropTypes from 'prop-types';

import './styles/overlay.scss';

const ModalsContainer = ({
  status,
  data,
  type,
  closePopup,
  addCardInBasket,
  deleteCard
}) => {

  const classContainer = classNames({
    "overlay": true,
    "overlay_opened": status === true,
  });

  let popup;
  if (status === true && type === `addInBasket`) {
    popup = <PopupAddBasket data={data} closePopup={closePopup} addCardInBasket={addCardInBasket} />;
  } else if (status === true && type === `goBasket`) {
    popup = <PopupGoBasket closePopup={closePopup} />;
  } else if (status === true && type === `deleteCard`) {
    popup = <PopupDeleteCard data={data} closePopup={closePopup} deleteCard={deleteCard} />
  } else {
    popup = null;
  };

  return (
    <div className={classContainer}>
      {popup}
    </div>
  );
};

ModalsContainer.propTypes = {
  status: PropTypes.bool,
  data: PropTypes.object,
  type: PropTypes.string,
  closePopup: PropTypes.func,
  addCardInBasket: PropTypes.func,
  deleteCard: PropTypes.func
}

export default ModalsContainer;
