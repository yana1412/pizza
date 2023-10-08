
import { useState } from 'react'
import './categories.scss'


const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
]

function Categories() {
    const [isActiveId, setIsActiveId] = useState(0)

    // const OnClickActive = id => {
    //     setIsActiveId(id)
    // }

  
    return (
        <ul>
            { 
                categories.map((value, id) => {
                    return <li key={id}><button  className={isActiveId == id ? 'active' : ''}  onClick={() => setIsActiveId(id)} type='button' >{value}</button></li>
                })
            }
        </ul>
    )
}

export default Categories