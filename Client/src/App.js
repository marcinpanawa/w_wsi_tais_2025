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
  {
    "title": "Master of Puppets",
    "description": "Trzeci album studyjny Metalliki, uznawany za arcydzieło thrash metalu."
  },
  {
    "title": "Painkiller",
    "description": "Legendarne dzieło Judas Priest z 1990 roku, będące kwintesencją speed metalu."
  },
  {
    "title": "Reign in Blood",
    "description": "Przełomowy album Slayer, który zdefiniował brutalność w thrash metalu."
  },
  {
    "title": "Paranoid",
    "description": "Klasyk Black Sabbath, który pomógł stworzyć fundamenty heavy metalu."
  }
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
