import { Pagination } from 'react-bootstrap'
const PaginationComponent = (props) =>
{
     return (
          <Pagination >
               <Pagination.Prev onClick={props.onPrev}/>
               
               <Pagination.Next onClick={props.onNext}/>
          </Pagination>
     )
}
export default PaginationComponent
