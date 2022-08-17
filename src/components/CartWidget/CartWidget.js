import cartLogo from './shopping-cart.png';
import './CartWidget.css';
// import {CartContext} from '../../context/CartContext';


function CartWidget(prop){



    return(
        <div className='shopping-cart ms-5 pe-3 d-flex'>
            <img
                src={cartLogo}
                className="d-inline-block align-top cart-logo"
                alt="Shopping Cart"
            />
            <label className='align-self-center'>{prop.counter}</label>
        </div>
    );
}

export default CartWidget;