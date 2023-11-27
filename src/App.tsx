import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import mainLogo from './assets/rickAndMorty.svg';

// import style from './components/Main/Main.module.scss';

import style from './App.module.scss';

import Character from './Pages/Character';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Section />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
      <Footer />
    </Router>
  );
}
const Home = () => {
  return (
    <>
      <Main />
    </>
  );
};

const Section = () => {
  return (
    <section className={style.headings}>
      <img src={mainLogo} alt="Rick" />
      <h1>The Rick and Morty API</h1>
    </section>
  );
};

export default App;
