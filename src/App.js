// BrowserRouter 컴포넌트를 Router로 호출
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// -> HashRouter 컴포넌트를 사용하면 URL의 사이에 특수기호가 삽입된다.
// Ex) localhost:9000/#/detail
import Home from "./routes/Home";
import Detail from "./routes/Detail";

/*
react-router-dom
npm i react-router-dom@5.3.0
https://v5.reactrouter.com/web/guides/quick-start

react-router-dom 5버전 -> 버전6 바뀐 부분

1. Switch컴포넌트가 Routes컴포넌트로 대체
Switch -> Routes

2. Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고, 
element prop에 자식 컴포넌트를 할당하도록 변경
<Route path="/" element={< Home />} />

react-router-dom 6버전 문서
https://reactrouter.com/docs/en/v6/getting-started/overview
*/

/*
Router의 원리 :
특정 Route에게 할당한 URL로 이동하면, 해당 Route에 포함된 컴포넌트들을 렌더링!
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        React Router 는 동적 URL 기능을 지원한다.
        path에 콜론(":")을 활용하여 URL에서의 변수 사용을 가능하게 한다.

        ex) /movie/:id --> /movie/movieID
        -> 해당 URL이 "id"라는 변수를 받을 것이라고 알려주는 것!
        --> useParams를 통해 해당 변수에 대한 데이터를 가져올 수 있다.
        */}
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
