
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Notes from './components/Notes';
import Create from './components/Create';
import { createTheme, ThemeProvider } from '@mui/material'
import { red } from '@mui/material/colors';

function App() {

  const theme = createTheme({
    palette: {
      secondary: red
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Router >
        <Routes>
          <Route path="/" element={<Notes />}>
          </Route>
          <Route path="/create" element={<Create />}>
          </Route>
        </Routes>
      </Router >
    </ThemeProvider>
  );
}

export default App;



