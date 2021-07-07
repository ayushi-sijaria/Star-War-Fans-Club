import React from 'react'
import Card from '../UI/Card/Card'

const Fan = (props) => {
     return (
          <Card>
              <p>Name:{props.name}</p> 
              <p>Age:{props.age}</p>
          </Card>
     )
}

export default Fan
