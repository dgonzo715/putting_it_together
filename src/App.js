import './App.css';
import Person from './components/Person';

const App = () => {
  return (
    <div className="App">
      <Person 
      name = {"Doe, Jane"}
      age = { 45 }
      hairColor = { "Blonde"}
      />
      <Person 
      name = {"Smith, John"}
      age = { 48 }
      hairColor = { "Dark Brown"}
      />
    </div>
  );
}

export default App;
