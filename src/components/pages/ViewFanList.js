import {useState, useEffect} from 'react'
import axios from 'axios'
import Fan from '../Fan/Fan'
import Spinner from '../UI/Spinner/Spinner'

const ViewFanList = () => {
     const [list, setList] = useState([])   
     const [isLoading, setIsLoading] = useState(false)
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
          })
          .catch(function (error) {
          })
     }
     useEffect(() => {fetchList()}
          , [])

     if(isLoading)
     {
          return <Spinner/>
     }
     return (
          <div>
               {list.map((f) => <Fan key={f.id} name={f.name} age={f.age}/>)}
          </div>         
     )
}

export default ViewFanList
