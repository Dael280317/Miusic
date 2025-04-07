import { useState } from 'react'
import { Box, Card, IconButton, Typography, Slider, Avatar } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import { usePlayer } from '../context/PlayerContext'

function Player() {
  const { currentTrack, isPlaying, togglePlay, setVolume, currentTime, duration, seekTo, formatTime } = usePlayer()
  const [volume, setLocalVolume] = useState(80)

  const progress = duration ? (currentTime / duration) * 100 : 0

  const handleVolumeChange = (event, newValue) => {
    setLocalVolume(newValue)
    setVolume(newValue)
  }

  const handleProgressChange = (event, newValue) => {
    seekTo(newValue)
  }

  if (!currentTrack) return null

  return (
    <Card
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Avatar
        src={currentTrack.album?.cover_medium}
        alt={currentTrack.title}
        variant="rounded"
        sx={{ width: 56, height: 56 }}
      />
      <Box sx={{ minWidth: 200 }}>
        <Typography variant="subtitle1" noWrap>
          {currentTrack.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {currentTrack.artist?.name}
        </Typography>
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size="small">
            <SkipPreviousIcon />
          </IconButton>
          <IconButton onClick={togglePlay}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton size="small">
            <SkipNextIcon />
          </IconButton>
        </Box>
        <Box sx={{ width: '50%', minWidth: 200, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" color="text.secondary">
            {formatTime(currentTime)}
          </Typography>
          <Slider
            size="small"
            value={progress}
            onChange={handleProgressChange}
            sx={{ flex: 1 }}
          />
          <Typography variant="caption" color="text.secondary">
            {formatTime(duration)}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 150 }}>
        <VolumeUpIcon fontSize="small" />
        <Slider
          size="small"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Volume"
        />
      </Box>
    </Card>
  )
}

export default Player