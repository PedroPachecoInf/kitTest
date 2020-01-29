import React from 'react';

const MyComponent = () => {
  const labeText = 'Enter name: ';
  const buttonText = { text: 'Click here bro!' }
  return (
    <div>
      <div>TOU A DAR RENDER</div>
      <label className="label" htmlFor="name">{labeText}</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
    </div>
  )
};

export default MyComponent;
