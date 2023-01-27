import { Routes, Route } from 'react-router-dom';
import { Home, CreatePost } from './pages';
import { Header } from './components';

type Props = {};

const App = ({}: Props) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
