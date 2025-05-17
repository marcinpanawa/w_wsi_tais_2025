import logo from './logo.svg';
import './App.css';
// import { Card } from './Components/Card';

function Card({ title, description }) {
  return (
    <li className="list-group-item">      
      {title}
      <p>{description}</p>
    </li>
  );
}

function App() {
  const cardsArray = [
    { title: "one", description: "description one" },
    { title: "two", description: "description two" },
    { title: "three", description: "description three" },
    { title: "three", description: "description three" },
    { title: "three", description: "description three" },
    { title: "three", description: "description three" },
    { title: "ten", description: "description three" },
  ];
//generuj array 20 obiektów z obiektami json  { title, description} tematyka : płyty heavy metal
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="list-group w-75">
        {cardsArray.map((rest, i) => (
          <Card {...rest} />
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;
