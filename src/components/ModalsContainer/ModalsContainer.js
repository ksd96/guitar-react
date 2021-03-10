import classNames from 'classnames/bind';
import PopupAddBasket from '../PopupAddBasket/PopupAddBasket.js';
import PopupGoBasket from '../PopupGoBasket/PopupGoBasket.js';

import './styles/overlay.scss';

const ModalsContainer = ({
  status,
  data,
  type,
  closePopup,
  addCardInBasket
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
  } else {
    popup = null;
  };

  return (
    <div className={classContainer}>
      {popup}
    </div>
  );
};

export default ModalsContainer;
