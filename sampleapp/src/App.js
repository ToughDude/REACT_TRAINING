import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import ParentComponent from './trial2/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <ProductList />
    </div>
  );
}

export default App;
