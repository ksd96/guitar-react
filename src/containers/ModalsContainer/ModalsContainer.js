import PropTypes from 'prop-types';

import PopupDeleteCard from '../../components/Modals/PopupDeleteCard/PopupDeleteCard.js';
import PopupCode from '../../components/Modals/PopupCode/PopupCode.js';
import PopupAddBasket from '../../components/Modals/PopupAddBasket/PopupAddBasket.js';
import PopupGoBasket from '../../components/Modals/PopupGoBasket/PopupGoBasket.js';
import ModalsBox from '../../components/ModalsBox/ModalsBox.js';

import { popupTypes } from '../../consts/consts.js';

const ModalsContainer = ({
  type,
  data,
  closePopupHandler,
  addCardBasketHandler,
  deleteCardHandler,
}) => {

  let popup;
  if (type === popupTypes.DELETE_CARD) {
    popup = <PopupDeleteCard data={data} closePopup={closePopupHandler} deleteCard={deleteCardHandler} />;
  } else if (type === popupTypes.PROMO) {
    popup = <PopupCode text={data.text} closePopup={closePopupHandler} />;
  } else if (type === popupTypes.ADD_IN_BASKET) {
    popup = <PopupAddBasket data={data} closePopup={closePopupHandler} addCardInBasket={addCardBasketHandler} />;
  } else if (type === popupTypes.GO_BASKET) {
    popup = <PopupGoBasket closePopup={closePopupHandler} />;
  } else {
    popup = null;
  }
  return (
    <ModalsBox
      status={type}
      onClosePopup={closePopupHandler}
    >
      {popup}
    </ModalsBox>
  )
};

ModalsContainer.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
  closePopupHandler: PropTypes.func,
  addCardBasketHandler: PropTypes.func,
  deleteCardHandler: PropTypes.func
};

export default ModalsContainer;
