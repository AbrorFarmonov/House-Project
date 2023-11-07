import './css/style.css'
import Header from './components/Header';
import Main from './components/Main';
import Products from './components/Products';
import Info from './components/Info'
import Command from './components/Command';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
        <Header/>
      <div className='container'>
        <Main/>
        <Products/>
      </div>
        <Info/>
        <Command/>
      <Footer/>
    </div>
  );
}

export default App;
