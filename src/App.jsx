import './App.css';
import Alldoc from './Components/Alldoc';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';
import DocDetials from './Components/DocDetials';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path='/' element={<Alldoc />} />
          <Route path='view/:id' element={<DocDetials />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </section>

      <footer>
        <Footer />
      </footer>
    </div >
  );
}

export default App;
