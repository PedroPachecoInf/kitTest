import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const labeText = 'Enter name: ';
  const buttonText = { text: 'Click here bro!' }

  return (
    <div>
      <label className="label" htmlFor="name">{labeText}</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));