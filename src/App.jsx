import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './theme'
import Navbar from './components/Navbar'
import Player from './components/Player'
import Home from './pages/Home'
import Search from './pages/Search'
import Library from './pages/Library'
import { PlayerProvider } from './context/PlayerContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PlayerProvider>
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, pb: 10 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/library" element={<Library />} />
              </Routes>
            </Box>
            <Player />
          </Box>
        </Router>
      </PlayerProvider>
    </ThemeProvider>
  )
}

export default App