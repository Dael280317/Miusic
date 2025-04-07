import { useState } from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton, Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Library() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  const removeFavorite = (trackId) => {
    const updatedFavorites = favorites.filter(track => track.id !== trackId)
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Tu Biblioteca
      </Typography>

      {favorites.length > 0 ? (
        <Grid container spacing={3}>
          {favorites.map((track) => (
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
                  <Box sx={{ position: 'absolute', right: 8, bottom: 8, display: 'flex', gap: 1 }}>
                    <IconButton
                      onClick={() => removeFavorite(track.id)}
                      sx={{ color: 'error.main' }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      sx={{
                        backgroundColor: 'primary.main',
                        '&:hover': { backgroundColor: 'primary.dark' }
                      }}
                    >
                      <PlayArrowIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            No tienes canciones favoritas aún
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/search"
          >
            Explorar Música
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Library