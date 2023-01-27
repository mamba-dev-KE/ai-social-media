import { Routes, Route } from 'react-router-dom';
import { Header, Main } from './components';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
