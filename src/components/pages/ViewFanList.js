import {useState, useEffect} from 'react'
import axios from 'axios'
import Fan from '../Fan/Fan'
import Spinner from '../UI/Spinner/Spinner'
import PaginationComponent from '../UI/Pagination/PaginationComponent'

const ViewFanList = () => {
     const [list, setList] = useState([])   
     const [isLoading, setIsLoading] = useState(false)
     const [counter, setCounter] = useState(1);
     const [maxCounter, setMaxCounter] = useState(1)
     const fetchList = () =>
     {
          setIsLoading(true)
          axios.get('https://react-http-2b2ab-default-rtdb.firebaseio.com/fans.json')
          .then((response) => {
               const fanList = []
               for(const key in response.data)
               {
                    const fan = {
                         id: key,
                         name: response.data[key].name,
                         age: response.data[key].age
                    }
                    fanList.push(fan)
               }
               setList(fanList)
               setIsLoading(false)
               setMaxCounter(Math.ceil(list.length/3))
          })
          .catch(function (error) {
          })
     }
     useEffect(() => {fetchList()}, [maxCounter,isLoading,list,counter])

     const incCounterHandler = () =>
     {
          if(counter<maxCounter)
          setCounter(counter+1)
     }
     const decCounterHandler = () =>
     {
          if(counter>1)
          setCounter(counter-1)
     }
     if(isLoading)
     {
          return <Spinner/>
     }
     if(list.length<1)
     {
          return <div style={{margin:'188px'}}>
               <p>No fan found!!!</p>
               <p>Enroll yourself as one.</p>
          </div>
          
     }
     return (
          <div>
               {list.slice(counter*3-3,counter*3).map((f) => <Fan key={f.id} name={f.name} age={f.age}/>)}
               <PaginationComponent onNext={incCounterHandler} onPrev={decCounterHandler}/>
          </div>         
     )
}

export default ViewFanList
