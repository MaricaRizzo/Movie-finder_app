export default function MovieCard(props) {
  console.log(props.movie);
  return (
    <div>
      <li>
        <h3>{props.movie.Title}</h3>
        <p>{props.movie.Year}</p>
        <img src={props.movie.Poster} alt={props.movie.Title} width="100" />
      </li>
    </div>
  );
}
