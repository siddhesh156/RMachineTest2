import './App.css';
import Header from './Component/Header/Header';
import Dashboard from './Component/Dashboard/Dashboard';
import { Provider } from 'react-redux'
import { store} from './Redux/store'; 

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Dashboard />
     </Provider>
  );
}

export default App;
