type MovieProps = {
  backdrop_path: String
}

function Backdrop({ movie }: { movie: MovieProps | null }) {
  if (!movie) {
    return null;
  }
  return (
    <div className='backdrop-container' style={{ backgroundImage: "url(https://www.themoviedb.org/t/p/w1280" + movie.backdrop_path + ")" }}> </div>
  );
}

export default Backdrop;