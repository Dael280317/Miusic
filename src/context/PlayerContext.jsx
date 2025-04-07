import { createContext, useState, useContext, useCallback } from 'react'

const PlayerContext = createContext()

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function PlayerProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const playTrack = (track) => {
    if (audio) {
      audio.pause()
      audio.src = ''
    }

    if (track.preview) {
      const newAudio = new Audio(track.preview)
      newAudio.volume = 0.8
      
      newAudio.addEventListener('loadedmetadata', () => {
        setDuration(newAudio.duration)
      })

      newAudio.addEventListener('timeupdate', () => {
        setCurrentTime(newAudio.currentTime)
      })
      
      newAudio.addEventListener('ended', () => {
        setIsPlaying(false)
        setCurrentTime(0)
      })

      setAudio(newAudio)
      setCurrentTrack(track)
      newAudio.play()
      setIsPlaying(true)
    }
  }

  const togglePlay = () => {
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const setVolume = (value) => {
    if (audio) {
      audio.volume = value / 100
    }
  }

  const seekTo = useCallback((value) => {
    if (audio) {
      const newTime = (value / 100) * duration
      audio.currentTime = newTime
      setCurrentTime(newTime)
    }
  }, [audio, duration])

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playTrack,
        togglePlay,
        setVolume,
        currentTime,
        duration,
        seekTo,
        formatTime
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }
  return context
}