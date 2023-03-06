import { useState } from 'react';
import axios from './axios';
import { useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './styles/Row.css';

export const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function getMovies() {
      const { data } = await axios.get(fetchUrl);
      setMovies(data.results);
      return data;
    }
    getMovies();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // 'https://developers.google.com/youtube/player_parameters'
      autoPlay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      {movies ? (
        <div className='row__posters'>
          {movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              key={movie?.id}
              src={`${base_url}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie?.name}
            />
          ))}
        </div>
      ) : (
        <div>Loading ...</div>
      )}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
