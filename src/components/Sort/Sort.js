import { useState } from 'react'
import './sort.scss'


function Sort() {
    const [open, setOpen] = useState(false)
    const [popup, setPopup] = useState(0)

    const sortPopup = [
        'популярности',
        'цене',
        'алфавиту'
    ]

    const onClickSetPopup = (id) => {
        setPopup(id)
        setOpen(false)
    }
    return (
        <div className='sort'>
            <div onClick={() => setOpen(!open)} className='sort__label'>
                <img src="../images/sort.svg" alt="sort" />
                <b>Сортировка по:</b>
                <span>{sortPopup[popup]}</span>
            </div>
            {
                open && <div className='sort-popup'>
                    <ul>
                        {sortPopup.map((value, id) => {
                            return <li className={popup == id ? 'active' : ''} key={id} onClick={() => onClickSetPopup(id)}>{value}</li>
                        })
                        }
                    </ul>
                </div>
            }

        </div>
    )
}

export default Sort