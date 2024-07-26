import React, { useRef, useState,useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function MovieCarousel({ movies }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad:'ondemand',
        arrows: movies.length > 5,
        afterChange: current => setCurrentSlide(current),
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
        {movies && movies.length > 0 ? movies.map((data,index) => (
          <MovieCard 
          key={data.id}
          movieData={data} 
          index={index} 
          currentSlide={currentSlide}/>
        )) : (<div>No movies available</div>)}
      </Slider>
    </div>
  );
}

function MovieCard({ movieData,index,currentSlide }) {
    const cardRef=useRef(null);
 
    const getCardClass = () => {
        const centerIndex = Math.floor((5 - 1) / 2); // Center index based on slidesToShow
        const offset = index - currentSlide;
        if (offset === centerIndex) {
          return 'card-popout-center'; // Center card
        } else if (offset < centerIndex) {
          return 'card-popout-right'; // Card to the right of the center
        } else {
          return 'card-popout-left'; // Card to the left of the center
        }
      };
    

  return (
    <div className={`movie-card ${getCardClass()}`} ref={cardRef}>
            <div className='absolute bottom-4 p-2 sarala-bold'>{movieData.original_title}</div>
            
            <img src={`http://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`} alt={movieData.original_title} />
           
            <div className="movie-card-overlay p-1 backdrop-blur rounded-b-xl bg-black/50 flex-col text-left">
            <div className="movie-title sarala-bold">{movieData.title}</div>
            <div className='align-middle text-xs'><span className='inline-icon material-symbols-outlined'>grade </span>{movieData.vote_average.toFixed(1)}  <span className='inline-icon material-symbols-outlined'>full_hd</span><div className='text-gray-300'>{movieData.release_date.substring(0,4)}</div> </div>
          <p className="movie-overview sarala-regular">{movieData.overview.length > 150 ? `${movieData.overview.substring(0, 150)}...` : movieData.overview}</p>
        
      </div>
    </div>
  );
}
