import logo from './logo.svg';
import './App.css';
import ContactCont from './components/conteiners/contact_cont';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactCont></ContactCont>
      </header>
    </div>
  );
}

export default App;
