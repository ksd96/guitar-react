import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import PopupAddBasket from '../../components/Modals/PopupAddBasket/PopupAddBasket.js';
import PopupGoBasket from '../../components/Modals/PopupGoBasket/PopupGoBasket.js';
import PopupDeleteCard from '../../components/Modals/PopupDeleteCard/PopupDeleteCard.js';
import PopupCode from '../../components/Modals/PopupCode/PopupCode.js';

import { popupTypes } from '../../consts/consts.js';

import './styles/overlay.scss';

const ModalsContainer = ({
  status,
  data,
  type,
  onClosePopup,
  onAddCardInBasket,
  onDeleteCard
}) => {

  const classContainer = classNames({
    "overlay": true,
    "overlay_opened": status === true,
  });

  let popup;
  if (status === true && type === popupTypes.ADD_IN_BASKET) {
    popup = <PopupAddBasket data={data} closePopup={onClosePopup} addCardInBasket={onAddCardInBasket} />;
  } else if (status === true && type === popupTypes.GO_BASKET) {
    popup = <PopupGoBasket closePopup={onClosePopup} />;
  } else if (status === true && type === popupTypes.DELETE_CARD) {
    popup = <PopupDeleteCard data={data} closePopup={onClosePopup} deleteCard={onDeleteCard} />
  } else if (status === true && type === popupTypes.PROMO) {
    popup = <PopupCode text={data} closePopup={onClosePopup} />
  } else {
    popup = null;
  };

  return (
    <div onClick={(evt) => {if (evt.target === evt.currentTarget){onClosePopup()}}} className={classContainer}>
      {popup}
    </div>
  );
};

ModalsContainer.propTypes = {
  status: PropTypes.bool,
  data: PropTypes.object,
  type: PropTypes.string,
  onClosePopup: PropTypes.func,
  onAddCardInBasket: PropTypes.func,
  onDeleteCard: PropTypes.func
}

export default ModalsContainer;
