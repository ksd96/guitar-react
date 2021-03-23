import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PopupGoBasket = ({
  closePopup
}) => {

  return (
    <div className="popup__wrapper popup__wrapper_added">
      <Link to="/basket" onClick={closePopup} className="popup__button popup__button_type_go-basket" type="button">Перейти в корзину</Link>
      <button onClick={closePopup} className="popup__button popup__button_type_go-shoping" type="button">Продолжить покупки</button>
    </div>
  );
};

PopupGoBasket.propTypes = {
  closePopup: PropTypes.func
};

export default PopupGoBasket;
