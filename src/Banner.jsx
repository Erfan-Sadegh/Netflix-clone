import { useState, useEffect } from 'react';
import axios from './axios';
import { requests } from './requests';
import { base_url } from './Row';
import './styles/Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getBannersData() {
      const { data } = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
      return data;
    }
    getBannersData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        background: `url('${base_url}${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

        <div className='banner__description'>
          <h2>{truncate(movie?.overview, 150)}</h2>
        </div>
      </div>

      <div className='banner__fadeBottom'></div>
    </header>
  );
}

export default Banner;
