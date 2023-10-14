import './App.css';
import { Header } from './componets/Header';
import { Top } from './Pages/Top';
import { Footer } from './componets/Footer';
import { Routes, Route } from 'react-router-dom';
import { Edit } from './routes/Edit';
import React from "react";
import 'tailwindcss/tailwind.css';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path={`/tasks/:id/edit`} element={<Edit />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
