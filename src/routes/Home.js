import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?sort_by=download_count"
      )
    ).json();
    setMovieList(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  /*
  
  * 요즘엔 then 대신 async await 사용

  then()을 사용한 코드 :
  
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=download_count")
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.data.movies);
        setLoading(false);
      });
  }, []);
  
  */

  return (
    <div>
      <h1>Movie list</h1>
      {loading ? (
        <strong>Loding...</strong>
      ) : (
        <div>
          {/*
            <주의사항>

            1. Movie Component도 map 메서드를 통해 생성됨으로 
            key value를 설정해주어야 함

            2. prop의 이름을 JavaScript식으로 작성해야 한다.
            ex) medium_cover_image -> coverImg

            ** Error 수정

            "return" 키워드를 작성하지 않아 에러 발생
            -> 함수이기 때문에 return을 해야 Movie 컴포넌트가 렌더링될 수 있음
            
          */}
          {movieList.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                coverImg={movie.medium_cover_image}
                summary={movie.summary}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
