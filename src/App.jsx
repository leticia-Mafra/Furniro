import "./App.css";
import Header from './components/Header/header';
import Propaganda from './components/Propaganda/propaganda';
import Categoria from './components/Categoria/categoria';
import Produto from './components/Produto/produto';
import Inspiration from './components/Inspiration/inspiration'

const App = () => {
  return <div>
    <Header/>
    <Propaganda/>
    <Categoria/>
    <Produto/>
    <Inspiration/>
  </div>;

};

export default App;