import { useContext } from 'react'
import './style.scss'
import { SearchContext } from '../../App.tsx'
function Search() {
    const{searchValue, setSearchValue} = useContext(SearchContext)
    return (
        <>
         <input
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)} className='input' type="text" placeholder="Поиск пицц..." />
            {searchValue && <img onClick={()=> setSearchValue('') } className='search__delete' src="../images/delete.png" alt="delete" />}
        </>
       
    )
}

export default Search