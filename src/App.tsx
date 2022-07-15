import React from 'react';
import logo from './logo.svg';
import Button from './components/Button/index';

function App() {
  return (
    <div className="App">
      <Button size='small'>small</Button>
      <Button >default</Button>
      <Button size='large'>large</Button>
      <Button btnType='link' href='#'>link</Button>
      <Button disabled>disabled</Button>
      <Button btnType='link' href='#' disabled={true}>disabledlink</Button>
    </div>
  );
}

export default App;
