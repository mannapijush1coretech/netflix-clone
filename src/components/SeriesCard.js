import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SeriesCarousel({ movies }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: movies.length > 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: movies.length > 3,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {movies && movies.length > 0 ? movies.map(data => (
          <SeriesCard key={data.id} movieData={data} />
        )) : (<div>No movies available</div>)}
      </Slider>
    </div>
  );
}
 function SeriesCard({ movieData }) {
  return (
    <div className="movie-card">
            <div className='absolute bottom-4 p-2 sarala-bold'>{movieData.original_name}</div>
            
            <img src={`http://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`} alt={movieData.original_name} />
           
            <div className="movie-card-overlay p-1 backdrop-blur rounded-b-xl bg-black/50 flex-col text-left">
            <div className="movie-title sarala-bold">{movieData.original_name}</div>
            <div className='align-middle text-xs'><span className='inline-icon material-symbols-outlined'>grade </span>{movieData.vote_average.toFixed(1)}  <span className='inline-icon material-symbols-outlined'>full_hd</span><div className='text-gray-300'>{movieData.first_air_date.substring(0,4)}</div> </div>
          <p className="movie-overview sarala-regular">{movieData.overview.length > 150 ? `${movieData.overview.substring(0, 150)}...` : movieData.overview}</p>
        
      </div>
    </div>
  );
}
