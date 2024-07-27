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




function App() {
  const [trendingMovie,setTrendingMovie]=useState([]);
  const [topRated,setTopRated]=useState([]);
  const [tvseries,setTvSeries]=useState([]);
  const [local,setlocal]=useState([]);

  useEffect(()=>{
    axios.get('dummy.json')
    .then(response=>{
      console.log(response.data.trending);
      setTrendingMovie(response.data.trending);
      setTopRated(response.data.top_rated);
      setTvSeries(response.data.series);
      setlocal(response.data.local);
    })
    
  },[])

  

  return (
    <div className="App">
      <Header/>
      <Featured/>
      <div className='my-6 text-left px-6 text-xl sarala-bold'>Trending</div>
        {trendingMovie && trendingMovie.length>0 ?(<MovieCarousel movies={trendingMovie} />):(<div></div>)}
        <div className='my-6 text-left px-6 text-xl sarala-bold'>TV Series</div>
        {tvseries&& tvseries.length>0?(<SeriesCarousel movies={tvseries} />):(<div></div>)}
      <div className='my-6 text-left px-6 text-xl sarala-bold'>Top Rated</div>
        {topRated&& topRated.length>0?(<MovieCarousel movies={topRated} />):(<div></div>)}
      <div className='my-6 text-left px-6 text-xl sarala-bold'>Local</div>
        {local&& local.length>0?(<MovieCarousel movies={local} />):(<div></div>)}
    <Footer/>
    </div>
      
  );
}

export default App;
