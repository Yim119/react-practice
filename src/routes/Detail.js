import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  /* 
  useParams() : URL의 파라미터 데이터를 가져오는 React router의 함수

  -> Route 컴포넌트의 path에 작성된 URL에 변수(파라미터)를 설정했다면, 
     해당 파라미터의 정보를 받아온다.

  */
  const { id } = useParams();
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMoive();
  }, []);
  return <h1>hi</h1>;
}

export default Detail;
