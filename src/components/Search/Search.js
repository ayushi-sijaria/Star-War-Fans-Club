import { Form, Button, FormControl } from 'react-bootstrap'
const Search = (props) => {
     return (
          <div>
               <Form className="d-flex" style={{margin: '10px'}}>
                    <FormControl
                    type="search"
                    placeholder="Search with movie title..."
                    className="mr-2"
                    aria-label="Search"
                    style={{margin: '10px', width: '350px'}}
                    onChange={props.searchTerm}
                    />
                    <Button 
                         variant="outline-success" 
                         style={{margin: '10px', 
                                 height: '40px',   
                                 width:'100px'}}
                         onClick={props.search}
                    >Search</Button>
               </Form>
          </div>
     )
}
export default Search
