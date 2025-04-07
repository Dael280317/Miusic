import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { path: '/', icon: <HomeIcon />, label: 'Inicio' },
    { path: '/search', icon: <SearchIcon />, label: 'Buscar' },
    { path: '/library', icon: <LibraryMusicIcon />, label: 'Biblioteca' }
  ]

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'background.paper' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 4 }}>
          Miusic
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              startIcon={item.icon}
              color={location.pathname === item.path ? 'primary' : 'inherit'}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar