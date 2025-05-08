import React from 'react';
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Button = ({text}) => {
    return (
      <button>{text}</button>
    )
}

root.render(
  <React.Fragment>
    <Button text="hola mundo 1" />
    <Button text="hola mundo 2" />
  </React.Fragment>
);


