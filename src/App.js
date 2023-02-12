import './App.css';
import Navbar from './Components/Navbar';
import Movies from './Components/movies';
import Watch from './Components/Watch';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  let listMovies = [ 
    {
    title: 'Yuta',
    para : 'Trunks is the Earthling and Saiyan hybrid son of Bulma and Vegeta, and the older brother of Bulla.',
    image : 'Yuta.jpg' 
  },

  {
    title: 'dragon-ball',
    para : 'Trunks is the Earthling and Saiyan hybrid son of Bulma and Vegeta, and the older brother of Bulla.',
    image : 'dragon-ball.jpg'
  },
  

  {
    title: 'RIMI',
    para : 'Remi Nobodys Girl is a 26-episode Japanese animated television series by Nippon Animation, broadcast from 1996 to 1997 in Japan on the Fuji Television network as an installment to Nippon Animations famed World Masterpiece Theater series',
    image : 'rimi (1).jpg'

  },

  

  

]
   
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path = '/home' element = {<Movies movies = {listMovies}/>}/>
            <Route path = '/home' element = {<Movies/>}/>            
            <Route path='/watch' element = {<Watch/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;