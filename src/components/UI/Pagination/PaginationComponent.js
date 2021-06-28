import { Pagination } from 'react-bootstrap'
import classes from './PaginationComponent.module.css'
const PaginationComponent = (props) =>
{
     return (
          <Pagination className={classes.pagination}>
               <Pagination.Prev onClick={props.onPrev}/>               
               <Pagination.Next onClick={props.onNext}/>
          </Pagination>
     )
}
export default PaginationComponent
