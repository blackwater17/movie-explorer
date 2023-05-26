let BASE_URL = "/#";
if (process.env.NODE_ENV !== 'development') BASE_URL = '/movie-explorer#'; 
export default BASE_URL; 