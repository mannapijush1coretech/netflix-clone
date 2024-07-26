import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';

import axios from 'axios';
import Slider,{MovieCard} from './components/MovieCard';
import MovieCarousel from './components/MovieCard';
import Footer from './components/Footer';
import SeriesCarousel from './components/SeriesCard';
import Featured from './components/Featured';


const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&region=in&sort_by=popularity.desc',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWFiZjE0ZWRkODA2YmUzNDc5N2JlMWU4ZWJjNDU3YyIsIm5iZiI6MTcyMTk3MzU3OS45Mjk1ODUsInN1YiI6IjY2YTMzODkwNGVkMzNlZjYyMGU4MTlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3AstmMZWudygGg_nEu_ivokUP_11HmLkNP1Jg_Y8AP0'
  }
};



function App() {
  const [trendingMovie,setTrendingMovie]=useState([]);
  const [topRated,setTopRated]=useState([]);
  const [tvseries,setTvSeries]=useState([])

  useEffect(()=>{
    axios.get('dummy.json')
    .then(response=>{
      console.log(response.data.trending);
      setTrendingMovie(response.data.trending);
      setTopRated(response.data.top_rated);
      setTvSeries(response.data.series);
    })
    
  },[])

  

  return (
    <div className="App ">
      <Header/>
      <Featured/>
      <div className='my-6 text-left px-6 text-xl sarala-bold'>Trending</div>
        {trendingMovie&& trendingMovie.length>0?(<MovieCarousel movies={trendingMovie} />):(<div></div>)}
        <div className='my-6 text-left px-6 text-xl sarala-bold'>TV Series</div>
        {tvseries&& tvseries.length>0?(<SeriesCarousel movies={tvseries} />):(<div></div>)}
      <div className='my-6 text-left px-6 text-xl sarala-bold'>Top Rated</div>
        {topRated&& topRated.length>0?(<MovieCarousel movies={topRated} />):(<div></div>)}
    

    <Footer/>
    </div>
      
  );
}

export default App;
