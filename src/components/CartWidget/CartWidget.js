import cartLogo from './shopping-cart.png';
import './CartWidget.css';
// import {CartContext} from '../../context/CartContext';


function CartWidget(prop){



    return(
        <div className='shopping-cart ms-5 pe-3'>
            <a href="#link" className="d-flex link-primary">
                <img
                    src={cartLogo}
                    className="d-inline-block align-top cart-logo"
                    alt="Shopping Cart"
                />
                <label className='align-self-center'>{prop.counter}</label>
            </a>
        </div>
    );
}

export default CartWidget;