
import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import PizzaItem from '../components/PizzaItem/PizzaItem'
import { pizzaData } from '../store'
import Pagination from '../components/Pagination/Pagination'
import { useContext } from 'react'
import { SearchContext } from '../App.tsx'


function Home() {
    const { searchValue } = useContext(SearchContext)

    return (
        <>
            <div className='categories'>
                <Categories />
                <Sort />
            </div>
            <h1>Все пиццы</h1>
            <div className='content'>
                {pizzaData.filter(obj => {
                    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                        return true
                    } return false
                }).map((obj) => (
                    <PizzaItem key={obj.id} {...obj} />
                ))}
            </div>
            <Pagination />
        </>

    )
}

export default Home


