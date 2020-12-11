import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import 'semantic-ui-css/semantic.min.css';
import HeaderNav from './components/core/HeaderNav';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Books />
    </div>
  );
}

export default App;
