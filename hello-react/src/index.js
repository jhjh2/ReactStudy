import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* React Element */
// type, props, children

/* JSX */
// React component는 Pascal Case로 작성 : <List />, <Button />
// JavaScript 코드를 {중괄호} 내부에 작성
// HTML의 class, for와 같은 예약어는 className, htmlFor로 대체


// const title = React.createElement('h1',null,'JSX Test');
// const text = React.createElement('p',null,'Paragrahp Text');
// const container = React.createElement('div',null,[title,text]);
const javaScriptCode = 'can put js code in { }';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>JSX Test {javaScriptCode}</h1>
      <p>Paragraph Text</p>
  </div>
);


reportWebVitals();
