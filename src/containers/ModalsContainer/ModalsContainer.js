import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import PopupAddBasket from '../../components/Modals/PopupAddBasket/PopupAddBasket.js';
import PopupGoBasket from '../../components/Modals/PopupGoBasket/PopupGoBasket.js';
import PopupDeleteCard from '../../components/Modals/PopupDeleteCard/PopupDeleteCard.js';
import PopupCode from '../../components/Modals/PopupCode/PopupCode.js';

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
  } else if (status === true && type === `promo`) {
    popup = <PopupCode text={data} closePopup={closePopup} />
  } else {
    popup = null;
  };

  return (
    <div onClick={(evt) => {if (evt.target === evt.currentTarget){closePopup()}}} className={classContainer}>
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
