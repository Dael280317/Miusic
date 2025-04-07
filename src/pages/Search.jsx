import { useState } from 'react'
import { Box, TextField, Grid, Typography, Card, CardContent, CardMedia, IconButton, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { searchTracks } from '../services/deezerApi'
import { usePlayer } from '../context/PlayerContext'

function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const { playTrack } = usePlayer()

  const handleSearch = async (event) => {
    event.preventDefault()
    if (!searchQuery.trim()) return

    setLoading(true)
    try {
      const data = await searchTracks(searchQuery)
      setSearchResults(data.data)
    } catch (error) {
      console.error('Error searching tracks:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box>
      <form onSubmit={handleSearch}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar canciones, artistas o álbumes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 4 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>

      {loading ? (
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Buscando...
        </Typography>
      ) : searchResults.length > 0 ? (
        <Grid container spacing={3}>
          {searchResults.map((track) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={track.id}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { backgroundColor: 'action.hover' }
              }}>
                <CardMedia
                  component="img"
                  image={track.album.cover_medium}
                  alt={track.title}
                  sx={{ aspectRatio: '1/1' }}
                />
                <CardContent sx={{ flexGrow: 1, position: 'relative' }}>
                  <Typography variant="h6" noWrap>
                    {track.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {track.artist.name}
                  </Typography>
                  <IconButton
                    onClick={() => playTrack(track)}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      bottom: 8,
                      backgroundColor: 'primary.main',
                      '&:hover': { backgroundColor: 'primary.dark' }
                    }}
                  >
                    <PlayArrowIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : searchQuery && (
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          No se encontraron resultados
        </Typography>
      )}
    </Box>
  )
}

export default Search