import { MuiThemeProvider } from 'material-ui/styles';
import './App.css';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';

function App() {
  return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
  );
}

export default App;
