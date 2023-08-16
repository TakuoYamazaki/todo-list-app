import logo from './logo.svg';
import './App.css';
import { Header } from './componets/Header';
import { Top } from './Pages/Top';
import { Footer } from './componets/Footer';
import { Routes, Route } from 'react-router-dom';
import { Edit } from './routes/Edit';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </main>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
