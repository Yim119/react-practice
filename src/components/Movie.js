import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/* 
Link 컴포넌트는 route 이동을 위해 필요하다.

-> <a> 태그를 이용하면, 라우터를 이동할 때마다 웹페이지가 새로고침된다.
--> Link 컴포넌트를 사용하면 새로고침없이 더욱 부드럽게, 빠르게 라우터간 이동이
    가능하다.
*/

// prop을 전달하는 방식으로 Movie를 component로 제작

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <img src={coverImg} alt={title}></img>
      <h5>{summary}</h5>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

// propTypes를 통해 data type 규정
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
