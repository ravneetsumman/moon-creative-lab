import './App.css';
import Books from './components/Books';
import 'semantic-ui-css/semantic.min.css';
import HeaderNav from './components/core/HeaderNav';
import Footer from './components/core/Footer';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Container>
        <Books />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
