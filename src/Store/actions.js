import axios from "axios"
export const fetchMovies = () => {
     
          return (dispatch) => {
                axios.get('https://swapi.dev/api/films')
               .then (response =>{
                    const data = response.json();
                    const loadedMovies = [];
                    var i=1
                    for (const m of data.results) {
                    loadedMovies.push({
                         index:i++,
                         id: m.episode_id,
                         title: m.title,
                         director: m.director,
                         producer: m.producer
                    });
                    }
                         }
               )
               .catch(error => {})
          }
}
