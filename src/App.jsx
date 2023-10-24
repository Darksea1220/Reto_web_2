import './App.css';
import 'h8k-components';
import SearchCustomer from './components';
const title = "Customer Search";

const App = () => {
  return (
    <div className="App">
      <h1>{title}</h1>
      <SearchCustomer />
    </div>
  );
}

export default App;
