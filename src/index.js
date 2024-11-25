// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { LanguageProvider } from './LanguageContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <LanguageProvider> */}
//     <App />
//     {/* </LanguageProvider> */}
//   </React.StrictMode>
// );

// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n'; // Import your i18n configuration
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
   <DndProvider backend={HTML5Backend}>
   <App />
 </DndProvider>,
);

reportWebVitals();
