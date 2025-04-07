import { useState, useEffect } from 'react'
import { Grid, Typography, Card, CardContent, CardMedia, IconButton, Box } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { getTopTracks } from '../services/deezerApi'
import { usePlayer } from '../context/PlayerContext'

function Home() {
  const [topTracks, setTopTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const { playTrack } = usePlayer()

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await getTopTracks()
        setTopTracks(response.data)
      } catch (error) {
        console.error('Error fetching top tracks:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTopTracks()
  }, [])

  if (loading) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
        Cargando...
      </Typography>
    )
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Top Canciones
      </Typography>
      <Grid container spacing={3}>
        {topTracks.map((track) => (
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
    </Box>
  )
}

export default Home