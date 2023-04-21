import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({id, coverImg, title, summary, year, genres}){
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary.length > `${summary.slice(0,235)}` ? "": summary}</p>
            <p>{year}</p>
            <ul>
            {genres.map((g) => (<li key={g}>{g}</li>))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;