import './cart.scss'
import CartPizzaItem from '../CartPizzaItem/CartItem'

function Cart() {
    return (
        <div className='cart'>
            <div className='cart__top'>
                <div className='cart__title'>
                    <img src="../images/cart-black.svg" alt="cart" />
                    <h3>Корзина</h3>
                </div>
                <div className='cart__basket'>
                    <img src="../images/basket.svg" alt="basket" />
                    <span>Очистить корзину</span>
                </div>
            </div>
            <div className='cart__content'>
                <CartPizzaItem/>
            </div>
        </div>

    )
}

export default Cart