import { useState } from 'react'
import './pizzaItem.scss'

function PizzaItem({ imgUrl, price, title}) {
    const [pizzaCount, setPizzaCount] = useState(0)
    return (
        <div className='pizza-wrapper'>
            <img src={imgUrl} alt="pizza" />
            <h3>{title}</h3>
            <form>
                <label>
                    <input type="checkbox" />
                    <p>тонкое</p>
                </label>
                <label>
                    <input type="checkbox" />
                    <p>традиционное</p>
                </label>
                <label>
                    <input type="checkbox" />
                    <p>26 см.</p>
                </label>
                <label>
                    <input type="checkbox" />
                    <p>30 см.</p>
                </label>
                <label>
                    <input type="checkbox" />
                    <p>40 cм.</p>
                </label>
            </form>
            <div className='price__wrapper'>
                <span type='button'>{price}</span>
                <button  onClick={() => setPizzaCount(pizzaCount + 1)}>
                    <img src="../images/plus.svg" alt="plus" />
                    <p >Добавить </p>
                    <div className='btn-plus' >{pizzaCount}</div>
                </button>
            </div>
        </div>
    )
}
export default PizzaItem