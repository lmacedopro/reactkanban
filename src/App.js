import React from 'react';
import Router from './routes';
//import { DndProvider } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';

//import Header from './components/Header';
//import Board from './components/Board';*/

//import Dash from './pages/Dash';

function App() {
  return (
    <>
      <Router />

      <GlobalStyle />
    </>
  );
}

export default App;
