import ReactPaginate from 'react-paginate'
import './style.scss'

function Pagination(){
    return(
        <ReactPaginate
        className='pagination'
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event)=> console.log(event)}
    pageRangeDisplayed={8}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />
    )
}

export default Pagination