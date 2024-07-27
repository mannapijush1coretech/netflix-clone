
//tmdb api
import './Featured.css';

const featured={
    "original_language": "en",
        "original_title": "Schindler's List",
        "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "popularity": 91.046,
        "poster_path": "http://image.tmdb.org/t/p/original/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
        "release_date": "1993-12-15",
        "title": "Schindler's List",
        "vote_average": 8.566,
};
export default function Featured(){
    return(
        <div className="featured  text-left w-full h-2/5 -z-50 bg-cover bg-center pt-80" style={{backgroundImage:`url(${featured.poster_path})`}} >
          <div className="backdrop-blur-sm p-2">
            <div className="text-left px-4 text-2xl sarala-bold">{featured.original_title}</div>
            <div className="px-4"><span className="inline-icon material-symbols-outlined px-2">thumb_up</span>{featured.popularity.toFixed(2)}% <span className='inline-icon material-symbols-outlined'>grade </span>{featured.vote_average}</div>
            <div className="px-4 pb-4">
                {featured.overview}
            </div>
              <div className="dec">
            <div className="playbtn"><span class="inline-icon material-symbols-outlined px-2">play_arrow</span> Play
                </div>
                <div className="playbtn1"><span class="inline-icon material-symbols-outlined px-2">read_more</span>More Info</div>
                </div>
            </div>
        </div>
    )
}