
import './cartItem.scss'

function CartItem() {
    return (
        <div div className='item' >
            <div className='item__title'>
                <img src="../images/pizza-cart/1.jpg" alt="pizza" />
                <div>
                    <h4>Сырный цыпленок</h4>
                    <p>тонкое тесто, 26 см.</p>
                </div>
            </div>
            <div className='item__number'>
                <button className='item__minus' type='button'>-</button>
                <span>1</span>
                <button className='item__plus' type='button'>+</button>
            </div>
            <p className='item__price'>770 ₽ </p>
            <img src="../images/delete.svg" alt="delete" />
        </div >
    )

}

export default CartItem