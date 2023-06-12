import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListView from './pages/list-view';
import MaterialView from './pages/material-view';
import NotFound from './pages/not-found';

function App() {
  return (
    <div className="w-100 mw8 center pa3 sans-serif">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/details/:id" element={<MaterialView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
