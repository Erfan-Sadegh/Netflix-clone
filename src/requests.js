const API_KEY = 'f785c2de26fb37ba3d3b75faf69ac65f';

export const requests = {
    fetchRendering: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

const instance = [
    {title: 'NETFLIX ORIGINAL', fetchUrl: requests.fetchNetflixOriginals, isLargeRow: true},
    {title: 'Trending Now', fetchUrl: requests.fetchRendering},
    {title: 'Top Rated', fetchUrl: requests.fetchTopRated},
    {title: 'Action Movies', fetchUrl: requests.fetchActionMovies},
    {title: 'Comedy Movies', fetchUrl: requests.fetchComedyMovies},
    {title: 'Horror Movies', fetchUrl: requests.fetchHorrorMovies},
    {title: 'Romance Movies', fetchUrl: requests.fetchRomanceMovies},
    {title: 'Documentaries', fetchUrl: requests.fetchDocumentaries},
]

export default instance;