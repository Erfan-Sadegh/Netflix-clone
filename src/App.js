import React from 'react';
import instance from './requests';
import Row from './Row';
import Banner from './Banner';

function App() {

  const row = instance.map(row => (
    <Row key={row.title} title={row.title} fetchUrl={row.fetchUrl} isLargeRow={row.isLargeRow} />
  )) 

  return (
    <div>
      <Banner />

      {row}
      {/* <Row
        title={'NETFLIX ORIGINAL'}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={'Trending Now'} fetchUrl={requests.fetchRendering} />
      <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated} />
      <Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies} />
      <Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies} />
      <Row title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={'Romance Movies'} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
