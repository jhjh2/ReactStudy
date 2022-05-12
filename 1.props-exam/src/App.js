//import React from 'react'; // export default
import React, {Component} from 'react'; // export
import BookList from './components/BookList';

import Books from './static_data/Books';

// 함수형 컴포넌트
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// 클래스형 컴포넌트
// react 라이브러리가 화면을 마운팅할 때
// 개발자가 제공한 컴포넌트의 render() 함수를 호출하여
// 리턴되는 react Element를 virtual Dom을 통해 화면에 나타낸다
class App extends Component {
  render() {
    return (
      <BookList books={Books}/> // BookList 컴포넌트에 props 전달
    )
  }
}

export default App;
